import { getColonies, getTransientState, setColony } from "./database.js";

const colonies = getColonies()


document.addEventListener(
    "change",
    (event) => {
        if(event.target.id === 'colony') {
            setColony(parseInt(event.target.value))
        }
    }
)


export const Colonies = () => {
    let html = '<h2 class="colonies__label selectlabel">Colonies</h2>'
    
    html += '<select id="colony">'

    html += '<option value="0">Select a Colony...</option>'

    const selectOptions = colonies.map(colony => {
        return `<option value="${colony.id}">${colony.name}</option>`
    })

    html += selectOptions.join("")
    html += "</select>"
    
    return html
}

export const selectedColonyDisplay = () => {

    const t_state = getTransientState()

    if ("selectedColony" in t_state)
    {
        return `${colonies.find(colony => colony.id === t_state.selectedColony).name}`
    }
    return ''
}