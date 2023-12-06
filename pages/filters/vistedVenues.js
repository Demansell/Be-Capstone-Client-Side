import { useEffect, useState } from 'react';
import { getVistedVenues } from '../../api/filter/filters';
import VenueCard from '../../components/VenueCard';

function VistedVenuePage() {
  const [visited, setVisted] = useState([]);

  const getLikedVenue = () => {
    getVistedVenues().then(setVisted);
  };

  useEffect(() => {
    getLikedVenue();
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
        <h1>All Visted Venues:</h1>

      </div>
      <div className="d-flex justify-content-between">
        {visited?.map((visit) => (
          <VenueCard venueObj={visit} />))}
      </div>
    </>
  );
}

export default VistedVenuePage;
