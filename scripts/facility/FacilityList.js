import { getFacilities, useFacilities } from "./FacilityProvider";
import { FacilityHTMLConverter } from './Facility.js'
import { getCriminals } from "../criminals/CriminalProvider";
import { getCriminalFacilities, useCriminalFacilities } from "./CriminalFacilityProvider";

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".facilityContainer")

export const FacilityList = () => {
    getFacilities()
        .then(getCriminalFacilities)
        .then(getCriminals)
        .then(() => {
            const facilities = useFacilities()
            const crimFac = useCriminalFacilities()
            const criminals = useCriminals()

            render(facilities, criminals, crimFac)
        })
}

const render = (facilitiesToRender, allCriminals, allRelationships) => {
    contentTarget.innerHTML = facilitiesToRender.map(
        (facility) => {
            const criminalRelationshipsForThisFacility = allRelationships.filter(RelObject => RelObject.facilityId === facility.id)
            
            const criminals = criminalRelationshipsForThisFacility.map(relObj => {
                const matchingCriminalObject = allCriminals.find(criminal => criminal.id === relObj.criminalId)
                return matchingCriminalObject
            })
            return Facility(facility, criminals)
        }
    ).join("")
}