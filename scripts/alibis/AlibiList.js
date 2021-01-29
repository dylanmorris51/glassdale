import { useConvictions } from '../convictions/ConvicationProvider.js'
import { useCriminals, getCriminals } from '../criminals/CriminalProvider.js'

const eventHub = document.querySelector(".container")

export const AlibiList = (alibiToDisplay) => {
    alert(alibiToDisplay)
}

eventHub.addEventListener("alibiSelected", event => {
    const payload = parseInt(event.detail.criminalID)
    const criminalArray = useCriminals()
    const releventCriminal = criminalArray.find(element => {
        let chosenCriminalObject = []
        if (element.id === payload) {
            return chosenCriminalObject
        }
    })
    // {
    //     "id": 2,
    //     "age": 37,
    //     "eyeColor": "brown",
    //     "name": "Rogelio Hills",
    //     "workHistory": [
    //       "Ryan Group",
    //       "Gerhold and Sons",
    //       "Morar Inc"
    //     ],
    //     "phone": "344-792-1788",
    //     "address": "186 Meredith Trail Apt. 653\nWest Lillafurt, ND 55590-5576",
    //     "incarceration": {
    //       "start": "1983-03-07T10:37:22.178Z",
    //       "end": "2014-03-13T13:57:55.918Z"
    //     },
    //     "conviction": "manslaughter",
    //     "arrestingOfficer": "Katherine Thompson",
    //     "known_associates": [
    //       {
    //         "name": "Gianni Botsford",
    //         "alibi": "mowing the lawn"
    //       }
    //     ]
    //   },
    let alibiData = []
    alibiData.push(releventCriminal.known_associates[0].name)
    alibiData.push(releventCriminal.known_associates[0].alibi)
    const alibiDataToString = alibiData.join(" ")
    AlibiList(alibiDataToString)
    
})