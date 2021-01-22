import { useOfficers, getOfficers } from './officers/OfficerProvider.js'

const useOfficersData = useOfficers()
console.log(useOfficersData)

const getOfficersData = getOfficers()
console.log(getOfficersData)