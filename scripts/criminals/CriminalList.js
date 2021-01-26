import { getCriminals, useCriminals } from './CriminalProvider.js'
import { Criminal } from './Criminal.js'



// export const criminalList = () => {
    
//     getCriminals()
//         .then(() => {
//             const criminalArray = useCriminals()
//             const criminalContainer = document.querySelector(".criminalsContainer")
//             let criminalHTMLRepresentation = ""
    
//             for (const criminal of criminalArray) {
//                 criminalHTMLRepresentation += Criminal(criminal)
//             }
    
//             criminalContainer.innerHTML += `
//             <h3> Criminals </h3>
//             <article class="criminalList">
//                 ${criminalHTMLRepresentation}
//             </article>`
//         })
// }

// New code for event hub

const eventHub = document.querySelector(".container")

eventHub.addEventListener("crimeChosen"), event => {
    if (event.detail.crimeThatWasChosen !== "0"){
        const matchingCriminals = appStateCriminals.filter(currentCriminal => {
            if (currentCriminal.conviction === )
            // TODO ---- FIGURE OUT HOW TO MATCH THE FILTERED ARRAY OF CRIMINALS TO CORRESPONDING CONVICTION IN THE CRIMECHOSEN EVENT
        })
        render(matchingCriminals)
    }
} 

const render = criminalCollection => {
    const criminalContainer = document.querySelector(".criminalsContainer")
    criminalContainer.innerHTML = `
        <h3> ${criminalCollection.conviction} Criminals </h3>
            <article class="criminalList">
                ${criminalCollection.name}
            </article>
            `
}

export const CriminalList = () => {
    getCriminals()
        .then(() => {
            const appStateCriminals = useCriminals()
            render(appStateCriminals)
        })
}