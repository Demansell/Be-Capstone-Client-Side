const dbUrl = 'https://localhost:7202';

const getAllPeople = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/PeopleGoing/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getSinglePerson = (Id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/PeopleGoing/${Id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const createPersonGoing = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/PeopleGoing/`, {
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

const updatePerson = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/PeopleGoing/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteSinglePerson = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/PeopleGoing/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getAllPeople,
  getSinglePerson,
  createPersonGoing,
  updatePerson,
  deleteSinglePerson,
};
