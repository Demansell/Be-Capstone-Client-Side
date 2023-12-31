import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { deleteSinglePerson } from '../api/peopleGoing/peopleGoings';

function PeopleGoingCard({ peopleObj }) {
  const router = useRouter();

  const deletePerson = () => {
    if (window.confirm(`Delete ${peopleObj.name}?`)) {
      deleteSinglePerson(peopleObj.id)
        .then(() => router.push('/venues/venue'))
        .catch((error) => console.error('Error deleting venue:', error));
    }
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{peopleObj.name}</Card.Title>
        <Card.Text>
          {peopleObj.timeGoing}
        </Card.Text>
        <Link href={`/peoplegoings/${peopleObj.id}`} passHref>
          <Button variant="primary" type="button" className="copy-btn"> Person Details </Button>
        </Link>
        <Link href={`/peoplegoings/edit/${peopleObj.id}`} passHref>
          <Button variant="info">Edit Person</Button>
        </Link>
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
