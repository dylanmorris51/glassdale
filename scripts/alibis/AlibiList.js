import { useConvictions } from '../convictions/ConvicationProvider.js'
import { useCriminals, getCriminals } from '../criminals/CriminalProvider.js'
import { Alibi } from './Alibi.js'


const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".alibiContainer")

// export const AlibiList = (taco) => {
//     const dataINeed = taco.known_associates[0]

//     const render = criminalAlibi => {
//         let alibiHTMLRepresentation = ""
    
//         for (const alibi of criminalAlibi) {
//             alibiHTMLRepresentation = Alibi(alibi)
//         }
    
//         contentTarget.innerHTML = `
//         <h3> Alibis </h3> 
//             <section class="alibiList">
//                 ${alibiHTMLRepresentation}
//             </section`
    
//     }
    
//     render(dataINeed)

    
// }

eventHub.addEventListener("alibiSelected", event => {
    const payload = parseInt(event.detail.criminalID)
    
    const criminalArray = useCriminals()

    const releventCriminal = (criminalArray.find(element => (element.id === payload))).known_associates
    
    let alibiHTMLRepresentation = ""
    releventCriminal.forEach(element => alibiHTMLRepresentation += Alibi(element))

    contentTarget.innerHTML = alibiHTMLRepresentation
    
})

