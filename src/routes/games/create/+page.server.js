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
    const data = await request.formData();
    let game = {
      name: data.get("name"),
      date: data.get("date"),
      duration: data.get("duration"),
      minAge: data.get("minAge"),
      publisher_id: data.get("publisher_id"),  // Angepasst an Form-Feldnamen
      genre_id: data.get("genre_id"),
    };          // Angepasst an Form-Feldnamen
    await db.createGame(game);
    return { success: true };
  },
};