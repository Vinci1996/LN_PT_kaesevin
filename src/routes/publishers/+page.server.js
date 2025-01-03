import db from "$lib/db";

export async function load() {
  return {
    publishers: await db.getPublishers()
  };
};
