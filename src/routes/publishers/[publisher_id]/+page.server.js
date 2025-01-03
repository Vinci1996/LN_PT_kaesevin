import db from "$lib/db";
import { error } from "@sveltejs/kit";

export async function load({ params }) {

  console.log("Übergebene ID aus params: ", params.publisher_id);

  const publisher = await db.getPublisher(params.publisher_id);
  console.log("Gefundener Publisher:", publisher); //Debug

  const games = await db.getGamesByPublisher(params.publisher_id);
  console.log("Games in load function:", games); //Debug


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
