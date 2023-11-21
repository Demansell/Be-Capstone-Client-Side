import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { deleteSingleVenue } from '../api/venue/venues';

function PeopleGoingCard({ peopleObj }) {
  const deletePerson = () => {
    if (window.confirm(`Delete ${peopleObj.name}?`)) {
      deleteSingleVenue(peopleObj.id).then();
    }
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{peopleObj.name}</Card.Title>
        <Card.Text>
          {peopleObj.timeGoing}
        </Card.Text>
        <Button variant="primary">Details</Button>
        <Button variant="primary">Edit</Button>

        <Button variant="danger" type="button" className="copy-btn" onClick={deletePerson}> Delete</Button>
      </Card.Body>
    </Card>
  );
}

PeopleGoingCard.propTypes = {
  peopleObj: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    timeGoing: PropTypes.string,
  }).isRequired,
  // onUpdate: PropTypes.func.isRequired,

};

export default PeopleGoingCard;
