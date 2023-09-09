import React from 'react';
import Header from '../common/header/Header';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import ProjectOne from '../components/project/ProjectOne';
import Footer from '../common/footer/Footer';

const Projects = () => {
    return (
        <>
            <Header />
            <Breadcrumb 
                heading="Our Projects"
                currentPage="Projects" 
            />
            <ProjectOne />
            <Footer />
        </>
    )
}

export default Projects;