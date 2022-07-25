import {Colonies, selectedColonyDisplay} from "./Colonies.js"
import {Minerals, selectedMineralDisplay} from "./Minerals.js"
import {Facilities, selectedFacilitiesDisplay} from "./Facilities.js"
import {Transport, selectedTransportDisplay} from "./Transports.js"
import { PurchasedMinerals } from "./PurchasedMinerals.js"
import { getFacilityMinerals, getColonies, getMinerals, getFacilities, getTransports, getTransientState, setPurchasedMineral } from "./database.js"
import {renderAllHTML} from "./main.js"
// In event listener for 'Check Availability' button:
//     Filter facilityMinerals by selectedFacility === facilityMineral.facilityID
//     AND selectedMineral === facilityMineral.mineralID
//         If filtered array length is 0, the mineral was not found at that facility
//             then update message accordingly
//         otherwise, it was found 
//              -so purchasedMinerals (or Purchases) can be updated with selectedColony, 
//               selectedMineral and selectedTransport,
//              -message is updated accordingly
//
let mineralFound = false

document.addEventListener(
    "click", (event) => {
        const itemClicked = event.target
        if (itemClicked.id === "availabilityButton") {
            const facilityMinerals = getFacilityMinerals()
            const foundTransientState = getTransientState()
            const grabMinerals = Minerals()
            const grabFacilities = Facilities()
            let availabilityHTML = "";
            console.log(foundTransientState)
            const foundFacility = facilityMinerals.find(_facility => foundTransientState.selectedFacility === _facility.facilityId && foundTransientState.selectedMineral === _facility.mineralId)
            
            if (foundFacility) {
                setPurchasedMineral()
                mineralFound = true
            } else {
                mineralFound = false
            }
            
            //return availabilityHTML
            renderAllHTML()
    }
}
)
const isMineralAvailable = () => {

}

const AvailabilityDisplay = () => {
    const minerals = getMinerals()
    const facilities = getFacilities()
    const transports = getTransports()
    const colonies = getColonies()
    const transState = getTransientState()
    let testHTML = ""
    if (mineralFound===true){
    testHTML += `${minerals.find(mineral => mineral.id === transState.selectedMineral).name} is available at the mining facility on ${facility.name}. Now shipping to your ${colony.name} colony on the ${transport.name}`
    }
    else {
        testHTML="We're sorry. That mineral is not available at that facility."
    }
    return testHTML

} 
const ourMinerals=AvailabilityDisplay()
export const Exomine =()=>{
    return `<h1> Exomine</h1>
    <article class ="choices">
        <section class ="options">
        ${Colonies()}
        </section>
        <section class ="options">
        ${Minerals()}
        </section>
        <section class ="options">
        ${Facilities()}
        </section>
        <section class ="options">
        ${Transport()}  
        </section>
    </article>

    <br>  
        <p class="availabilityDisplay">
      
        </p>
    <article class="customOrders">
    <h2>Purchased Minerals</h2>
    ${PurchasedMinerals()}
    </article>
    <article class ="availability">
        <button id="availabilityButton">Check Availability</button>
        <div class="determinedAvailability">
         ${AvailabilityDisplay()}
        </div>
    </article>



    
    `
}

//   ${selectedMineralDisplay()}
//         ${selectedColonyDisplay()}
//         ${selectedTransportDisplay()}
//         ${selectedFacilitiesDisplay()}