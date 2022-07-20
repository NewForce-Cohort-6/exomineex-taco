import { Minerals } from "./Minerals.js"
import { Facilities } from "./Facilities.js"
import { Colonies } from "./Colonies.js"
import { Transports } from "./Transports.js"
import { addCustomOrder } from "./database.js"
import { Orders } from "./Orders.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id==="orderButton"){
            addCustomOrder();
        }
    }
)

export const Exomine = () => {
    return `
        <h1>Exomine</h1>

        <article class="choices">
            <section class="choices__minerals options">
                <h2>Minerals</h2>
                ${Minerals()}
            </section>
            <section class="choices__facilities options">
                <h2>Facilities</h2>
                ${Facilities()}
            </section>
            <section class="choices__colonies options">
                <h2>Colonies</h2>
                ${Colonies()}
            </section>
            <section class="choices__transports options">
                <h2>Transports</h2>
                ${Transports()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>
        <article class="customOrders">
            <h2>Check Availability</h2>
         </article> 
         <article>
         <section class="result">
                ${Orders()}  
            </section>         
         </article>
           `
}

