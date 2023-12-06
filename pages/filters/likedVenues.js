import { useEffect, useState } from 'react';
import { getLikedVenues } from '../../api/filter/filters';
import VenueCard from '../../components/VenueCard';

function LikedVenuePage() {
  const [liked, setLiked] = useState([]);

  const getLikedVenue = () => {
    getLikedVenues().then(setLiked);
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
        <h1>All Liked Venues:</h1>

      </div>
      <div className="d-flex justify-content-between">
        {liked?.map((like) => (
          <VenueCard venueObj={like} />))}
      </div>
    </>
  );
}

export default LikedVenuePage;
