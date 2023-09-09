import React from 'react';
import Header from '../common/header/Header';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import AboutOne from '../components/about/AboutOne';
import CounterOne from '../components/counter/CounterOne';
import TestimonialOne from '../components/testimonial/TestimonialOne';
import Footer from '../common/footer/Footer';

const About = () => {
    return (
        <>
            <Header />
            <Breadcrumb 
                heading="About Us"
                currentPage="About" 
            />
            <AboutOne />
            <CounterOne />
            <TestimonialOne />
            <Footer />
        </>
    )
}

export default About;