/* eslint-disable */
import React from 'react';
import { useEffect, useState } from 'react';
import { getAllClothingType, getAllCounties } from '../../api/venue/venues';
import ClothingCard from '../../components/ClothingCard';
import CountyCard from '../../components/CountyCard';


function CountyPage() {
    const [county, setCounty] = useState([]);
    const getAllCounty = () => {
      getAllCounties().then(setCounty);
    };
    useEffect(() => {
        getAllCounty();
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
                <h1>Counties:</h1>
            </div>
            <div className="flex-wrap" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                {county?.map((counties) => (
                    <CountyCard countyObj={counties} />))}
            </div>
        </>
    );
}
export default CountyPage;
