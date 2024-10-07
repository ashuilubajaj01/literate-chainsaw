import React from 'react';
import FirstPage from './Page1';
import ServicesSection from './ServicesSection';
import AboutUsSection from './AboutUsSection';
import TestimonialPage from './TestimonialPage';
import Team from './Team';
import FAQ from './FAQ';
import Contact from './contact';

const Home = () => {
    return(
        <>
            <FirstPage />
            <ServicesSection />
            <AboutUsSection />
            <TestimonialPage/>
            <Team/>
            <FAQ />
            <Contact/>
        </>
    )
}
export default Home;