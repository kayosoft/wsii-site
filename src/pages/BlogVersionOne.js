import React from 'react';
import Header from '../common/header/Header';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import BlogOne from '../components/blog/BlogOne';
import Footer from '../common/footer/Footer';

const BlogVersionOne = () => {
    return (
        <>
            <Header />
            <Breadcrumb 
                heading="Blog Post"
                currentPage="Blog" 
            />
            <BlogOne />
            <Footer />
        </>
    )
}

export default BlogVersionOne;