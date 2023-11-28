const dbUrl = 'https://localhost:7202';

const getAllVenues = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/Venue/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getSingleVenue = (Id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/Venues/${Id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const createVenue = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/Venue/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateVenue = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/Venue/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteSingleVenue = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/Venue/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => resolve(data))
    .catch(reject);
});

const getVenuePeople = (venueId) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/PeopleByVenueId/${venueId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

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

const getAllCities = () => new Promise((resolve, reject) => {
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

const getAllClothingType = () => new Promise((resolve, reject) => {
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

const getAllCounties = () => new Promise((resolve, reject) => {
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

const getAllHours = () => new Promise((resolve, reject) => {
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

const getAllPrices = () => new Promise((resolve, reject) => {
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

const getAllPaymentTypes = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/Payments/`, {
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
  getAllVenues,
  getSingleVenue,
  createVenue,
  updateVenue,
  deleteSingleVenue,
  getVenuePeople,
  getAllZipcodes,
  getAllCities,
  getAllClothingType,
  getAllCounties,
  getAllHours,
  getAllPrices,
  getAllVenueTypes,
  getAllPaymentTypes,
};
