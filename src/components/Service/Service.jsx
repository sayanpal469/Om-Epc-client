import React, { useEffect, useState } from 'react';
import './service.css'
import { IoMdCall } from 'react-icons/io';
import { FiCheck } from 'react-icons/fi';
import { MdOutlineMiscellaneousServices } from 'react-icons/md';
import axios from 'axios';
import ServiceCart from './ServiceCart';
import WhyUs from './WhyUs';
import ServiceModal from '../modal/ServiceModal';
import Footer from '../Footer/Footer';
import useService from '../hooks/useService';

const Service = () => {
    const [services] = useService()
    return (
        <div className='main'>
            <div className='service-container'>
                <div className='Heading text-4xl md:text-5xl lg:text-5xl text-white'>
                    Our Service
                </div>
            </div>
            <div className='lg:px-20 my-20 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 space-x-5'>
                <div className=''>
                    <img className='sImg' src="https://i.postimg.cc/qRrWH78M/pexels-elias-gamez-10558599-1.jpg" alt="" />
                </div>
                <div className='p-10'>
                    <h3 className='text-orange-500 text-2xl font-bold'>Our Service</h3>
                    <h1 className='text-4xl font-bold mt-2'>Responsive & Professional</h1>
                    <p className='mt-10 text-lg'>We go the extra mile on every project. The value we provide clients comes from our level of skill and performance, as well as our knowledge and professionalism. Rest assured, we put the same level of energy into every project we take on</p>
                    <div className='mt-10'>
                        <p className='lg:text-lg font-bold'>Call us today</p>
                        <div className='flex items-center mt-2 space-x-2'>
                            <IoMdCall className='text-orange-500 font-bold lg:text-3xl' />
                            <h2 className='lg:text-2xl text-orange-500'> 1 (800) 765-43-21</h2>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className='text-center text-2xl lg:text-4xl mb-14 font-bold'>What We Offer</h1>

            <div className='lg:px-10 flex justify-center'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mb-10'>
                    {
                        services.map(service => <ServiceCart key={service._id} service={service} />)
                    }
                </div>
            </div>
            
            <ServiceModal services={services}/>
            <div className='flex justify-center'>
                <label label htmlFor="serviceModal" className='rounded-sm btn bg-orange-500 hover:bg-white capitalize text-white hover:text-orange-500 font-semibold border-0 px-6 text-lg hover:border hover:border-orange-500'><MdOutlineMiscellaneousServices className='mr-1'/> Shedule for service</label>
            </div>


            <WhyUs/>

            <Footer/>
        </div>
    );
};

export default Service;