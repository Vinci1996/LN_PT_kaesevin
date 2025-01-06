import { DB_URI } from "$env/static/private";
import { MongoClient, ObjectId } from "mongodb"; 

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("PTLN2"); // select database

//////////////////////////////////////////
// games
//////////////////////////////////////////

// Get all games
async function getGames() {
  let games = [];
  try {
    const collection = db.collection("games");

    const query = {};

    // Get all objects that match the query
    games = await collection.find(query).toArray();
    games.forEach((game) => {
      game._id = game._id.toString(); // convert ObjectId to String
    });
  } catch (error) {
    console.log(error);
  }
  return games;
}

// Get game by id
async function getGame(id) {
  let game = null;
  try {
    const collection = db.collection("games");
    const query = { _id: new ObjectId(id) }; // filter by id
    game = await collection.findOne(query);

    if (!game) {
      console.log("No game with id " + id);
    } else {
      game._id = game._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    console.log(error.message);
  }
  return game;
}


async function createGame(game) {
  game.library = false; // default value

    //Umwandlung Umwandlung der ID in Integer
    game.genre_id = parseInt(game.genre_id);
    game.publisher_id = parseInt(game.publisher_id);

    if (!game.poster) {
      game.poster = "/images/placeholder.jpg";
    }
    
    console.log("Game vor dem Insert:", game);  // DEBUG
  try {
    const collection = db.collection("games");
    const result = await collection.insertOne(game);
    return result.insertedId.toString(); // convert ObjectId to String
  } catch (error) {
    console.log(error.message);
  }
  return null;
}


async function updateGame(game) {
  try {
    let id = game._id;
    delete game._id; // delete the _id from the object, because the _id cannot be updated
    const collection = db.collection("games");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.updateOne(query, { $set: game });

    if (result.matchedCount === 0) {
      console.log("No game with id " + id);

    } else {
      console.log("game with id " + id + " has been updated.");
      return id;
    }
  } catch (error) {

    console.log(error.message);
  }
  return null;
}


async function deleteGame(id) {
  try {
    const collection = db.collection("games");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No game with id " + id);
    } else {
      console.log("game with id " + id + " has been successfully deleted.");
      return id;
    }
  } catch (error) {
    console.log(error.message);
  }
  return null;
}


async function getGamesByPublisher(publisher_id) {
  let games = [];
  try {
    // Erst den Publisher holen um seine numerische ID zu bekommen
    const publisher = await db.collection("publishers").findOne({ 
      _id: new ObjectId(publisher_id) 
    });
    
    if (publisher) {
      // Mit der numerischen ID nach Games suchen
      const collection = db.collection("games");
      const query = { publisher_id: publisher.id }; // Hier nutzen wir publisher.id
      console.log("Suche nach Games mit query:", query);
      
      games = await collection.find(query).toArray();
      games.forEach((game) => {
        game._id = game._id.toString();
      });
    }
  } catch (error) {
    console.log(error);
  }
  return games;
}



async function getGamesByGenre(genre_id) {
  let games = [];
  try {
    // Erst den Publisher holen um seine numerische ID zu bekommen
    const genre = await db.collection("genres").findOne({ 
      _id: new ObjectId(genre_id) 
    });
    
    if (genre) {
      // Mit der numerischen ID nach Games suchen
      const collection = db.collection("games");
      const query = { genre_id: genre.id }; // Hier nutzen wir publisher.id
      console.log("Suche nach Games mit query:", query);
      
      games = await collection.find(query).toArray();
      games.forEach((game) => {
        game._id = game._id.toString();
      });
    }
  } catch (error) {
    console.log(error);
  }
  return games;
}



//////////////////////////////////////////
// publishers
//////////////////////////////////////////

// Get all publishers
async function getPublishers() {
  let publishers = [];
  try {
    const collection = db.collection("publishers");

    const query = {};

    // Get all objects that match the query
    publishers = await collection.find(query).toArray();
    publishers.forEach((publisher) => {
      publisher._id = publisher._id.toString(); // convert ObjectId to String
    });
  } catch (error) {
    console.log(error);
    // TODO: errorhandling
  }
  return publishers;
}

// Get publisher by id
async function getPublisher(id) {
  let publisher = null;
  try {
    const collection = db.collection("publishers");
    const query = { _id: new ObjectId(id) }; // filter by id
    publisher = await collection.findOne(query);

    if (!publisher) {
      console.log("No publisher with id " + id);
      // TODO: errorhandling
    } else {
      publisher._id = publisher._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return publisher;
}

// Get publisher by game's publisher_id
async function getPublisherByGame(game) {
  let publisher = null;
  try {
    const collection = db.collection("publishers");
    const query = { id: game.publisher_id }; // Hier nutzen wir die numerische ID aus dem Spiel
    publisher = await collection.findOne(query);

    if (!publisher) {
      console.log("No publisher with id " + game.publisher_id);
    } else {
      publisher._id = publisher._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    console.log(error.message);
  }
  return publisher;
}

//////////////////////////////////////////
// GENRES
//////////////////////////////////////////

async function getGenres() {
  let genres = [];
  try {
    const collection = db.collection("genres");

    const query = {};

  
    genres = await collection.find(query).toArray();
    genres.forEach((genre) => {
      genre._id = genre._id.toString(); 
    });
  } catch (error) {
    console.log(error);

  }
  return genres;
}

// Get publisher by id
async function getGenre(id) {
  let genre = null;
  try {
    const collection = db.collection("genres");
    const query = { _id: new ObjectId(id) }; // filter by id
    genre = await collection.findOne(query);

    if (!genre) {
      console.log("No genre with id " + id);
      // TODO: errorhandling
    } else {
      genre._id = genre._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return genre;
}



// Get genre by game's genre_id
async function getGenreByGame(game) {
  let genre = null;
  try {
    const collection = db.collection("genres");
    const query = { id: game.genre_id }; // Hier nutzen wir die numerische ID aus dem Spiel
    genre = await collection.findOne(query);

    if (!genre) {
      console.log("No genre with id " + game.genre_id);
    } else {
      genre._id = genre._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    console.log(error.message);
  }
  return genre;
}



// export all functions so that they can be used in other files
export default {
  getGames,
  getGame,
  createGame,
  updateGame,
  deleteGame,
  getGamesByPublisher,
  getGamesByGenre,
  getPublishers,
  getPublisher,
  getPublisherByGame,
  getGenres,
  getGenre,
  getGenreByGame,
};
