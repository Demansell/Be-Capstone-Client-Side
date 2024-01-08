/* eslint-disable */
import React, { useState } from 'react';
import { clientCredentials } from '../../utils/client';
import VenueCard from '../../components/VenueCard';
const dbUrl = clientCredentials.databaseURL;
const randomVenue = () => {
  const [randomVenue, setRandomVenue] = useState({});
  const [buttonPressed, setButtonPressed] = useState(false);
  const generateRandomVenue = async () => {
    try {
      const response = await fetch(`${dbUrl}/randomVenue`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch a random movie');
      }
      const data = await response.json();
      console.log(data);
      setRandomVenue(data);
      setButtonPressed(true);
    } catch (error) {
      console.error('Error fetching data from custom API', error);
    }
  };
  return (
    <div className="App">
      <h1>Random Venue Selector</h1>
      <button onClick={generateRandomVenue}>Generate Random Venue</button>
      {buttonPressed && randomVenue && (
        <>
          <p>Random Venue: {randomVenue.venueName}</p>
          <VenueCard venueObj={randomVenue} />
        </>
      )}
    </div>
  );
};
export default randomVenue;
