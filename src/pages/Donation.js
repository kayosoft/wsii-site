import React from 'react';
import Header from '../common/header/Header';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import DonationListContent from '../components/donation/DonationListContent';
import Footer from '../common/footer/Footer';

const Donation = () => {
    return (
        <>
            <Header />
            <Breadcrumb 
                heading="Donation"
                currentPage="Donation" 
            />
            <DonationListContent />
            <Footer />
        </>
    )
}

export default Donation;