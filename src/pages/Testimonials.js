import React from 'react';
import Header from '../common/header/Header';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import TestimonialFour from '../components/testimonial/TestimonialFour';
import Footer from '../common/footer/Footer';

const Testimonials = () => {
    return (
        <>
            <Header />
            <Breadcrumb 
                heading="Testimonials"
                currentPage="Testimonials" 
            />
            <TestimonialFour />
            <Footer />
        </>
    )
}

export default Testimonials;