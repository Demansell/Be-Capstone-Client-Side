import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { getAllVenues }
  from '../../api/venue/venues';
import { createPersonGoing, updatePerson } from '../../api/peopleGoing/peopleGoings';

const initialState = {
  id: null,
  name: '',
  timeGoing: '',
};
function PeopleForm({ peopleObj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [people, setPeople] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    getAllVenues(user.uid).then(setPeople);

    if (peopleObj.id) setFormInput(peopleObj);
  }, [peopleObj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  console.log(people);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (peopleObj.id > 0) {
      updatePerson(peopleObj.id, formInput)
        .then(() => {
          router.push(`/peoplegoings/${peopleObj.id}`);
        });
    } else {
      const payload = { ...formInput, uid: user.uid };
      createPersonGoing(payload)
        .then(() => {
          router.push('/venues/venue');
          console.log(formInput);
        })
        .catch((error) => {
          console.error('Error updating movie:', error);
        });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-black mt-5">{peopleObj.id ? 'Update' : 'Add'} Person or Group Going</h2>

      <FloatingLabel controlId="floatingSelect" label="Venue">
        <Form.Select
          aria-label="Venue"
          name="venueId"
          onChange={handleChange}
          className="mb-3"
          value={formInput.venueId} // FIXME: modify code to remove error
          required
        >
          <option value="">Select a Venue to add this person to</option>
          {
            people.map((person) => (
              <option
                key={person.id}
                value={person.id}
              >
                {person.venueName}
              </option>
            ))
          }
        </Form.Select>
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput1" label="Persons Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="People Going"
          name="name"
          value={formInput.name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput1" label="Time Going" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Time Going"
          name="timeGoing"
          value={formInput.timeGoing}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{peopleObj.id ? 'Update' : 'Add'} Person or Group Going</Button>
    </Form>
  );
}

PeopleForm.propTypes = {
  peopleObj: PropTypes.shape({
    name: PropTypes.string,
    timeGoing: PropTypes.string,
    id: PropTypes.number,
  }),
};

PeopleForm.defaultProps = {
  peopleObj: initialState,
};

export default PeopleForm;
