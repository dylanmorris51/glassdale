import { useOfficers, getOfficers } from './officers/officerprovider.js'

const useOfficersData = useOfficers()
console.log(useOfficersData)

const getOfficersData = getOfficers()
console.log(getOfficersData)