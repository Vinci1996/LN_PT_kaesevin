import db from "$lib/db.js";
import { writeFile } from 'fs/promises';
import path from 'path';

export const load = async () => {
  const publishers = await db.getPublishers();
  const genres = await db.getGenres();
  return {
    publishers,
    genres
  };
};

export const actions = {
  create: async ({ request }) => {
    try {
      const data = await request.formData();
      const posterFile = data.get('poster');
      
      let posterPath = '/images/placeholder.jpg'; // Default falls kein Bild

      if (posterFile && posterFile.size > 0) {
        // Create unique filename
        const filename = `${Date.now()}_${posterFile.name}`;
        const filepath = path.join('static/images', filename);
        
        // Save file
        await writeFile(filepath, Buffer.from(await posterFile.arrayBuffer()));
        posterPath = `/images/${filename}`;
      }

      let game = {
        name: data.get("name"),
        date: data.get("date"),
        duration: data.get("duration"),
        minAge: data.get("minAge"),
        publisher_id: data.get("publisher_id"),
        genre_id: data.get("genre_id"),
        poster: posterPath
      };

      await db.createGame(game);
      return { success: true };
    } catch (err) {
      console.error('Error creating game:', err);
      return { success: false, error: 'Could not create game' };
    }
  },
};