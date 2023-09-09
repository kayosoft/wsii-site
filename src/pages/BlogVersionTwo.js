import React from 'react';
import Header from '../common/header/Header';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import BlogTwo from '../components/blog/BlogTwo';
import Footer from '../common/footer/Footer';

const BlogVersionTwo = () => {
    return (
        <>
            <Header />
            <Breadcrumb 
                heading="Blog Post"
                currentPage="Blog V-2" 
            />
            <BlogTwo />
            <Footer />
        </>
    )
}

export default BlogVersionTwo;