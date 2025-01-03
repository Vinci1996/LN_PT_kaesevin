import db from "$lib/db.js";

export async function load() {
    const [games, publishers, genres] = await Promise.all([
        db.getGames(),
        db.getPublishers(),
        db.getGenres()
    ]);

    return {
        games,
        publishers,
        genres
    };
}