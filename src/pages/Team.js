import React from 'react';
import Header from '../common/header/Header';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import TeamTwo from '../components/team/TeamTwo';
import Footer from '../common/footer/Footer';

const Team = () => {
    return (
        <>
            <Header />
            <Breadcrumb 
                heading="Team"
                currentPage="Team" 
            />
            <TeamTwo />
            <Footer />
        </>
    )
}

export default Team;