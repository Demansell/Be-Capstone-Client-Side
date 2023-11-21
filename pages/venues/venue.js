import { useEffect, useState } from 'react';
import VenueCard from '../../components/VenueCard';
import { getAllVenues } from '../../api/venue/venues';

function VenuePage() {
  const [venues, setVenue] = useState([]);

  const getVenues = () => {
    getAllVenues().then(setVenue);
  };

  useEffect(() => {
    getVenues();
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
        <h1>All Venues</h1>

      </div>
      <div className="d-flex justify-content-between">
        {venues?.map((venue) => (
          <VenueCard venueObj={venue} />))}
      </div>
    </>
  );
}

export default VenuePage;
