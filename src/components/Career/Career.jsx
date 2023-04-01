import React, { useState } from 'react';
import './Career.css'
import { FaConnectdevelop } from 'react-icons/fa';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { MdSecurity } from 'react-icons/md';
import { TbBusinessplan } from 'react-icons/tb';
import Footer from '../Footer/Footer';
import axios from 'axios';

const Career = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [cv, setCv] = useState(null);

    const handlePhoneNumberChange = (event) => {
        const inputPhoneNumber = event.target.value.replace(/\D/g, '').slice(0, 10); // remove all non-digit characters and limit to 10 digits
        setPhoneNumber(inputPhoneNumber);
    };

    const handelCarrer = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('firstName', e.target.fName.value);
        formData.append('lastName', e.target.lName.value);
        formData.append('email', e.target.email.value);
        formData.append('contact', phoneNumber);
        formData.append('image', cv);

        const UPLOAD_URL = 'https://omepcserver.up.railway.app/api/omEpc/carrer/new'

        axios.post(UPLOAD_URL, formData)
            .then(response => {
                const { data, status } = response;
                if (status == 200) {
                    alert('Thank you, Our company will call you soon')
                    e.target.reset();
                }
            })
            .catch((err) => {
                console.log(err.message)
            })

    }

    return (
        <div >
            <div className='carrer-banner bg-fixed'>
                <div className='Heading text-4xl md:text-5xl text-center lg:text-7xl text-white font-mono'>
                    <p className=''>Start your career in</p>
                    <h2 className='text-red-600 font-bold mt-5'>Om EPC Group</h2>
                </div>
            </div>

            <div className='text-center my-10 w-[70%] mx-auto '>
                <div>
                    <h1 className='text-4xl font-semibold'>About Om Epc Group</h1>
                    <p className='font-thin text-gray-700 mt-6'>OM EPC Solutions is a leading provider of comprehensive maintenance services for all types of computers, printers, cameras, batteries, and inverters. With its team of experienced technicians and their expertise in troubleshooting and fixing different types of electronic devices, the company is a trusted partner for individuals and businesses alike. The company offers an annual maintenance contract that covers regular check-ups and preventative maintenance, ensuring that all devices are functioning optimally at all times. In addition, the company provides 24/7 support for urgent repair needs, ensuring minimal downtime and interruption to the customer's operations.</p>
                </div>
            </div>

            <div className='my-16 bg-gray-100 py-10'>
                <h3 className='text-4xl text-center font-bold'>Benefits of working here</h3>

                <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 px-20 py-14 gap-20'>

                    <div className='flex flex-col lg:flex-row items-center space-x-3 text-center lg:text-left'>
                        <div>
                            <FaConnectdevelop className='text-8xl text-blue-500' />
                        </div>
                        <div>
                            <h2 className='text-lg font-semibold'>Developing Technical Skills</h2>
                            <p className='text-sm'>Working in Om Epc Solution can provide an opportunity to develop and improve technical skills related to troubleshooting and fixing computer hardware and software issues. As technology continues to advance, having up-to-date skills in this field can be beneficial for personal and professional growth.</p>
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row items-center space-x-3 text-center lg:text-left'>
                        <div>
                            <HiOutlineLightBulb className='text-8xl text-blue-500' />
                        </div>
                        <div>
                            <h2 className='text-lg font-semibold'>Increased Demand for Services</h2>
                            <p className='text-sm'>With the increased reliance on technology, the demand for repair services has grown considerably. By working in Om Epc Solution that provides repair services for a range of devices, you will be exposed to a large customer base and have a higher chance of getting more work.</p>
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row items-center space-x-3 text-center lg:text-left'>
                        <div>
                            <MdSecurity className='text-8xl text-blue-500' />
                        </div>
                        <div>
                            <h2 className='text-lg font-semibold'>Job Security</h2>
                            <p className='text-sm'>Similar to working in Om Epc Solution, working in a website that provides repair services for multiple devices can provide job security and stability. This is because these devices are essential in our daily lives, and their breakdown can significantly disrupt our work or personal life.</p>
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row items-center space-x-3 text-center lg:text-left'>
                        <div>
                            <TbBusinessplan className='text-8xl text-blue-500' />
                        </div>
                        <div>
                            <h2 className='text-lg font-semibold'>Business Opportunities</h2>
                            <p className='text-sm'>As a technician working for a computer, UPS, CCTV, and printer repair website, you will be exposed to the challenges that small and medium-sized businesses face. This provides an opportunity to develop business skills and entrepreneurial thinking. With the right expertise, you may even consider starting your own repair business or expanding your existing website's services.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='bg-gradient-to-r from-blue-500 to-purple-500 bg-opacity-50 py-14 px-14'>
                <div className='mx-auto bg-gradient-to-r from-blue-500 to-purple-500 bg-opacity-50 my-10 py-10 px-14 shadow-2xl lg:max-w-lg md:max-w-md rounded-md'>
                    <div>
                        <h4 className='text-3xl font-bold  text-center'>Apply now</h4>
                        <form onSubmit={handelCarrer} action="" className='mt-8 flex flex-col gap-5'>
                            <input type="text" name='fName' required placeholder="First Name*" className="input input-bordered w-full max-w-lg rounded-none" />

                            <input type="text" name='lName' required placeholder="Last Name*" className="input input-bordered w-full max-w-lg rounded-none" />

                            <input type="email" name='email' required placeholder="Email*" className="input input-bordered w-full max-w-lg rounded-none" />

                            <input
                                type="tel"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={phoneNumber}
                                onChange={handlePhoneNumberChange}
                                pattern="[0-9]{10}" // enforce 10-digit pattern
                                required
                                placeholder="Contact*"
                                className="input input-bordered w-full max-w-lg rounded-none" />

                            <input type="file" onChange={(e) => setCv(e.target.files[0])} required placeholder="Upload your cv*" />

                            <input type="submit" className='btn btn-warning rounded-none mt-2' />
                        </form>
                    </div>
                </div>
            </div>


            <Footer />

        </div>
    );
};

export default Career;