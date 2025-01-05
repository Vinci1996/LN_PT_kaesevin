import db from "$lib/db.js";

export async function load() {
  const games = await db.getGames();
  return {
    games: games.filter(game => game.library)
  };
}

export const actions = {
  removeFromLibrary: async ({request}) => {
    let data = await request.formData();
    let id = data.get("id");
    let game = { 
      _id: id,
      library: false
    } 
    await db.updateGame(game);
  }
};