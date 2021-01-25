import { getOfficers, useOfficers } from "./OfficerProvider";
import { Officer } from './Officer.js'



getOfficers()
    .then(() => {
        const officerArray = useOfficers()
        const officerContainer = document.querySelector(".officersContainer")
        let officerHTMLRepresentation = ""

        for (const officer of officerArray) {
            officerHTMLRepresentation += Officer(officer)
        }
        
        officerContainer.innerHTML += `
        <h3> Glassdale Officers </h3>
        <article class="officersList">
            ${officerHTMLRepresentation}
        </article>
        `
    })