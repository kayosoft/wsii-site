import React from 'react';
import Header from '../common/header/Header';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import BlogThree from '../components/blog/BlogThree';
import Footer from '../common/footer/Footer';

const BlogSidebar = () => {
    return (
        <>
            <Header />
            <Breadcrumb 
                heading="Blog Sidebar"
                currentPage="Blog Sidebar" 
            />
            <BlogThree />
            <Footer />
        </>
    )
}

export default BlogSidebar;