import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import {
  createVenue, getAllCities, getAllClothingType, getAllCounties, getAllHours, getAllPaymentTypes, getAllPrices, getAllVenueTypes, getAllVenues, getAllZipcodes, updateVenue,
}
  from '../../api/venue/venues';

const initialState = {
  venueName: '',
  description: '',
  venueStreetAddress: '',
  venueImage: '',
  venuePhoneNumber: 0,
  likedVenue: false,
  vistedVenue: false,
  nextNightOut: false,
};

function VenueForm({ venueObj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [venues, setVenues] = useState([]);
  const [zipcodes, setZipcodes] = useState([]);
  const [payments, setPayments] = useState([]);
  const [cities, setCities] = useState([]);
  const [clothing, setClothing] = useState([]);
  const [counties, setCounties] = useState([]);
  const [hours, setHours] = useState([]);
  const [prices, setPrices] = useState([]);
  const [types, setTypes] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    getAllVenues(user.uid).then(setVenues);

    if (venueObj.id) setFormInput(venueObj);
  }, [venueObj, user]);

  useEffect(() => {
    getAllZipcodes().then((data) => setZipcodes(data));
  }, []);

  useEffect(() => {
    getAllCities().then((data) => setCities(data));
  }, []);

  useEffect(() => {
    getAllClothingType().then((data) => setClothing(data));
  }, []);

  useEffect(() => {
    getAllCounties().then((data) => setCounties(data));
  }, []);

  useEffect(() => {
    getAllHours().then((data) => setHours(data));
  }, []);

  useEffect(() => {
    getAllPrices().then((data) => setPrices(data));
  }, []);

  useEffect(() => {
    getAllVenueTypes().then((data) => setTypes(data));
  }, []);

  useEffect(() => {
    getAllPaymentTypes().then((data) => setPayments(data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  console.log(venues);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (venueObj.id > 0) {
      updateVenue(venueObj.id, formInput)
        .then(() => {
          router.push(`/venues/${venueObj.id}`);
        });
      console.log(venueObj);
    } else {
      const payload = { ...formInput, uid: user.uid };
      createVenue(payload)
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
      <h2 className="text-black mt-5">{venueObj.id ? 'Update' : 'Add'} Venue</h2>

      <FloatingLabel controlId="floatingInput1" label="Venue Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="venueName"
          name="venueName"
          value={formInput.venueName}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput1" label="Venue Street Address" className="mb-3">
        <Form.Control
          type="text"
          placeholder="venueStreetAddress"
          name="venueStreetAddress"
          value={formInput.venueStreetAddress}
          onChange={handleChange}
        />
      </FloatingLabel>

      {/* IMAGE INPUT  */}
      <FloatingLabel controlId="floatingInput2" label="image" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter Venue Image"
          name="venueImage"
          value={formInput.venueImage}
          onChange={handleChange}
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput2" label="Description" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter Venue Description"
          style={{ height: '100px' }}
          name="description"
          value={formInput.description}
          onChange={handleChange}
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput2" label="venuePhoneNumber" className="mb-3">
        <Form.Control
          type="number"
          placeholder="Enter Venue Phone Number"
          name="venuePhoneNumber"
          value={formInput.venuePhoneNumber}
          onChange={handleChange}
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingSelect" label="County">
        <Form.Select
          aria-label="County"
          name="venueCountyId"
          onChange={handleChange}
          className="mb-3"
          value={formInput.venueCountyId}
        >
          <option value="">Select a County</option>
          {counties.map((county) => (
            <option
              key={county.id}
              value={county.id}
            >
              {county.venueCountyName}
            </option>
          ))}
        </Form.Select>
      </FloatingLabel>

      <FloatingLabel controlId="floatingSelect" label="Zipcode">
        <Form.Select
          aria-label="Zipcode"
          name="venueZipcodeId"
          onChange={handleChange}
          className="mb-3"
          value={formInput.venueZipcodeId}
        >
          <option value="">Select a Zipcode</option>
          {zipcodes.map((zipcode) => (
            <option
              key={zipcode.id}
              value={zipcode.id}
            >
              {zipcode.zipcode}
            </option>
          ))}
        </Form.Select>
      </FloatingLabel>

      <FloatingLabel controlId="floatingSelect" label="Payment">
        <Form.Select
          aria-label="Payment Type"
          name="paymentId"
          onChange={handleChange}
          className="mb-3"
          value={formInput.paymentId}
        >
          <option value="">Select a Payment Type</option>
          {payments.map((payment) => (
            <option
              key={payment.id}
              value={payment.id}
            >
              {payment.name}
            </option>
          ))}
        </Form.Select>
      </FloatingLabel>

      <FloatingLabel controlId="floatingSelect" label="City">
        <Form.Select
          aria-label="City"
          name="venueCityId"
          onChange={handleChange}
          className="mb-3"
          value={formInput.venueCityId}
        >
          <option value="">Select a City</option>
          {cities.map((city) => (
            <option
              key={city.id}
              value={city.id}
            >
              {city.cityName}
            </option>
          ))}
        </Form.Select>
      </FloatingLabel>

      <FloatingLabel controlId="floatingSelect" label="Clothing">
        <Form.Select
          aria-label="Clothing Type"
          name="venueClothingTypeId"
          onChange={handleChange}
          className="mb-3"
          value={formInput.venueClothingTypeId}
        >
          <option value="">Select a Clothing Type</option>
          {clothing.map((cloth) => (
            <option
              key={cloth.id}
              value={cloth.id}
            >
              {cloth.name}
            </option>
          ))}
        </Form.Select>
      </FloatingLabel>

      <FloatingLabel controlId="floatingSelect" label="Hours Of Operations">
        <Form.Select
          aria-label="Hours Of Operations"
          name="venueHoursofOperationId"
          onChange={handleChange}
          className="mb-3"
          value={formInput.venueHoursofOperationId}
        >
          <option value="">Select a Hours of Operations</option>
          {hours.map((hour) => (
            <option
              key={hour.id}
              value={hour.id}
            >
              {hour.hoursOfOperation}
            </option>
          ))}
        </Form.Select>
      </FloatingLabel>

      <FloatingLabel controlId="floatingSelect" label="Price">
        <Form.Select
          aria-label="Price"
          name="venuePriceId"
          onChange={handleChange}
          className="mb-3"
          value={formInput.venuePriceId}
        >
          <option value="">Select a Price</option>
          {prices.map((price) => (
            <option
              key={price.id}
              value={price.id}
            >
              {price.price}
            </option>
          ))}
        </Form.Select>
      </FloatingLabel>

      <FloatingLabel controlId="floatingSelect" label="Type">
        <Form.Select
          aria-label="Type"
          name="venueTypeId"
          onChange={handleChange}
          className="mb-3"
          value={formInput.venueTypeId}
        >
          <option value="">Select a Type of Venue</option>
          {types.map((type) => (
            <option
              key={type.id}
              value={type.id}
            >
              {type.venueTypeName}
            </option>
          ))}
        </Form.Select>
      </FloatingLabel>

      <Form.Group>
        <Form.Check
          type="switch"
          id="custom-switch"
          checked={formInput.likedVenue}
          label="Click if you enjoyed this venue"
          onChange={() => {
            setFormInput((prevInput) => ({
              ...prevInput,
              likedVenue: !prevInput.likedVenue,
            }));
          }}
        />
      </Form.Group>

      <Form.Check
        type="switch"
        id="custom-switch"
        checked={formInput.vistedVenue}
        label="Click if you visited this venue"
        onChange={() => {
          setFormInput((prevInput) => ({
            ...prevInput,
            vistedVenue: !prevInput.vistedVenue,
          }));
        }}
      />

      <Form.Check
        type="switch"
        id="custom-switch"
        checked={formInput.nextNightOut}
        label="Click if you want to go to this on the next night out"
        onChange={() => {
          setFormInput((prevInput) => ({
            ...prevInput,
            nextNightOut: !prevInput.nextNightOut,
          }));
        }}
      />

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{venueObj.id ? 'Update' : 'Create'} Venue</Button>
    </Form>
  );
}

VenueForm.propTypes = {
  venueObj: PropTypes.shape({
    venueName: PropTypes.string,
    description: PropTypes.string,
    venueStreetAddress: PropTypes.string,
    venueImage: PropTypes.string,
    venuePhoneNumber: PropTypes.number,
    likedVenue: PropTypes.bool,
    vistedVenue: PropTypes.bool,
    nextNightOut: PropTypes.bool,
    id: PropTypes.number,
  }),
};

VenueForm.defaultProps = {
  venueObj: initialState,
};

export default VenueForm;
