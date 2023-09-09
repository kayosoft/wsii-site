import React from 'react';
import Header from '../common/header/Header';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import DonationDetailsContent from '../components/donation/DonationDetailsContent';
import Footer from '../common/footer/Footer';

const DonationDetails = () => {
    return (
        <>
            <Header />
            <Breadcrumb 
                heading="Donation Details"
                currentPage="Donation Details" 
            />
            <DonationDetailsContent />
            <Footer />
        </>
    )
}

export default DonationDetails;