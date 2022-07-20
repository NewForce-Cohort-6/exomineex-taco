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
    let html = "<h2>Transportation</h2>"

    html += '<select id="transit">'
    html += '<option value="0">Transport</option>'

    for (const transport of transports) {
        html += `<option value="${transport.id}">${transport.name}</option>`
    }
html += "</select>"
return html
}
