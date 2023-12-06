/* eslint-disable */
import { useEffect, useState } from 'react';
import { getNextNightOut } from '../../api/filter/filters';
import VenueCard from '../../components/VenueCard';

function nextNightVenuePage() {
  const [visited, setVisted] = useState([]);

  const getNextVenue = () => {
    getNextNightOut().then(setVisted);
  };

  useEffect(() => {
    getNextVenue();
  }, []);

  return (
    <>
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{
          height: '22vh',
          padding: '7px',
          maxWidth: '100px',
          margin: '0 auto',
        }}
      >
        <h1>Next Night Out Venues:</h1>

      </div>
      <div className="d-flex justify-content-between">
        {visited?.map((visit) => (
          <VenueCard venueObj={visit} />))}
      </div>
    </>
  );
}

export default nextNightVenuePage;
