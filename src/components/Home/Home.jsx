import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Mission from '../Mission/Mission';
import Brands from '../Brands/Brands';
import Testimonials from '../Testimonials/Testimonials';
import Quote from '../Quote/Quote';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <About></About>
           <Mission></Mission>
           <Brands></Brands>
           <Testimonials></Testimonials>
           <Quote></Quote>
           <Footer/>
        </div>
    );
};

export default Home;