import React from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
// import { useAuth } from '../../utils/context/authContext';

function Home() {
  // const { user } = useAuth();
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Filter By: </h1>
      {/* {user.fbUser.displayName}! */}

      <Link href="/cities/city" passHref>
        <Button variant="outline-dark" size="lg">City</Button>
      </Link>
      <Link href="/clothing/cloths" passHref>
        <Button variant="outline-dark" size="lg">Clothing Type</Button>
      </Link>
      <Link href="/counties/county" passHref>
        <Button variant="outline-dark" size="lg">Counties</Button>
      </Link>
      <Link href="/hours/hour" passHref>
        <Button variant="outline-dark" size="lg">Hours of Operations</Button>
      </Link>
      <Link href="/payments/payment" passHref>
        <Button variant="outline-dark" size="lg">Payment Type</Button>
      </Link>
      <Link href="/prices/price" passHref>
        <Button variant="outline-dark" size="lg">Price</Button>
      </Link>
      <Link href="/types/type" passHref>
        <Button variant="outline-dark" size="lg">Type</Button>
      </Link>
      <Link href="/zipcodes/zipcode" passHref>
        <Button variant="outline-dark" size="lg">Zipcode</Button>
      </Link>
      <Link href="/filters/likedVenues" passHref>
        <Button variant="outline-dark" size="lg">Liked Venues</Button>
      </Link>
      <Link href="/filters/vistedVenues" passHref>
        <Button variant="outline-dark" size="lg">Visted Venues</Button>
      </Link>
      <Link href="/filters/nextNightOut" passHref>
        <Button variant="outline-dark" size="lg">Next Night Out</Button>
      </Link>
    </div>
  );
}

export default Home;
