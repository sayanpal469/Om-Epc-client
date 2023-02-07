import React from 'react';
import { FiCheck } from 'react-icons/fi';

const WhyUs = () => {
    return (
        <div className='lg:px-20 my-20 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:space-x-5'>
            <div className='p-10'>
                <h3 className='text-orange-500 text-2xl font-bold'>Why us?</h3>
                <h1 className='text-4xl font-bold mt-2 mb-5'>Our Electricians are:</h1>
                <div className='flex items-center space-x-2 my-5'>
                    <FiCheck className='text-orange-500 font-bold lg:text-2xl' />
                    <h2 className=''>Fully screened and background checked for your peace of mind</h2>
                </div>
                <div className='flex items-center space-x-2 my-5'>
                    <FiCheck className='text-orange-500 font-bold lg:text-2xl' />
                    <h2 className=''>We don’t hire anyone we wouldn’t hire to work inside of our own homes.</h2>
                </div>
                <div className='flex items-center space-x-2 my-5'>
                    <FiCheck className='text-orange-500 font-bold lg:text-2xl' />
                    <h2 className=''>Neat, clean and uniformed for safety and security</h2>
                </div>
                <div className='flex items-center space-x-2 my-5'>
                    <FiCheck className='text-orange-500 font-bold lg:text-2xl' />
                    <h2 className=''>Knowledgeable, experienced and skilled</h2>
                </div>
                <div className='flex items-center space-x-2 my-5'>
                    <FiCheck className='text-orange-500 font-bold lg:text-2xl' />
                    <h2 className=''>Rigorously trained in customer service</h2>
                </div>
                <div className='flex items-center space-x-2 my-5'>
                    <FiCheck className='text-orange-500 font-bold lg:text-2xl' />
                    <h2 className=''>Fully licensed, bonded and insured</h2>
                </div>
                <div className='flex items-center space-x-2 my-5'>
                    <FiCheck className='text-orange-500 font-bold lg:text-2xl' />
                    <h2 className=''>Friendly, helpful, and reliable.</h2>
                </div>
            </div>

            <div className=''>
                <img className='' src="https://i.postimg.cc/zfkSVPM0/portrait-female-working.jpg" alt="" />
            </div>
        </div>
    );
};

export default WhyUs;