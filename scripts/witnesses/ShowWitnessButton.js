const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".witnessButton")

export const ShowWitnessButton = () => {
    contentTarget.innerHTML = "<button id='showWitness'>Show Witness Statements</button>"
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showWitness") {
        const customEvent = new CustomEvent("showWitnessStatements")
        eventHub.dispatchEvent(customEvent)
    }
})

// Add a listener to the module that is listening for this event (this is the talking module)