// Import der benötigten Module
import db from "$lib/db";
import { redirect } from "@sveltejs/kit";

// Load-Funktion zum Laden der Spieldaten
export async function load({ params }) {

  const game = await db.getGame(params.game_id);
  const publisher = await db.getPublisherByGame(game);
  const genre = await db.getGenreByGame(game);
  

  return {
    game,
    publisher,
    genre,
  };
}

// Aktionen für das Formular (hier: Löschen)
export const actions = {
  delete: async ({ request }) => {
    const data = await request.formData();
    await db.deleteGame(data.get("id"));
    redirect(303, "/games");
  },
};