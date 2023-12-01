const dbUrl = 'https://localhost:7202';

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

const getVenuesByVenueClothingTypeId = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/VenuesByVenueClothingTypeId/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getClothingById = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/ClothingById/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getVenuesByVenueCountyId = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/VenuesByVenueCountyId/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getCountiesById = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/VenueCountyId/${id}`, {
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
  getVenuesByCityId,
  getCityById,
  getVenuesByVenueClothingTypeId,
  getClothingById,
  getVenuesByVenueCountyId,
  getCountiesById,
};
