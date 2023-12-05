/* eslint-disable */
import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

function PriceCard({ priceObj }) {

    return (
        <Card style={{
            width: '5rem', height: '3rem', margin: '8px', backgroundColor: '#fff', color: 'black', boxShadow: '3px 3px 4px #9e9e9e', borderRadius: '18px',
        }}
        >
            <Link href={`/prices/${priceObj.id}`} passHref>
                <div className="d-flex justify-content-start" style={{ padding: '10px 10px 0px 10px', gap: '2rem' }}>
                    <Card.Title className="align-self-center text-center fs-4">
                        {priceObj.price}
                    </Card.Title>
                </div>
            </Link>
        </Card>
    );
}

PriceCard.propTypes = {
    priceObj: PropTypes.shape({
      price: PropTypes.string,
        id: PropTypes.number,
    }).isRequired,
};

export default PriceCard;
