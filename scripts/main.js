import { useOfficers, getOfficers } from './officers/OfficerProvider.js'
// import { useCriminals, getCriminals } from './criminals/CriminalProvider.js'
import { CriminalList } from './criminals/CriminalList.js'
import { ConvictionSelect } from './convictions/ConvictionSelect.js'
import { OfficerList } from './officers/OfficerList.js'
import { OfficerSelect } from './officers/OfficerSelect.js'
import { NoteForm } from './notes/NoteForm.js'
const useOfficersData = useOfficers()
console.log(useOfficersData)

const getOfficersData = getOfficers()
console.log(getOfficersData)

// const useCriminalsData = useCriminals()
// console.log("Criminal Data:", useCriminalsData)

// const getCriminalsData = getCriminals()
// console.log(getCriminalsData)

const displayNotes = NoteForm()
const displayCriminals = CriminalList()
console.log("display criminals", displayCriminals)

ConvictionSelect()

const displayOfficers = OfficerList()
OfficerSelect()