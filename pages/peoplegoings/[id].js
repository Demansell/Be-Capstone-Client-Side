/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSinglePerson } from '../../api/peopleGoing/peopleGoings';
export default function orderDetails() {
  const router = useRouter();
  const [peopleDetails, setPeopleDetails] = useState({});
  // TODO: grab firebaseKey from url
  const { id } = router.query;
  // TODO: make call to API layer to get the data
  useEffect(() => {
    getSinglePerson(id).then (setPeopleDetails);
  }, [id]);
  

  return (
    <div>
        <div className="body2" class="c2">
          <div class="b2">
            <span></span>
            <div class="c3">
              <h1>Person's Name: {peopleDetails.name}</h1> 
              <h4>Time Going Out: {peopleDetails.timeGoing}</h4>
            </div>
          </div>
        </div>
      </div>
  );
}
