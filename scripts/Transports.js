import { getTransports, getTransientState, setTransports } from "./database.js"

const transports = getTransports()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "transit") {
            setTransports(parseInt(event.target.value))
        }
    }
)

export const Transport = () => {
let html = `<h2 class="transit__choices">Transports</h2>`

html += '<select id="transit">'
html += '<option value="0">Select Transportation...</option>'
    const transportChoices = transports.map(transport => {
        return `<option value="${transport.id}">${transport.name}</option>`
    })

    html += transportChoices.join("")
    html += "</select>"

    return html
}

export const selectedTransportDisplay = () => {
   const transientState = getTransientState()
    if ("selectedTransport" in transientState) {
        return `${transports.find(transport => transport.id === transientState.selectedTransport).name}`
    }
     return ''
}