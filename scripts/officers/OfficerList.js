import { getOfficers, useOfficers } from "./OfficerProvider.js";
import { Officer } from './Officer.js'


const officerContainer = document.querySelector(".officersContainer")

export const OfficerList = () => {
    
    getOfficers()
    .then(() => {
        const officerArray = useOfficers()
        let officerHTMLRepresentation = ""

        for (const officer of officerArray) {
            officerHTMLRepresentation += Officer(officer)
        }
        
        officerContainer.innerHTML = `
        <h3> Glassdale Officers </h3>
        <article class="officerList">
            ${officerHTMLRepresentation}
        </article>
        `
    })
}