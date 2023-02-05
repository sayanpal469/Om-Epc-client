import React from 'react';
import Footer from '../Footer/Footer';
import "./AboutPage.css"

const AboutPage = () => {
    return (
        <div>
         <div className="top-banner-about">
         <img src="https://i.ibb.co/GvtnXrp/Home.png" alt="" />
         <img src="https://i.ibb.co/QvR0kqR/About.png" alt="" />
         <img src="https://i.ibb.co/3BRJ47H/New-Products-and-Services-Business-Website-in-Violet-Dark-Blue-Neon-Pink-Gradient-Tech-Style.png" alt="" />
         <img src="https://i.ibb.co/cFMvqkZ/FAQs.png" alt="" />
         <img src="https://i.ibb.co/cxS8vrN/Reviews.png" alt="" />
         <img src="https://i.ibb.co/FgWJJvb/Contact.png" alt="" />
         </div>
         <Footer></Footer>
        </div>
    );
};

export default AboutPage;