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
  ],
  transports : [
    {
        id: 1,
        name: "Alpha Starmeister B-10"
    },
    {
        id: 2,
        name: "Nova Winnebago 765-00"
    }
  ],
  transientState: {},
};

export const setFacility = (facilityId) => {
  database.transientState.selectedFacility = facilityId;
  document.dispatchEvent(new CustomEvent("stateChanged"));
};

export const getFacilities = () => {
  return database.facilities.map((facility) => ({ ...facility }));
};



export const addCustomOrder = () => {
  
  const newOrder = {...database.orderBuilder}

    const lastIndex = database.transientState.length - 1
  newOrder.id = database.transientState[lastIndex].id + 1

  newOrder.timestamp = Date.now()
  
  database.transientState.push(newOrder)
  
  database.orderBuilder = {}
  
  document.dispatchEvent(new CustomEvent("stateChanged"))
}

