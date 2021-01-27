export const Criminal = (criminal) => {
    return `<section class="criminal__card" id="${criminal.id}">
                <div class="criminal__name"><h4>${criminal.name}</h4></div>
                <div class="criminal__age">Age: ${criminal.age}</div>
                <div class="criminal__conviction">Crime: ${criminal.conviction}</div>
                <div class="criminal__arrestingOfficer">Arresting Officer: ${criminal.arrestingOfficer}</div>
                <div class="criminal__termStart">Term Start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</div>
                <div class="criminal__termEnd">Term End: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</div>
            </section>`
}
