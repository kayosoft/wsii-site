import React from "react";
import Header from "../common/header/Header";
import Hero from "../components/hero/Hero";
import CounterTwo from "../components/counter/CounterTwo";
import FeatureTwo from "../components/features/FeatureOne";
import AboutOne from "../components/about/AboutOne";
import ProjectOne from "../components/project/ProjectOne";
import BrandTwo from "../components/brand/BrandTwo";
import SkillOne from "../components/skills/SkillOne";
import TeamOne from "../components/team/TeamOne";
import VideoOne from '../components/video/VideoOne';
import TestimonialOne from '../components/testimonial/TestimonialOne';
import BlogSectionThree from '../components/blog/BlogSectionThree';
import Footer from '../common/footer/Footer';

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <CounterTwo />
            <FeatureTwo />
            <AboutOne />
            <ProjectOne />
            <SkillOne />
            <TeamOne />
            <VideoOne />
            <TestimonialOne />
            <BlogSectionThree />
            <BrandTwo />
            <Footer />
        </>
    )
}

export default Home;