export const FacilityHTMLConverter = (facilityObject, criminals) => {
    return `
        <div class="facility__card">
            <h4>${facilityObject.facilityName}</h4>
            <div class=facility__details">
                <p>Security Level: ${facilityObject.securityLevel}</p>
                <p>Capacity: ${facilityObject.capacity}</p>
                <div>
                    <h2>Incarcerated Criminals:</h2>
                    <ul>
                        ${criminals.map(c => `<li>${c.name}</li>`).join("")}
                    </ul>
                </div>
                <button id="criminals--${facilityObject.id}">Show Criminals</button>
            </div>
        </div>
        `
}