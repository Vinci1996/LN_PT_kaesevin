import db from "$lib/db.js";

export async function load() {
  return {
    games: await db.getGames()
  };
}

export const actions = {
  addToLibrary: async ({request}) => {
    let data = await request.formData();
    let id = data.get("id");
    let game = { 
      _id: id,
      library: true
    } 
    await db.updateGame(game);
  },
  removeFromLibrary: async ({request}) => {
    let data = await request.formData();
    let id = data.get("id");
    let game = { 
      _id: id,
      library: false
    } 
    await db.updateGame(game);
  }
}
