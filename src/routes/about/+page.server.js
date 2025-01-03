import db from "$lib/db.js";

export async function load() {
    const [games, publishers] = await Promise.all([
        db.getGames(),
        db.getPublishers()
    ]);

    return {
        games,
        publishers
    };
}