import React from 'react';
import { Helmet } from 'react-helmet';
import About from '../About/About';
import Banner from '../Banner/Banner';
import FAQ from '../FAQ/FAQ';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
                <meta name="description" content="Nested component" />
            </Helmet>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;