import { getCriminals, useCriminals } from './CriminalProvider.js'
import { Criminal } from './Criminal.js'
import { useConvictions } from '../convictions/ConvicationProvider.js'
import { useOfficers } from '../officers/OfficerProvider.js'



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
const criminalsContainer = document.querySelector(".criminalsContainer")



export const CriminalList = () => {
    getCriminals()
        .then(() => {
            const criminalsArray = useCriminals()
            renderToDom(criminalsArray)
        })
    }
    
    const renderToDom = criminalCollection => {
        // My code before Jissie's walkthrough:
        
        // criminalContainer.innerHTML = `
        //     <h3> ${criminalCollection.conviction} Criminals </h3>
        //         <article class="criminalList">
        //             ${criminalCollection.name}
        //         </article>
        //         `
        // Jisie's walkthrough:
        let criminalHTMLRepresentation = ""
        for (const criminal of criminalCollection)
        criminalHTMLRepresentation += Criminal(criminal)
    
        criminalsContainer.innerHTML = `
        <h3> Criminals </h3>
            <section class="criminalList">
                ${criminalHTMLRepresentation}
            </section>`
    }


eventHub.addEventListener("crimeChosen", event => {
    if (event.detail.crimeThatWasChosen !== "0") {
        
    const convictionsArray = useConvictions()
            const chosenConvictionObject = convictionsArray.find(convictionObj => {return convictionObj.id === parseInt(event.detail.crimeThatWasChosen)})
    const criminalsArray = useCriminals()
            const filteredCriminalsArray = criminalsArray.filter(criminalObj => {return criminalObj.conviction === chosenConvictionObject.name})

            renderToDom(filteredCriminalsArray)
        }
    }
) 

eventHub.addEventListener("officerSelected", event => {
    const officerName = event.detail.officer
    
    const criminals = useCriminals()

    const filteredCriminalsByOfficer = criminals.filter(crimObj => {
        if (crimObj.arrestingOfficer === officerName) {
            return true
        }
    }
    )
    renderToDom(filteredCriminalsByOfficer)
})

// Alibi listener

eventHub.addEventListener("click", clickEvent => {
    
    let associate = clickEvent.target.id.split("--")[0]
    let criminalID = clickEvent.target.id.split("--")[1]
    
    if (associate === "associates") {
        const customEvent = new CustomEvent("alibiSelected", {
            detail: {
                criminalID: criminalID
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})