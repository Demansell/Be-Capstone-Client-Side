/* eslint-disable */
import React from 'react';
import { useEffect, useState } from 'react';
import CityCard from '../../components/CityCard';
import { getAllCities } from '../../api/venue/venues';


function CityPage() {
    const [cities, setCities] = useState([]);
    const getAllCity = () => {
        getAllCities().then(setCities);
    };
    useEffect(() => {
        getAllCity();
    }, []);
    return (
        <>

            <div
                className="text-center d-flex flex-column justify-content-center align-content-center"
                style={{
                    height: '22vh',
                    padding: '7px',
                    // maxWidth: '100px',
                    margin: '0 auto',
                }}
            >
                <h1>Cities:</h1>
            </div>
            <div className="flex-wrap" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                {cities?.map((city) => (
                    <CityCard cityObj={city} />))}
            </div>
        </>
    );
}
export default CityPage;
