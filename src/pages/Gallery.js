import React from 'react';
import Header from '../common/header/Header';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import GalleryOne from '../components/gallery/GalleryOne';
import Footer from '../common/footer/Footer';

const Gallery = () => {
    return (
        <>
            <Header />
            <Breadcrumb 
                heading="Gallery"
                currentPage="Gallery" 
            />
            <GalleryOne />
            <Footer />
        </>
    )
}

export default Gallery;