//Import der db Datei
import db from '$lib/db.js';

//Lädt einen einzelnen Kontakt aus der Datenbank
export function load({params}){
    console.log(params.contact_id);

    //Definiert ein Element, das die Daten des Kontaktes enthält
    let contact = db.getContact(params.contact_id);

    //Gibt die Daten des Kontakts zurück
    return contact;
}

export const actions ={
    update: async ({request}) => {
        const data = await request.formData();
        console.log(data);
    }
}