import React from 'react';
import Header from '../common/header/Header';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import TeamDetailsContent from '../components/team-details/TeamDetailsContent';
import Footer from '../common/footer/Footer';

const TeamDetails = () => {
    return (
        <>
            <Header />
            <Breadcrumb 
                heading="Team Details"
                currentPage="Team Details" 
            />
            <TeamDetailsContent />
            <Footer />
        </>
    )
}

export default TeamDetails;