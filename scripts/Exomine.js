import {Minerals} from "./Minerals.js"
import {Colonies} from "./Colonies.js"
import {Facilities} from "./Facilities.js"
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
        <p></p>
    </article>
    <br>
    <article>
        <button id="availabilityButton">Check Availability</button>
    </article>
    <article class="customOrders">
    <h2>Purchased Minerals</h2>
    <p class="availabilityDisplay">
        ${selectedTransportDisplay()}
</article>
    `
}

