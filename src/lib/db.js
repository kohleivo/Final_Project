import { MongoClient, ObjectId } from "mongodb"; // See https://www.mongodb.com/docs/drivers/node/current/quick-start/
import { DB_URI } from "$env/static/private";
import { get } from "svelte/store";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("ContactDB"); // select database

//////////////////////////////////////////
// Contacts
//////////////////////////////////////////

// Get all contacts
async function getContacts() {
  let contacts = [];
  try {
    const collection = db.collection("contacts");

    // You can specify a query/filter here
    // See https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/query-document/
    const query = {};

    // Get all objects that match the query
    contacts = await collection.find(query).toArray();
    contacts.forEach((contact) => {
      contact._id = contact._id.toString(); // convert ObjectId to String
    });
  } catch (error) {
    console.log(error);
    // TODO: errorhandling
  }
  return contacts;
}

// Get contact by id
async function getContact(id) {
  let contact = null;
  try {
    const collection = db.collection("contacts");
    const query = { _id: new ObjectId(id) }; // filter by id
    contact = await collection.findOne(query);

    if (!contact) {
      console.log("No contact with id " + id);
      // TODO: errorhandling
    } else {
      contact._id = contact._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return contact;
}

// create contact
// Example contact object:

async function createContact(contact) {
  // Setzt Standardwerte nur wenn keine Werte vorhanden sind
  contact.picture = contact.picture || "/images/placeholder.jpg";
  contact.interests = contact.interests || [];
  contact.favorite = contact.favorite || false;
  
  try {
      const collection = db.collection("contacts");
      const result = await collection.insertOne(contact);
      console.log("Kontakt erstellt mit ID:", result.insertedId);
      return result.insertedId.toString();
  } catch (error) {
      console.log(error.message);
      console.error("Fehler beim Erstellen:", error);
  }
  return null;
}

// update movie
// Example movie object:
/* 
{ 
  _id: "6630e72c95e12055f661ff13",
  title: "Das Geheimnis von Altura",
  year: 2024,
  length: "120 Minuten",
  actors: [
    "Lena Herzog",
    "Maximilian Schröder",
    "Sophia Neumann"
  ],
  poster: "/images/Altura.png",
  watchlist: false
} 
*/
// returns: id of the updated movie or null, if movie could not be updated
async function updateContact(contact) {
  try {
    let id = contact._id;
    delete contact._id; // delete the _id from the object, because the _id cannot be updated
    const collection = db.collection("contacts");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.updateOne(query, { $set: contact });

    if (result.matchedCount === 0) {
      console.log("No contact with id " + id);
      // TODO: errorhandling
    } else {
      console.log("Contact with id " + id + " has been updated.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// delete movie by id
// returns: id of the deleted movie or null, if movie could not be deleted
async function deleteContact(id) {
  try {
    const collection = db.collection("contacts");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No contact with id " + id);
    } else {
      console.log("Contact with id " + id + " has been successfully deleted.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// export all functions so that they can be used in other files
export default {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact
};
