import React from 'react';
import Header from '../common/header/Header';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import ErrorContent from '../components/error/ErrorContent';
import Footer from '../common/footer/Footer';

const Error = () => {
    return (
        <>
            <Header />
            <Breadcrumb 
                heading="404 Error"
                currentPage="404 Error" 
            />
            <ErrorContent />
            <Footer />
        </>
    )
}

export default Error;