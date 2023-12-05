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

const getVenuesByVenueHoursofOperationId = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/VenuesByVenueHoursofOperationId/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getHoursById = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/VenueHoursofOperationId/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getVenuesByPaymentTypeId = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/VenuesByPaymentTypeId/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getPaymentsById = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/PaymentTypeId/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getVenuesByVenuePriceId = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/GetVenuesVenuePriceId/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getPricesById = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/GetPricesByVenuePriceId/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getVenuesByVenueTypeId = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/GetVenuesByVenueTypeId/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getTypesById = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/GetTypesByVenueTypeId/${id}`, {
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
  getVenuesByVenueHoursofOperationId,
  getHoursById,
  getPaymentsById,
  getVenuesByPaymentTypeId,
  getVenuesByVenuePriceId,
  getPricesById,
  getVenuesByVenueTypeId,
  getTypesById,
};
