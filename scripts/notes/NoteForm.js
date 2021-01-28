const contentTarget = document.querySelector(".noteFormContainer")
const saveButtonTarget = document.querySelector(".noteSaveButton")

const render = (noteForm) => {
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
                <label for="note-suspect">Suspect</label>
                <input type="text" name="note-suspect" id="note-suspect">
            </fieldset>
            </fieldset>
            <button id="saveNote">Save Note</button>
        </form>
        `
        
        
}


export const NoteForm = () => {
    render()
}