/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getCityById, getClothingById, getCountiesById, getVenuesByCityId, getVenuesByVenueClothingTypeId, getVenuesByVenueCountyId } from '../../api/filter/filters';
import VenueCard from '../../components/VenueCard';
export default function orderDetails() {
  const router = useRouter();
  const [countiesDetails, setCountiesDetails] = useState({});
  const [venues, setVenues] = useState([]);
  const { id } = router.query;

  useEffect(() => {
    getCountiesById(id).then (setCountiesDetails);
  }, [id]);

  useEffect(() => {
    getVenuesByVenueCountyId(id).then(setVenues);
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

return (
  <div>
    <div className="body2" class="c2">
      <div className="body2" class="c2">
        <div class="b2">
          <span></span>
          <div class="c3">
            <h1>{countiesDetails.venueCountyName}'s Venues</h1> <p style={{ marginButton: '100px' }}></p>
            <div className="CommentCardShow d-flex flex-wrap" style={{ marginTop: '20px' }}>
              {venues.map((venue) => (
                <VenueCard key={venue.venueCountyId} venueObj={venue} onUpdate={getVenuesByVenueCountyId} />
                ))}
                </div>
            <h5></h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  
);
}
