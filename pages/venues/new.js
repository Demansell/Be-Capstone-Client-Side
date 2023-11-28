import React from 'react';
import VenueForm from '../../components/forms/VenueForm';

function newOrder() {
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
        <VenueForm />
      </div>
    </>
  );
}

export default newOrder;
