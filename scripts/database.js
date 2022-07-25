const database = {
  orderBuilder: {},

  minerals: [
    {
      id: 1,
      name: "Newforcium",
    },
    {
      id: 2,
      name: "Projectium",
    },
    {
      id: 3,
      name:"Unobtainium"
    }
  ],
  facilities: [
    {
      id: 1,
      name: "Ganamede",
    },
    {
      id: 2,
      name: "Io",
    },
    {
      id: 3,
      name: "Cheapio",
    },
  ],
  colonies: [
    {
      id: 1,
      name: "Mars",
    },
    {
      id: 2,
      name: "Jupiter",
    },
    {
      id: 3,
      name: "Luna"
    },
    {
      id: 4,
      name: "Pluto"
    }
  ],
  transports : [
    {
        id: 1,
        name: "Alpha Starmeister B-10"
    },
    {
        id: 2,
        name: "Nova Winnebago 765-00"
    },
    {
      id: 3,
      name: "Kilo Gallimimus 825-50"
  },
  {
    id: 4,
    name: "Zulu Legacy C6-15"
},
{
  id: 5,
  name: "NaN Windwaker 23-B5"
},

  ],

  facilityMinerals: [
    {
      id: 1,
      facilityId: 1,
      mineralId: 1,     
    },
    {
      id: 2,
      facilityId: 1,
      mineralId: 2,     
    },
    {
      id: 3,
      facilityId: 2,
      mineralId: 1,     
    },
    {
      id: 4,
      facilityId: 2,
      mineralId: 3,     
    },
    {
      id: 5,
      facilityId: 3,
      mineralId: 1,     
    },
    {
      id: 6,
      facilityId: 3,
      mineralId: 2,     
    },
    {
      id: 7,
      facilityId: 3,
      mineralId: 3,     
    }
  ],
  purchasedMinerals: [
    {id: 1, mineralId: 2, transportId: 2}
  ],
  transientState: {},
};

export const setFacility = (facilityId) => {
  database.transientState.selectedFacility = facilityId;
  // document.dispatchEvent(new CustomEvent("stateChanged"));
};

export const getFacilities = () => {
  return database.facilities.map((facility) => ({ ...facility }));
};


export const getColonies = () => {
  return database.colonies.map((colony) => ({ ...colony }))
}

export const setColony = (colonyId) => {
  database.transientState.selectedColony = colonyId
  //document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const getMinerals =()=>{
  return database.minerals.map((m)=>({...m }));
}

export const setMineral =(mineralId)=>{
  database.transientState.selectedMineral = mineralId;
  // document.dispatchEvent(new CustomEvent("stateChanged"));
}

export const getTransports = () =>{
  return database.transports.map((transport)=>({...transport }));
}

export const setTransports = (transportId) =>{
  database.transientState.selectedTransport = transportId;
  // document.dispatchEvent(new CustomEvent("stateChanged"));
}

export const getTransientState = () => {
  return { ...database.transientState}
}

export const getFacilityMinerals = () => {
  return database.facilityMinerals.map((facilityMineral) => ({...facilityMineral}))
}

export const getPurchasedMinerals = () => {
  return database.purchasedMinerals.map((purchasedMineral) => ({...purchasedMineral}))
}
      //  // Copy the current state of user choices
      //  const newOrder = {...database.orderBuilder}
    
      //  // Add a new primary key to the object
      //  const lastIndex = database.customOrder.length - 1
      //  newOrder.id = database.customOrder[lastIndex].id + 1
   
      //  // Add a timestamp to the order
      //  newOrder.timestamp = Date.now()
   
      //  // Add the new order object to custom orders state
      //  database.customOrder.push(newOrder)
   
      //  // Reset the temporary state for user choices
      //  database.orderBuilder = {}
   
      //  // Broadcast a notification that permanent state has changed
      //  document.dispatchEvent(new CustomEvent("stateChanged"))
      
export const setPurchasedMineral = () => {
  
  const newPurchase = {...database.transientState}

  const lastIndex = database.purchasedMinerals.length - 1
  newPurchase.id = database.purchasedMinerals[lastIndex].id + 1
  let newPurchaseTrans = {}
  newPurchaseTrans.mineralId = newPurchase.selectedMineral
  newPurchaseTrans.transportId = newPurchase.selectedTransport
  database.purchasedMinerals.push(newPurchaseTrans)

  database.transientState = {}

 // document.dispatchEvent(new CustomEvent("stateChanged"))
}