import { useConvictions, getConvictions } from './ConvicationProvider.js'

// ConvictionSelect component that renders a select HTML element
//     which lists all convictions in the Glassdale PD API

const contentTarget = document.querySelector(".filters__crime")

export const ConvictionSelect = () => {
    getConvictions()
        .then(() => {
            const convictions = useConvictions()
            render(convictions)
        })
}

const render = convictionsCollection => {
    return contentTarget.innerHTML += `
        
        <select class="dropdown" id="crimeSelect">
        <option value="no-option-selected">Please select a crime...</option>
        ${
            convictionsCollection.map(convictionObj => {
                const conviction = convictionObj.name
                return `
                
                <option value="${convictionObj.id}">${conviction}</option>`
            })
        }
        </select>
    `
}