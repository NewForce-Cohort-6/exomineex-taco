import { setTransports, getTransports } from "./database.js"

const transports = getTransports()

document.addEventListener(
    "change",
    (clickEvent) => {
        if (clickEvent.target.id === "transit") {
            setTransports(parseInt(clickEvent.target.value))
        }
    }
)

export const Transport = () => {
    let html = "<h2>Transport</h2>"

    html += '<select id="transit">'
    html += '<option value="0">Select Transportation</option>'

    const transportOptions = transports.map( (transport) => {
            return `<option value="${transport.id}">${transport.name}</option>`
        }
    )

    html += transportOptions.join("")
    html += "</select>"
    return html
}

