import { getPurchasedMinerals, getTransports, getMinerals } from "./database.js"

export const PurchasedMinerals = () => {
    let purchasedMinerals = getPurchasedMinerals()
    let transports = getTransports()
    let minerals = getMinerals()
    let html = '<ul>'
    for (const purchasedMineral of purchasedMinerals) {
        html += `<li>${minerals.find((mineral) => mineral.id === purchasedMineral.mineralId).name}`
        html += ` - ${transports.find((transport) => transport.id === purchasedMineral.transportId).name }</li>`
    }
    html += '</ul>'
    return html

}