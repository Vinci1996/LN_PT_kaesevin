import db from "$lib/db.js";

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
      
      let posterPath = '/images/placeholder.jpg';

      if (posterFile && posterFile.size > 0) {
        const buffer = Buffer.from(await posterFile.arrayBuffer());
        posterPath = `data:${posterFile.type};base64,${buffer.toString('base64')}`;
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
      console.error('Error:', err);
      return { success: false };
    }
  }
};