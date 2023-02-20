import React, { useEffect, useState } from 'react';
import './service.css'
import { IoMdCall } from 'react-icons/io';
import { MdOutlineMiscellaneousServices } from 'react-icons/md';
import ServiceCart from './ServiceCart';
import WhyUs from './WhyUs';
import ServiceModal from '../modal/ServiceModal';
import Footer from '../Footer/Footer';
import useService from '../hooks/useService';
import { Link, NavLink } from 'react-router-dom';

const serviceItems = ['computer', 'ups', 'printer', 'survillence']

const Service = () => {
    const [value, setValue] = useState(0)
    const [services, loading] = useService(serviceItems[value]);

    const updateValue = (id) => {
        setValue(id)
    }


    return (
        <div className='main'>
            <div className='service-container'>
                <div className='Heading text-4xl md:text-5xl lg:text-5xl text-white'>
                    Our Service
                </div>
            </div>
            <div className='lg:px-20 mt-20 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 space-x-5'>
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
                            <h2 className='lg:text-2xl text-orange-500'>91 7981413743</h2>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className='text-center text-2xl lg:text-4xl my-14 font-bold'>What We Offer</h1>

            <div className='flex justify-center mb-10 '>
                <ul className="menu menu-horizontal space-x-2 gap-3 md:space-x-5 flex justify-center lg:space-x-10 border-orange-500">
                    <li><Link to='#' className="border" onClick={() => updateValue(0)} >Computer or Laptop</Link></li>
                    <li><Link to='#' className="border" onClick={() => updateValue(1)} >Ups</Link></li>
                    <li><Link to='#' className="border" onClick={() => updateValue(2)} >Printer</Link></li>
                    <li><Link to='#' className="border" onClick={() => updateValue(3)} >Survillence</Link></li>
                </ul>
            </div>

            <div className='lg:px-10 flex justify-center'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mb-10'>
                    {!loading &&
                        services.map(service => <ServiceCart key={service._id} service={service} />)
                    }
                    {
                        loading && <progress className="progress w-56"></progress>
                    }
                </div>
            </div>

            <ServiceModal/>


            <div className='flex justify-center'>
                <label label htmlFor="serviceModal" className='rounded-sm btn bg-orange-500 hover:bg-white capitalize text-white hover:text-orange-500 font-semibold border-0 px-6 text-lg hover:border hover:border-orange-500'><MdOutlineMiscellaneousServices className='mr-1' /> Shedule for service</label>
            </div>

            <WhyUs />

            <Footer />
        </div>
    );
};

export default Service;