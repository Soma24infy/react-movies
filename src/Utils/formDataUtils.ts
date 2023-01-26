import { actorCreationDTO } from "../Actors/actors.model";


export function convertActorToFormData(actor: actorCreationDTO): FormData{
    const formData = new FormData();

    formData.append('name', actor.name);

    if (actor.biography){
        formData.append('biography', actor.biography);
    }

    if (actor.dateofBirth){
        formData.append('dateOfBirth', formatDate(actor.dateofBirth))
    }

    if (actor.picture){
        formData.append('picture', actor.picture);
    }

    return formData;
}


function formatDate(date: Date){
    date = new Date(date);
    const format = new Intl.DateTimeFormat("en", {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });

    const [
        {value: month},,
        {value: day},,
        {value: year}
    ] = format.formatToParts(date);
    //console.log(`${year}-${month}-${day}`);
    return `${year}-${month}-${day}`;
}