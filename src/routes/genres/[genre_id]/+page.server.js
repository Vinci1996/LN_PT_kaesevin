import db from "$lib/db";
import { error } from "@sveltejs/kit";

export async function load({params}) {
  console.log("Übergebene ID aus params: ", params.genre_id);

  const genre = await db.getGenre(params.genre_id);

  const games = await db.getGamesByGenre(params.genre_id);

  if (!genre) {
    throw error(404, "Genre not found");
  }
  return {
    genre,
    games,
  };
}

export const actions = {
  addToLibrary: async ({ request }) => {
    let data = await request.formData();
    let id = data.get("id");
    let game = {
      _id: id,
      library: true
    }
    await db.updateGame(game);
  },
  removeFromLibrary: async ({ request }) => {
    let data = await request.formData();
    let id = data.get("id");
    let game = {
      _id: id,
      library: false
    }
    await db.updateGame(game);
  }
}
