export const WitnessHTMLConverter = (witnessObject) => {
    
    return `
        <section class="witness__card" id="witnessStatement__${witnessObject.id}">
        <div class="witness__name">Name: ${ witnessObject.name }</div>
        <div class="witness__statements">Statements: ${ witnessObject.statements }</div>
        </section>
        `
    }