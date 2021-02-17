import { useCriminals } from '../criminals/CriminalProvider.js'
import { render } from './NoteList.js'

const eventHub = document.querySelector(".container")
let notes = []

const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")

    eventHub.dispatchEvent(noteStateChangedEvent)
}

export const getNotes = () => {
    return fetch('http://localhost:8088/notes')
        .then(response => response.json())
        .then(parsedNotes => {
            notes = parsedNotes
        })
}

export const useNotes = () => {
    return notes.slice()
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

    clickEvent.preventDefault()

    if (clickEvent.target.id === "saveNote") {
        const noteText = document.querySelector("#note-text")
        const noteDate = document.querySelector("#note-date")
        const noteSuspect = document.querySelector("#noteform--criminal")
        const newNote = {
            "text": noteText.value,
            "date": noteDate.value,
            "criminalId": noteSuspect.value

        }

        saveNote(newNote)
    }
})

// New function with Delete method to delete notes
const deleteNote = noteId => {
    return fetch(`http://localhost:8088/notes/${noteId}`, {
        method: "DELETE"
    })
        .then(getNotes)
}

// New event listener that handles the delete button


eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        /*
            Invoke the function that performs the delete operation.

            Once the operation is complete you should THEN invoke
            useNotes() and render the note list again.
        */
        deleteNote(id).then(
            () => {
                const updatedNotes = useNotes()
                const criminals = useCriminals()
                render(updatedNotes, criminals)
            }
        )
    }
})