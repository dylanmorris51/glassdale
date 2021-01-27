const evntHub = document.querySelector(".container")
let notes = []

const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")

    eventHub.dispatchEvent(noteStateChangedEvent)
}

const getNotes = () => {
    return fetch('http://localhost:8088/notes')
        .then(response => response.json())
        .then(parsedNotes => {
            notes = parsedNotes
        })
}

export const saveNote = note => {
    return fetch('http://localhost:8088/notes', {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(note)
    })
    .then(getNotes)
    .then(dispatchStateChangeEvent)
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        const noteText = document.querySelector("#note-text")
        const noteDate = document.querySelector("#note-date")
        const noteSuspect = document.querySelector("#note-suspect")
        const newNote = {
            "note-text": noteText.value,
            "note-date": noteDate.value,
            "note-suspect": noteSuspect.value
        }
// RETURN HERE AND FIX NEW NOTE OBJECT
        saveNote(newNote)
    }
})