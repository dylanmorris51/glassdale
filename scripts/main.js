import { useOfficers, getOfficers } from './officers/OfficerProvider.js'
// import { useCriminals, getCriminals } from './criminals/CriminalProvider.js'
import { criminalList } from './criminals/CriminalList.js'
import { ConvictionSelect } from './convictions/ConvictionSelect.js'

const useOfficersData = useOfficers()
console.log(useOfficersData)

const getOfficersData = getOfficers()
console.log(getOfficersData)

// const useCriminalsData = useCriminals()
// console.log("Criminal Data:", useCriminalsData)

// const getCriminalsData = getCriminals()
// console.log(getCriminalsData)

const displayCriminals = criminalList()
console.log("display criminals", displayCriminals)

ConvictionSelect()