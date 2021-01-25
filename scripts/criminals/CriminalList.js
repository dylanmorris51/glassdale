import { getCriminals, useCriminals } from './CriminalProvider.js'
import { Criminal } from './Criminal.js'



export const criminalList = () => {
    
    getCriminals()
        .then(() => {
            const criminalArray = useCriminals()
            const criminalContainer = document.querySelector(".criminalsContainer")
            let criminalHTMLRepresentation = ""
    
            for (const criminal of criminalArray) {
                criminalHTMLRepresentation += Criminal(criminal)
            }
    
            criminalContainer.innerHTML += `
            <h3> Criminals </h3>
            <article class="criminalList">
                ${criminalHTMLRepresentation}
            </article>`
        })
}