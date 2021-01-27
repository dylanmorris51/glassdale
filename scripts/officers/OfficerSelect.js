import { useOfficers, getOfficers } from './OfficerProvider.js'


const contentTarget = document.querySelector(".filters__officer")

export const ConvictionSelect = () => {
    getConvictions()
        .then(() => {
            const convictions = useConvictions()
            render(convictions)
        })
}

export const OfficerSelect = () => {
    getOfficers()
        .then(() => {
            const officers = useOfficers()
            render(officers)
        })
}




const render = officerCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select an officer...</option>
                ${officerCollection.map(officer => `
                    <option value="${officer.id}">${officer.name}</option>`
                ).join("")
                }`
}