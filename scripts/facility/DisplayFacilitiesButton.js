const contentTarget = document.querySelector(".facility__button")
const eventHub = document.querySelector(".container")

// Button
export const DisplayFacilitiesButton = () => {

    contentTarget.innerHTML = `
        <button id="displayFacilities">Display Facilities</button>
    `
}

// Click event
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "displayFacilities") {
        const customEvent = new CustomEvent("facilitiesButtonClicked")
        eventHub.dispatchEvent(customEvent)
    }
})