import db from "$lib/db.js";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import { redirect } from '@sveltejs/kit';

//Aktionen definieren die vom Server ausgeführt werden
//wenn create ausgelöst wird

export const actions = {
    create: async ({request}) => {

        //Zugriff auf die Formulardaten
        const data = await request.formData();

        // Bild-Link übernehmen
        let picturePath = data.get("picture")?.trim();
        if (!picturePath) {
            picturePath = '/images/placeholder.jpg';
        }

        //Interessen in Array umwandeln
        const interestsString = data.get("interests");
        const interests = interestsString
            .split(",")
            .map(interest => interest.trim())
            .filter(interest => interest.length > 0);

        //Daten aus dem Formular extrahieren
        const rawDate = data.get("birthdate");
        //Neue Variable für das Datum erstellen
        const dateObj = new Date(rawDate);
        //Datum formatieren
        const formattedDate = dateObj.toLocaleDateString("de-DE", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        });

        let contact = {
            name: data.get("name"),
            //Nutzen von exportiertem Datum
            birthdate: formattedDate,
            profession: data.get("profession"),
            interests: interests,
            picture: picturePath
        }

        db.createContact(contact);

        throw redirect(303, '/contacts');

    }
}

function getFileExtension(fileName) {
    return fileName.slice(fileName.lastIndexOf(".") +1);
    
}
