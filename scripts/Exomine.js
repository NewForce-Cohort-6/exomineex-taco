import {Colonies, selectedColonyDisplay} from "./Colonies.js"
import {Minerals, selectedMineralDisplay} from "./Minerals.js"
import {Facilities, selectedFacilitiesDisplay} from "./Facilities.js"
import {Transport, selectedTransportDisplay} from "./Transports.js"





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
    </article>
    <article class ="availability">
        <button id="availabilityButton">Check Availability</button>
        <div class="determinedAvailability">
         placeholder text
        </div>
    </article>



    
    `
}

