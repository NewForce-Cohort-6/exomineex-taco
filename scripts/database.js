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
  transientState: {},
};

export const setFacility = (facilityId) => {
  database.transientState.selectedFacility = facilityId;
  document.dispatchEvent(new CustomEvent("stateChanged"));
};

export const getFacilities = () => {
  return database.facilities.map((facility) => ({ ...facility }));
};


export const getColonies = () => {
  return database.colonies.map((colony) => ({ ...colony }))
}

export const setColony = (colonyId) => {
  database.transientState.selectedColony = colonyId
  document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const getMinerals =()=>{
  return database.minerals.map((m)=>({...m }));
}

export const setMineral =(mineralId)=>{
  database.transientState.selectedMineral = mineralId;
  document.dispatchEvent(new CustomEvent("stateChanged"));
}

export const getTransports = () =>{
  return database.transports.map((transport)=>({...transport }));
}

export const setTransports = (transportId) =>{
  database.transientState.selectedTransport = transportId;
  document.dispatchEvent(new CustomEvent("stateChanged"));
}

export const getTransientState = () => {
  return { ...database.transientState}
}

