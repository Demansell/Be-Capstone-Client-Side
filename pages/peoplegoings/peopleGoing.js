import { useEffect, useState } from 'react';
import { getAllPeople } from '../../api/peopleGoing/peopleGoings';
import PeopleGoingCard from '../../components/PeopleGoingCard';

function PeopleGoingPage() {
  const [people, setPeople] = useState([]);

  const getPeople = () => {
    getAllPeople().then(setPeople);
  };

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <>
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{
          height: '22vh',
          padding: '7px',
          maxWidth: '100px',
          margin: '0 auto',
        }}
      >
        <h1>All People</h1>

      </div>
      <div className="d-flex justify-content-between">
        {people?.map((peoples) => (
          <PeopleGoingCard peopleObj={peoples} />))}
      </div>
    </>
  );
}

export default PeopleGoingPage;
