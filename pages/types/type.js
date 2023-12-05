/* eslint-disable */
import React from 'react';
import { useEffect, useState } from 'react';
import { getAllVenueTypes } from '../../api/venue/venues';
import TypeCard from '../../components/TypeCard';


function TypePage() {
    const [type, setType] = useState([]);
    const getAllType = () => {
      getAllVenueTypes().then(setType);
    };
    useEffect(() => {
        getAllType();
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
                <h1>Types:</h1>
            </div>
            <div className="flex-wrap" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                {type?.map((types) => (
                    <TypeCard typeObj={types} />))}
            </div>
        </>
    );
}
export default TypePage;
