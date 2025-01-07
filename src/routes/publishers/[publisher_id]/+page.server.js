import db from "$lib/db";
import { error } from "@sveltejs/kit";

export async function load({ params }) {

  const publisher = await db.getPublisher(params.publisher_id);
  const games = await db.getGamesByPublisher(params.publisher_id);

  if (!publisher) {
    throw error(404, "Publisher not found");

  }
  return {
    publisher,
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
