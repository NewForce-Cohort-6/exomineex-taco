import {Minerals} from "./Minerals.js"
import {Colonies} from "./Colonies.js"
import {Facilites} from "./Facilities.js"
import {Transport} from "./Transports.js"

export const CarsRUs =()=>{
    return `<h1> Cars 'R Us</h1>
    <article class ="choices">
        <section class ="options">
        ${Colonies()}
        </section>
        <section class ="options">
        ${Minerals()}
        </section>
        <section class ="options">
        ${Facilites()}
        </section>
        <section class ="options">
        ${Transport()}  
        </section>
        
    </article>
    <br>
    <article>
        <button id="availabilityButton">Check Availability</button>
    </article>
    <article class="customOrders">
    <h2>Purchased Minerals</h2>

</article>
    `
}

