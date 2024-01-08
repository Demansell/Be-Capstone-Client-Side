/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getSingleVenue, getVenuePeople } from '../../api/venue/venues';
import PeopleGoingCard from '../../components/PeopleGoingCard';

export default function orderDetails() {
  const router = useRouter();
  const [venueDetails, setVenueDetails] = useState({});
  const [people, setPeople] = useState([]);
  // TODO: grab firebaseKey from url
  const { id } = router.query;
  // TODO: make call to API layer to get the data
  useEffect(() => { 
    getSingleVenue(id).then(setVenueDetails);
    console.log(venueDetails)
  }, [id]);

  useEffect(() => {
    getVenuePeople(id).then(setPeople);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  return (
    <div>
        <div className="body2" class="c2">
          <div class="b2">
            <span></span>
            <div class="c3">
              <h3>Venue Name: {venueDetails.venueName}</h3> 
              <h3>About this Venue: {venueDetails.description} </h3>
              <Link href={`/venues/edit/${id}`} passHref>
          <Button variant="info">Edit Venue</Button>
          
        </Link>
              <Link href="/peoplegoings/new" passHref>
        <Button> Add A Person Going</Button>
      </Link>
      <div className="CommentCardShow d-flex flex-wrap" style={{ marginTop: '20px' }}>
        {people.map((peoples) => (
          <PeopleGoingCard key={peoples.venueId} peopleObj={peoples} onUpdate={getVenuePeople} />
        ))}
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}
