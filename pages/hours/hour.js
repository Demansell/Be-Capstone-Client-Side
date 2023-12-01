/* eslint-disable */
import React from 'react';
import { useEffect, useState } from 'react';
import { getAllHours } from '../../api/venue/venues';
import ClothingCard from '../../components/ClothingCard';
import HoursCard from '../../components/HoursCard';


function HoursPage() {
    const [hour, setHour] = useState([]);
    const getAllHour = () => {
      getAllHours().then(setHour);
    };
    useEffect(() => {
        getAllHour();
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
                <h1>Hour of Operations:</h1>
            </div>
            <div className="flex-wrap" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                {hour?.map((hours) => (
                    <HoursCard hoursObj={hours} />))}
            </div>
        </>
    );
}
export default HoursPage;
