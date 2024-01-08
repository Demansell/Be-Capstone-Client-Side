/* eslint-disable */

import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import { deleteSingleVenue } from '../api/venue/venues';

function VenueCard({ venueObj }) {
  const router = useRouter();

  const deleteVenue = () => {
    if (window.confirm(`Delete ${venueObj.venueName}?`)) {
      deleteSingleVenue(venueObj.id)
        .then(() => router.push('/'))
        .catch((error) => console.error('Error deleting venue:', error));
    }
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={venueObj.venueImage} />
      <Link href={`/venues/${venueObj.id}`} passHref>
        <div className="d-flex justify-content-start" style={{ padding: '10px 10px 0px 10px', gap: '2rem' }}>
          <Card.Title className="align-self-center text-center fs-4">{venueObj.venueName}</Card.Title>
        </div>
      </Link>
      <Card.Body>
        <Card.Text>
          Phone Number: {venueObj.venuePhoneNumber}
        </Card.Text>
        <Button variant="dark" onClick={deleteVenue}>
          Delete
        </Button>

      </Card.Body>
    </Card>
  );
}

VenueCard.propTypes = {
  venueObj: PropTypes.shape({
    venueName: PropTypes.string,
    id: PropTypes.number,
    description: PropTypes.string,
    venueImage: PropTypes.string,
    venuePhoneNumber: PropTypes.number,
  }).isRequired,
  // onUpdate: PropTypes.func.isRequired,

};

export default VenueCard;
