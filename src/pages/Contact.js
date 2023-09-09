import React from 'react';
import Header from '../common/header/Header';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import ContactMap from '../components/contact/ContactMap';
import Footer from '../common/footer/Footer';

const Contact = () => {
    return (
        <>
            <Header />
            <Breadcrumb 
                heading="Contact Us"
                currentPage="Contact" 
            />
            <ContactForm />
            <ContactInfo />
            <ContactMap />
            <Footer />
        </>
    )
}

export default Contact;