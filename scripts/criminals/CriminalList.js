import { getCriminals, useCriminals } from './CriminalProvider.js'
import { Criminal } from './Criminal.js'
import { useConvictions } from '../convictions/ConvicationProvider.js'
import { useOfficers } from '../officers/OfficerProvider.js'
import { getFacilities, useFacilities } from '../facility/FacilityProvider.js'
import { getCriminalFacilities, useCriminalFacilities } from '../facility/CriminalFacilityProvider.js'




const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".criminalsContainer")
const facilityTarget = document.querySelector(".facilityContainer")


export const CriminalList = () => {
    getCriminals()
    .then(getFacilities)
        .then(getCriminalFacilities)
        .then(
            () => {
                // Pull in the data now that it has been fetched
                const facilities = useFacilities()
                const crimFac = useCriminalFacilities()
                const criminals = useCriminals()

                // Pass all three collections of data to render()
                render(criminals, facilities, crimFac)
        
        // ! old code:
        // .then(() => {
        //     const criminalsArray = useCriminals()
        //     renderToDom(criminalsArray)
        })
    }
    
    const render = (criminalsToRender, allFacilities, allRelationships) => {
        // Step 1 - Iterate all criminals
        contentTarget.innerHTML = `
        <h3>Criminals</h3>
        
        <article class="criminalList"> ${criminalsToRender.map(
            (criminalObject) => {
        // Step 2 - Filter all relationships to get only ones for this criminal
                const facilityRelationshipsForThisCriminal = allRelationships.filter(cf => cf.criminalId === criminalObject.id)
            
        //  Step 3 - Convert the relationships to facilities with map()
                const facilities = facilityRelationshipsForThisCriminal.map(cf => {
                    const matchingFacilityObject = allFacilities.find(facility => facility.id === cf.facilityId)
                    return matchingFacilityObject
                })
        // Must pass the matching facilities to the Criminal component
        return Criminal(criminalObject, facilities)
            }
        ).join("")} </article>`        
}

// Conviction select listener
eventHub.addEventListener("crimeChosen", event => {
    if (event.detail.crimeThatWasChosen !== "0") {
        
    const convictionsArray = useConvictions()
            const chosenConvictionObject = convictionsArray.find(convictionObj => {return convictionObj.id === parseInt(event.detail.crimeThatWasChosen)})
    const criminalsArray = useCriminals()
            const filteredCriminalsArray = criminalsArray.filter(criminalObj => {return criminalObj.conviction === chosenConvictionObject.name})
    
    const facilities = useFacilities()
    const crimFac = useCriminalFacilities()    

            render(filteredCriminalsArray, facilities, crimFac)
        }
    }
) 

// Officer select listener
eventHub.addEventListener("officerSelected", event => {
    const officerName = event.detail.officer
    
    const criminals = useCriminals()

    const filteredCriminalsByOfficer = criminals.filter(crimObj => crimObj.arrestingOfficer === officerName)
        
    const facilities = useFacilities()
    const crimFac = useCriminalFacilities()
    render(filteredCriminalsByOfficer, facilities, crimFac)
})

// Alibi listener

eventHub.addEventListener("click", clickEvent => {
    
    let associate = clickEvent.target.id.split("--")[0]
    let criminalID = clickEvent.target.id.split("--")[1]
    
    if (associate === "associates") {
        const customEvent = new CustomEvent("alibiSelected", {
            detail: {
                criminalID: criminalID
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})

//Event listener for show criminals button on the facility cards
eventHub.addEventListener("ShowFacilityCriminals", event => {
    //Using facility ID, filter for relevant criminals, put that array of criminals into render function

    const facilityId = parseInt(event.detail.facilityId)

    const allCriminals = useCriminals()
    const allFacilities = useFacilities()
    const allCrimFac = useCriminalFacilities()


    // Filter all facilities for matching facility id by connecting foreign key with private key
    
const matchingFacilities = allCrimFac.filter(crimFac => crimFac.facilityId === facilityId)

    
    // Take all matching facilities and find    
    const matchingCriminalRelationshipsArray = matchingFacilities.map(crimFac => {
        // For each relationship object return a criminal name that matches the criminal id
        const matchingCriminalsArray = allCriminals.find(crim => crim.id === crimFac.criminalId)
        return matchingCriminalsArray
    })
    
    facilityTarget.innerHTML = ""
    render(matchingCriminalRelationshipsArray, allFacilities, allCrimFac)

})