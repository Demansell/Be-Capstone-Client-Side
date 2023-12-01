const dbUrl = 'https://localhost:7202';

const getAllZipcodes = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/Zipcode/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getAllVenueCities = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/VenueCities/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getVenuesByCityId = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/VenuesByCityId/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getCityById = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/CitiesById/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getAllVenueClothingTypes = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/VenueClothingtypes/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getAllVenueCounties = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/VenueCounties/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getAllVenueHoursOfOperations = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/VenueHoursOfOperations/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getAllVenuePrices = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/VenuePrices/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getAllVenueTypes = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/VenueTypes/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export {
  getAllZipcodes,
  getAllVenueCities,
  getVenuesByCityId,
  getCityById,
  getAllVenueClothingTypes,
  getAllVenueCounties,
  getAllVenueHoursOfOperations,
  getAllVenuePrices,
  getAllVenueTypes,
};
