import React from 'react';
import PeopleForm from '../../components/forms/PeopleGoingForm';

function newPerson() {
  return (
    <>
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{
          height: 'auto',
          padding: '30px',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        <PeopleForm />
      </div>
    </>
  );
}

export default newPerson;
