/* eslint-disable */
import React from 'react';
import { useEffect, useState } from 'react';
import { getAllVenueTypes, getAllZipcodes } from '../../api/venue/venues';
import TypeCard from '../../components/TypeCard';
import ZipCodeCard from '../../components/ZipcodeCard';


function ZipCodePage() {
    const [zipcode, setZipcode] = useState([]);
    const getAllZipcode = () => {
      getAllZipcodes().then(setZipcode);
    };
    useEffect(() => {
        getAllZipcode();
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
                <h1>Zipcodes:</h1>
            </div>
            <div className="flex-wrap" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                {zipcode.map((zipcodes) => (
                    <ZipCodeCard zipCodeObj={zipcodes} />))}
            </div>
        </>
    );
}
export default ZipCodePage;
