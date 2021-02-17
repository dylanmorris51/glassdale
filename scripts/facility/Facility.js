export const FacilityHTMLConverter = (facilityObject, criminals) => {
    
    return `
        <div class="facility__card">
            <h4>${facilityObject.facilityName}</h4>
            <div class="facility__details">
                <p>Security Level: ${facilityObject.securityLevel}</p>
                <p>Capacity: ${facilityObject.capacity}</p>
                <div>
                    <h2>Incarcerated Criminals:</h2>
                    <ul>
                        ${criminals.map(criminal => `<li>${criminal.name}</li>`).join("")}
                    </ul>
                </div>
                <button id="criminals--${facilityObject.id}">Show Criminals</button>
            </div>
        </div>
        `
}

const eventHub = document.querySelector(".container")

//Event listener for show criminals button on the facility cards
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("criminals--")) {
        const [prefix, id] = clickEvent.target.id.split("--")
        
        const customEvent = new CustomEvent("ShowFacilityCriminals", {
            detail: {
                facilityId: id
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})