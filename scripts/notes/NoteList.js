import { getNotes, useNotes } from './NoteDataProvider.js'
import { NoteHTMLConverter } from './Note.js'
import { useOfficers } from '../officers/OfficerProvider.js'

const contentTarget = document.querySelector(".noteList")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("showNotesClicked", customEvent => {
    NoteList()
})

const render = (noteArray) => {
    const allNotesConvertedToStrings = noteArray.map(
        NoteHTMLConverter(noteArray)
    ).join("")
    contentTarget.innerHTML = allNotesConvertedToStrings
}

export const NoteList = () => {
    getNotes()
        .then(() => {
            const allNotes = useNotes()
            render(allNotes)
        })
}

// FOLLOW REST OF CHAPTER FIGURE OUT WHERE TO IMPORT NOTE LIST (NOT MAIN JS) AND FOLLOW ERRORS TO FIX THEM