import {getMinerals, setMineral, getTransientState} from "./database.js"

const minerals = getMinerals();

document.addEventListener(
    "change",
    (event)=>{
        if (event.target.id==="mineral"){
            setMineral(parseInt(event.target.value))
        }
    }
)

export const Minerals =()=>{
    let html ="<h2>Minerals</h2>";
    html += `<select id ="mineral"><option value ="0">Select a Mineral</option>`

    const arrayOfMineralOptions = minerals.map(
        (mineral)=>{
            return `<option value ="${mineral.id}">${mineral.name}</option>`
        }

    )
    html += arrayOfMineralOptions.join("")
    html += "</select>"
    
    return html
}

export const selectedMineralDisplay = () =>{
    const currentState=getTransientState();

    if ("selectedMineral" in getTransientState()){
        return `${minerals.find(mineral => mineral.id === currentState.selectedMineral).name} has been selected <br>`
    }
     return "";
}