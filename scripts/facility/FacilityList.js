import { getFacilities, useFacilities } from "./FacilityProvider.js";
import { FacilityHTMLConverter } from './Facility.js'
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js";
import { getCriminalFacilities, useCriminalFacilities } from "./CriminalFacilityProvider.js";

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".facilityContainer")
const criminalsTarget = document.querySelector(".criminalsContainer")

//Fetch call for facility cards
export const FacilityList = () => {
    getFacilities()
        .then(getCriminalFacilities)
        .then(getCriminals)
        .then(() => {
            const facilities = useFacilities()
            const criminals = useCriminals()
            const crimFac = useCriminalFacilities()

            render(facilities, criminals, crimFac)
        })
}

//Render function to display facility cards sorted by criminals
const render = (facilitiesToRender, allCriminals, allRelationships) => {
    
    contentTarget.innerHTML = `
    <h3> Facilities </h3>

    <article class="facilityList">
    ${facilitiesToRender.map(
        (facility) => {
            //create an array of just the objects with relationships for each specific facility
            const criminalRelationshipsForThisFacility = allRelationships.filter(RelObject => RelObject.facilityId === facility.id)
            //Get the criminal names from the relationships array
            const criminals = criminalRelationshipsForThisFacility.map(relObj => {
                const matchingCriminalObject = allCriminals.find(criminal => criminal.id === relObj.criminalId)
                return matchingCriminalObject
            })
            return FacilityHTMLConverter(facility, criminals)
        }
    ).join("")} </article>`
}

//! Stopped here on Friday after class. Never checked to see if any of this works yet. Copy/Pastaing logic from the CriminalList to get it working the same way


// Event listener for display facilities button
eventHub.addEventListener("facilitiesButtonClicked", event => {
    criminalsTarget.innerHTML = ""
    FacilityList()
}
)

