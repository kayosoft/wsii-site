import React from 'react';
import Header from '../common/header/Header';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import RecentEventsOne from '../components/events/RecentEventsOne';
import Footer from '../common/footer/Footer';

const Events = () => {
    return (
        <>
            <Header />
            <Breadcrumb 
                heading="Events"
                currentPage="Events" 
            />
            <RecentEventsOne />
            <Footer />
        </>
    )
}

export default Events;