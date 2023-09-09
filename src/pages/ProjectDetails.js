import React from 'react';
import Header from '../common/header/Header';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import ProjectDetailsContent from '../components/project-details/ProjectDetailsContent';
import Footer from '../common/footer/Footer';

const ProjectDetails = () => {
    return (
        <>
            <Header />
            <Breadcrumb 
                heading="Projects Details"
                currentPage="Projects Details" 
            />
            <ProjectDetailsContent />
            <Footer />
        </>
    )
}

export default ProjectDetails;