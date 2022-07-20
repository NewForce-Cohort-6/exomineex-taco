import { getTransport, setTransport } from "./database.js";

const transports = getTransport()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "transit") {
           const chosenOption = changeEvent.target.value
           console.log(chosenOption)
           setTransport(parseInt(chosenOption))  
        }
    }
)

export const trans = () => {
    let html =  '<h2 class="transit__choices">Transports</h2>'

    html += '<select id="transit">'

    html += '<option value="0">Transport</option>'

    const transportChoices = transports.map(transport => {
        return `<option value="${transport.id}">${transport.name}</option>`
    })

    html += transportChoices.join("")
    html += "</select>"
    
    return html
}