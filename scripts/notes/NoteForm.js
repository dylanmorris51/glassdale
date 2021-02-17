import { useCriminals } from '../criminals/CriminalProvider.js'

const contentTarget = document.querySelector(".noteFormContainer")
const saveButtonTarget = document.querySelector(".noteSaveButton")

const render = () => {
    const criminalArray = useCriminals()
    
    contentTarget.innerHTML =  `
        <form id="noteForm">
            <fieldset id="noteFormField">
            <fieldset id="dateField">
                <label for="note-date">Date of Entry</label>
                <input type="date" name="note-date" id="note-date">
            </fieldset>
            <fieldset id="textField">    
                <label for="note-text">Entry:</label>
                <textarea name="note-text" id="note-text" rows="4" cols="50"></textarea>
            </fieldset>
            <fieldset id="suspectField">
                <label for="noteform--criminal">Suspect:</label>
                <select id="noteform--criminal" class="criminalSelect">
                    ${criminalArray.map(criminal =>  `<option value="${criminal.id}">${criminal.name}</option>`).join("")}
                </select>
            </fieldset>
            </fieldset>
            
            
            </form>
            `
            saveButtonTarget.innerHTML= `<button id="saveNote">Save Note</button>`
            
        
}


export const NoteForm = () => {
    render()
}