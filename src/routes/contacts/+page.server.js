//Datenbank db importieren
import db from '$lib/db.js';

//Daten aus der Datenbank laden
//Asynchrone Funktion, die die Daten aus der Datenbank lädt
//Die Funktion wird aufgerufen, wenn die Seite geladen wird
export async function load() {
    const contacts = await db.getContacts();
    console.log("Geladene Kontakte", contacts);
    return {
        contacts: await db.getContacts()
    }
}