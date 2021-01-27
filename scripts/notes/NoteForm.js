const contentTarget = document.querySelector(".noteFormContainer")

const render = (noteForm) => {
    contentTarget.innerHTML =  `
        <form id="noteForm">
            <fieldset id="noteFormField">
                <label for="note-date">Date of Entry</label>
                <input type="date" name="note-date" id="note-date">
                <label for="note-text">Enter Note Text</label>
                <input type="field" name="note-text" id="note-text">
                <label for="note-suspect">Suspect</label>
                <input type="text" name="note-suspect" id="note-suspect">
            </fieldset>
        </form>
        <button id="saveNote">Save Note</button>
    `
}


export const NoteForm = () => {
    render()
}