export const WitnessHTMLConverter = (witnessObject) => {
    return `
        <section class="witness__card" id="witnessStatement__${witnessObject.id}">
        <div class="witness__name">Entry:${ witnessObject.name }</div>
        <div class="witness__statements">statements: ${ witnessObject.statements }</div>
        </section>
        `
    }