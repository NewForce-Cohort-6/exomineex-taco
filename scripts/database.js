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
      name: "NaN Windwaker 82-B4"
    },
    {
      id: 4,
      name: "Zulu Legacy C6-15"
    },
    {
      id: 5,
      name: "Delta Syracuse 86-08"
    },
    {
      id: 6,
      name: "Kilo Gallimimus AB1-24"
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

export const setTransport = (transportId) => {
  database.transientState.selectedTransport = transportId;
  document.dispatchEvent(new CustomEvent("stateChanged"));
}

export const getTransport = () => {
  return database.transports.map((transport) => ({...transport}))
}

