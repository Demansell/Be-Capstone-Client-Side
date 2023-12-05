/* eslint-disable */
import React from 'react';
import { useEffect, useState } from 'react';
import {  getAllPaymentTypes } from '../../api/venue/venues';
import PaymentCard from '../../components/PaymentCard';


function PaymentsPage() {
    const [payment, setPayment] = useState([]);
    const getAllPayment = () => {
      getAllPaymentTypes().then(setPayment);
    };
    useEffect(() => {
        getAllPayment();
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
                <h1>Payment Types:</h1>
            </div>
            <div className="flex-wrap" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                {payment?.map((payments) => (
                    <PaymentCard paymentObj={payments} />))}
            </div>
        </>
    );
}
export default PaymentsPage;
