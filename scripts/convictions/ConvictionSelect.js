import { useConvictions, getConvictions } from './ConvicationProvider.js'

// ConvictionSelect component that renders a select HTML element
//     which lists all convictions in the Glassdale PD API

// const contentTarget = document.querySelector(".filters__crime")

// export const ConvictionSelect = () => {
//     getConvictions()
//         .then(() => {
//             const convictions = useConvictions()
//             render(convictions)
//         })
// }

// const render = convictionsCollection => {
//     return contentTarget.innerHTML += `
        
//         <select class="dropdown" id="crimeSelect">
//         <option value="no-option-selected">Please select a crime...</option>
//         ${
//             convictionsCollection.map(convictionObj => {
//                 const conviction = convictionObj.name
//                 return `
                
//                 <option value="${convictionObj.id}">${conviction}</option>`
//             }).join("")
//         }
//         </select>
//     `
// }

/*
    Which element in your HTML contains all components?
    That's your Event Hub. Get a reference to it here.
*/

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")

// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", event => {


    if(event.target.id === "crimeSelect") {

        const customEvent = new CustomEvent("crimeChosen", {
            detail: {
                crimeThatWasChosen: event.target.value
            }
        })

        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)
    }
})

const render = convictionsCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value ="0"> Please select a crime...</option>
                ${convictionsCollection.map(conviction => `
                    <option value="${conviction.id}">${conviction.name}</option>
                `).join("")
            }`
}

export const ConvictionSelect = () => {
    getConvictions()
        .then(() => {
            const convictions = useConvictions()
            render(convictions)
        })
}