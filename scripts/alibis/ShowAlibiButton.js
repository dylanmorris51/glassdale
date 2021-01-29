//  Implement an alibi button on each criminal card labeled "Associate Alibis". Give each button a unique ID by interpolating the property of the criminal value
//  When the user clicks the button, iterate the array of known_associates for that criminal and display the following information. Display it in a dialog box, as a side bar, or wherever you like.



// The name of the known associate
// The alibi that the known associate is providing for the criminal to try to prove the criminals' innocence.
// If any of the alibis for some of your suspects are noteworthy, then make sure you create a new notes and POST it to your personal notes API.

// Which components do you need to create for this feature?
// Where is the data coming from in the API? Do you need a new provider?
// Which component should dispatch a custom event when the user clicks on the alibi button?
// Which component should react to that custom event?
// Does data need to be send along with the event?
// Which DOM element would contain the list of alibis? Do you need a new one, or can they go in an existing one?

const contentTarget = document.querySelector(".alibiButton")
const eventHub = document.querySelector(".container")


const showAlibiButton = () => {
    contentTarget.innerHTML = `<button id="associates--${criminal.id}">Associate Alibis</button>`
}
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showNotes") {
        const customEvent = new CustomEvent("showNotesClicked")
        eventHub.dispatchEvent(customEvent)
    }
})


