import { getNotes, useNotes } from './NoteDataProvider.js'
import { NoteHTMLConverter } from './Note.js'
import { useCriminals, getCriminals } from '../criminals/CriminalProvider.js'
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

export const render = (noteArray, criminalsArray) => {
    contentTarget.innerHTML = noteArray.map(note => {
        // ! New code:
        // Find related criminal
        
        const relatedCriminal = criminalsArray.find(criminal => criminal.id === parseInt(note.criminalId))
        return `
            <section class="note">
                <h2>Note about ${relatedCriminal.name}</h2>
                ${note.text}
                <div class="note__timestamp">Timestamp: ${ new Date(note.date).toLocaleDateString('en-US')  }</div>
                <button id="deleteNote--${note.id}">Delete</button>
            </section>
        
        `
    }).join("")
    



    
    
    // ! old code:
    // const allNotesConvertedToStrings = noteArray.map(
    //     arrayObj => NoteHTMLConverter(arrayObj)
    // ).join("")
    // return contentTarget.innerHTML = allNotesConvertedToStrings
}

export const NoteList = () => {
    getNotes()
        .then(getCriminals)
        .then(() => {
            const notes = useNotes()
            const criminals = useCriminals()
            
            render(notes, criminals)
        })
}

