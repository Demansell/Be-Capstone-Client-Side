/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getVenuesByVenueZipcodeId, getZipCodesById } from '../../api/filter/filters';
import VenueCard from '../../components/VenueCard';
export default function TypeDetails() {
  const router = useRouter();
  const [zipDetails, setZipDetails] = useState({});
  const [venues, setVenues] = useState([]);
  const { id } = router.query;

  useEffect(() => {
    getZipCodesById(id).then (setZipDetails);
  }, [id]);

  useEffect(() => {
    getVenuesByVenueZipcodeId(id).then(setVenues);
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

return (
  <div>
    <div className="body2" class="c2">
      <div className="body2" class="c2">
        <div class="b2">
          <span></span>
          <div class="c3">
            <h1>{zipDetails.zipcode}'s Venues</h1> <p style={{ marginButton: '100px' }}></p>
            <div className="CommentCardShow d-flex flex-wrap" style={{ marginTop: '20px' }}>
              {venues.map((venue) => (
                <VenueCard key={venue.venueZipcodeId} venueObj={venue} onUpdate={getVenuesByVenueZipcodeId} />
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
