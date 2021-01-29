const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".witnessButton")

export const ShowWitnessButton = () => {
    contentTarget.innerHTML = "<button id='showWitness'>Show Witness Statements</button>"
}