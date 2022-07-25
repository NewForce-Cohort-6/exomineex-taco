import { Exomine } from "./Exomine.js"

const mainContainer = document.querySelector("#container")

export const renderAllHTML = () => {
    mainContainer.innerHTML = Exomine()
}

renderAllHTML()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})
