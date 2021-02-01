import { useOfficers, getOfficers } from './officers/OfficerProvider.js'
// import { useCriminals, getCriminals } from './criminals/CriminalProvider.js'
import { CriminalList } from './criminals/CriminalList.js'
import { ConvictionSelect } from './convictions/ConvictionSelect.js'
import { OfficerList } from './officers/OfficerList.js'
import { OfficerSelect } from './officers/OfficerSelect.js'
import { NoteForm } from './notes/NoteForm.js'
import { ShowNoteButton } from './notes/ShowNotesButton.js'
import { NoteList } from './notes/NoteList.js'
import  {} from './alibis/AlibiList.js'
import { ShowWitnessButton } from './witnesses/ShowWitnessButton.js'
import { getWitnesses, useWitnesses } from './witnesses/WitnessDataProvider.js'






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

const displayNoteButton = ShowNoteButton()

ShowWitnessButton()
getWitnesses()
useWitnesses()