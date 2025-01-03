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
    
    //game: await db.getGame(params.game_id),
    //publisher: await db.getPublisher((await db.getGame(params.game_id)).publisher_id),
    //genre: await db.getGenre((await db.getGame(params.game_id)).genre_id)
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