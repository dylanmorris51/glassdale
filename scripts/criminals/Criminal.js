export const Criminal = (criminalObject, facilities) => {
    // return `<section class="criminal__card" id="${criminalObject.id}">
    //             <div class="criminal__name"><h4>${criminalObject.name}</h4></div>
    //             <div class="criminal__age">Age: ${criminalObject.age}</div>
    //             <div class="criminal__conviction">Crime: ${criminalObject.conviction}</div>
    //             <div class="criminal__arrestingOfficer">Arresting Officer: ${criminalObject.arrestingOfficer}</div>
    //             <div class="criminal__termStart">Term Start: ${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</div>
    //             <div class="criminal__termEnd">Term End: ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</div>
    //             <button id="associates--${criminalObject.id}">Associate Alibis</button>
    //         </section>`
    return `
        <div class="criminal__card">
            <h4>${criminalObject.name}</h4>
            <div class=criminal__details">
                <p>Convicted for ${criminalObject.conviction}</p>
                <p>Arrested by ${criminalObject.arrestingOfficer}</p>
                <p>Incarcerated between:
                    ${new Date(criminalObject.incarceration.start).toLocaleDateString()} and
                    ${new Date(criminalObject.incarceration.end).toLocaleDateString()}
                </p>
                <p>Age: ${criminalObject.age}</p>
                <div>
                    <h2>Facilities</h2>
                    <ul>
                        ${facilities.map(f => `<li>${f.facilityName}</li>`).join("")}
                    </ul>
                </div>
                <button id="associates--${criminalObject.id}">Show Associates</button>
            </div>
        </div>
        `
}
