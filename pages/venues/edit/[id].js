import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleVenue } from '../../../api/venue/venues';
import VenueForm from '../../../components/forms/VenueForm';

export default function EditOrder() {
  const [editVenue, setEditVenue] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleVenue(id).then(setEditVenue);
  }, [id]);
  console.log(setEditVenue);
  // TODO: pass object to form
  return (<VenueForm venueObj={editVenue} />);
}
