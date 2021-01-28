import { getNotes, useNotes } from './NoteDataProvider.js'
import { NoteHTMLConverter } from './Note.js'
import { useOfficers } from '../officers/OfficerProvider.js'

const contentTarget = document.querySelector(".noteList")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("showNotesClicked", customEvent => {
    NoteList()

})

eventHub.addEventListener("noteStateChanged", customEvent => {
    // if showNotesClicked hasn't been clicked (equals false) then do nothing, but if its true then redisplay the list
    if (contentTarget.innerHTML !== "") {
        NoteList()
    }
})

const render = (noteArray) => {
    const allNotesConvertedToStrings = noteArray.map(
        arrayObj => NoteHTMLConverter(arrayObj)
    ).join("")
    return contentTarget.innerHTML = allNotesConvertedToStrings
}

export const NoteList = () => {
    getNotes()
        .then(() => {
            const allNotes = useNotes()
            console.log("Notes Flag:", allNotes)
            render(allNotes)
        })
}

// FOLLOW REST OF CHAPTER FIGURE OUT WHERE TO IMPORT NOTE LIST (NOT MAIN JS) AND FOLLOW ERRORS TO FIX THEM