import { WitnessHTMLConverter } from './Witness.js'
import { useWitnesses, getWitnesses } from './WitnessDataProvider.js'

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".criminalsContainer")

export const WitnessList = () => {
    getWitnesses()
        .then(() => {
            const statements = useWitnesses()
    // contentTarget.innerHTML = ""
            render(statements)
        })
    
}

const render = (statementsCollection) => {
    let witnessHTMLRepresentation = ""

    for (const statement of statementsCollection) {
        witnessHTMLRepresentation += WitnessHTMLConverter(statement)
    }

    contentTarget.innerHTML += `
    <h3> Witness Statements </h3>
    <section class="witnessList">
        ${witnessHTMLRepresentation}
    </section>
    `
}

eventHub.addEventListener("showWitnessStatements", event => {
    
    if (contentTarget.innerHTML !== "") {
        contentTarget.innerHTML = ""
    }
    WitnessList()
})