/* eslint-disable */
import React from 'react';
import { useEffect, useState } from 'react';
import { getAllClothingType } from '../../api/venue/venues';
import ClothingCard from '../../components/ClothingCard';


function CityPage() {
    const [clothing, setClothing] = useState([]);
    const getAllClothes = () => {
      getAllClothingType().then(setClothing);
    };
    useEffect(() => {
        getAllClothes();
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
                <h1>Clothing Types:</h1>
            </div>
            <div className="flex-wrap" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                {clothing?.map((clothes) => (
                    <ClothingCard clothingObj={clothes} />))}
            </div>
        </>
    );
}
export default CityPage;
