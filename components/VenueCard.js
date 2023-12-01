import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import CloseButton from 'react-bootstrap/CloseButton';
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
      <Card.Img variant="top" src={venueObj.venueImage} />
      <Link href={`/venues/${venueObj.id}`} passHref>
        <div className="d-flex justify-content-start" style={{ padding: '10px 10px 0px 10px', gap: '2rem' }}>
          <Card.Title className="align-self-center text-center fs-4">{venueObj.venueName}</Card.Title> <CloseButton variant="danger" type="button" aria-label="Hide" onClick={deleteVenue}> </CloseButton>
        </div>
      </Link>
      <Card.Body>
        <Card.Text>
          {venueObj.description}
        </Card.Text>

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
  }).isRequired,
  // onUpdate: PropTypes.func.isRequired,

};

export default VenueCard;
