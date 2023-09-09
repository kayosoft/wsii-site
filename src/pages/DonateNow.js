import React from 'react';
import Header from '../common/header/Header';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import DonateOne from '../components/donation/DonateOne';
import Footer from '../common/footer/Footer';

const DonateNow = () => {
    return (
        <>
            <Header />
            <Breadcrumb 
                heading="Donate Now"
                currentPage="Donate Now" 
            />
            <DonateOne />
            <Footer />
        </>
    )
}

export default DonateNow;