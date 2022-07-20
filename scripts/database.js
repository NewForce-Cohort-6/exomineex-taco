const database = {
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
    }
  ],
  transientState: {},
};

export const setFacility = (facilityId) => {
  database.transientState.selectedFacility = facilityId;
  document.dispatchEvent(new CustomEvent("stateChanged"));
};

export const getFacilities = () => {
  return database.facilities.map((f) => ({ ...f }));
};


export const getColonies = () => {
  return database.colonies.map((colony) => ({ ...colony }))
}

export const setColony = (colonyId) => {
  database.transientState.colonyId = colonyId
  document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const getMinerals =()=>{
  return database.minerals.map((m)=>({...m }));
}

export const setMineral =(id)=>{
  database.transientState.selectedFacility = id;
  document.dispatchEvent(new CustomEvent("stateChanged"));
}

