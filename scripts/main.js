import { Exomine } from "./exomine.js"
// defined variable and used querySelector to select #container from index.html
const mainContainer = document.querySelector("#container")
// set the innerHTML of #container in index.html to the imported trans() function
const renderAllHTML = () => {
    mainContainer.innerHTML = Exomine()
}

renderAllHTML()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})