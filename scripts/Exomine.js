import {Colonies, selectedColonyDisplay} from "./Colonies.js"
import {Minerals, selectedMineralDisplay} from "./Minerals.js"
import {Facilities, selectedFacilitiesDisplay} from "./Facilities.js"
import {Transport, selectedTransportDisplay} from "./Transports.js"
import { PurchasedMinerals } from "./PurchasedMinerals.js"
import { getFacilityMinerals, getTransientState, setPurchasedMineral } from "./database.js"
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

document.addEventListener(
    "click", (event) => {
        const itemClicked = event.target
        if (itemClicked.id === "availabilityButton") {
        const facilityMinerals = getFacilityMinerals()
        const foundTransientState = getTransientState()
        console.log(foundTransientState)
        const foundFacility = facilityMinerals.filter(_facility => foundTransientState.selectedFacility === _facility.facilityId && foundTransientState.selectedMineral === _facility.mineralId)
        
        if (foundFacility.length === 0) {
            return `The selected mineral is not available at this facility.`
        } else {
            setPurchasedMineral()
        }
        }
    }
)

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
        ${selectedMineralDisplay()}
        ${selectedColonyDisplay()}
        ${selectedTransportDisplay()}
        ${selectedFacilitiesDisplay()}
        </p>
    <article class="customOrders">
    <h2>Purchased Minerals</h2>
    ${PurchasedMinerals()}
    </article>
    <article class ="availability">
        <button id="availabilityButton">Check Availability</button>
        <div class="determinedAvailability">
         placeholder text
        </div>
    </article>



    
    `
}

