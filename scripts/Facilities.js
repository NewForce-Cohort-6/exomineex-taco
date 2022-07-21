import { setFacility, getFacilities } from "./database.js"

const facilities = getFacilities()

document.addEventListener(
    "change",
    (clickEvent) => {
        if (clickEvent.target.id === "facilities") {
            setFacility(parseInt(clickEvent.target.value))
        }
    }
)

export const Facilities = () => {
    let html = "<h2>Facilities</h2>"

    html += '<select id="facilities">'
    html += '<option value="0">Select a Facility</option>'

    const arrayOfOptions = facilities.map( (faciility) => {
            return `<option value="${faciility.id}">${faciility.name}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}

