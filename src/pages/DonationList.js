import React from 'react';
import Header from '../common/header/Header';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import DonationListContent from '../components/donation/DonationListContent';
import Footer from '../common/footer/Footer';

const DonationList = () => {
    return (
        <>
            <Header />
            <Breadcrumb 
                heading="Donation List"
                currentPage="Donation List" 
            />
            <DonationListContent />
            <Footer />
        </>
    )
}

export default DonationList;