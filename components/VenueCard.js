import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { deleteSingleVenue } from '../api/venue/venues';

function VenueCard({ venueObj }) {
  const deleteVenue = () => {
    if (window.confirm(`Delete ${venueObj.venueName}?`)) {
      deleteSingleVenue(venueObj.id).then();
    }
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{venueObj.venueName}</Card.Title>
        <Card.Text>
          {venueObj.description}
        </Card.Text>
        <Link href={`/venues/${venueObj.id}`} passHref>
          <Button variant="primary" type="button" className="copy-btn"> Venue Details </Button>
        </Link>
        <Link href={`/venues/edit/${venueObj.id}`} passHref>
          <Button variant="info">Edit Order</Button>
        </Link>
        <Button variant="danger" type="button" className="copy-btn" onClick={deleteVenue}> Delete Order</Button>
      </Card.Body>
    </Card>
  );
}

VenueCard.propTypes = {
  venueObj: PropTypes.shape({
    venueName: PropTypes.string,
    id: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
  // onUpdate: PropTypes.func.isRequired,

};

export default VenueCard;
