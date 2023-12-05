/* eslint-disable */
import React from 'react';
import { useEffect, useState } from 'react';
import { getAllPrices } from '../../api/venue/venues';
import PriceCard from '../../components/PriceCard';


function PricePage() {
    const [price, setPrice] = useState([]);
    const getAllPrice = () => {
      getAllPrices().then(setPrice);
    };
    useEffect(() => {
        getAllPrice();
    }, []);
    return (
        <>

            <div
                className="text-center d-flex flex-column justify-content-center align-content-center"
                style={{
                    height: '11vh',
                    padding: '7px',
                    // maxWidth: '100px',
                    margin: '0 auto',
                }}
            >
                <h1>Price Types:</h1>
            </div>
            <div className="flex-wrap" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                {price?.map((prices) => (
                    <PriceCard priceObj={prices} />))}
            </div>
        </>
    );
}
export default PricePage;
