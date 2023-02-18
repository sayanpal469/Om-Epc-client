import React, { useState } from 'react';
import { MdOutlineMiscellaneousServices } from 'react-icons/md';
import { Link } from 'react-router-dom';
import useService from '../hooks/useService';
import './ModalStyle.css'
const serviceItems = ['computer', 'ups', 'printer', 'survillence']

const ServiceModal = () => {
    const [value, setValue] = useState(0)
    const [services, loading] = useService(serviceItems[value]);

    const updateValue = (id) => {
        setValue(id)
    }

    return (
        <div className=''>
            {/* The button to open modal */}
            {/* <lable label htmlFor="serviceModal" className="btn" > open modal</lable> */}

            {/* Put this part before </body> tag */}
            < input type="checkbox" id="serviceModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box ">
                    <label htmlFor="serviceModal" className="btn btn-sm btn-circle bg-red-500 border-0 absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-3xl mt-2">Make an Appointment for your</h3>


                    <div className='mt-5 mb-3'>
                        <ul className="menu menu-horizontal space-x-5 border-orange-500 text-sm">
                            <li><Link to='#' className="border" onClick={() => updateValue(0)} >Computer or Laptop</Link></li>
                            <li><Link to='#' className="border" onClick={() => updateValue(1)} >Ups</Link></li>
                            <li><Link to='#' className="border" onClick={() => updateValue(2)} >Printer</Link></li>
                            <li><Link to='#' className="border" onClick={() => updateValue(3)} >Survillence</Link></li>
                        </ul>
                    </div>


                    {/* Computer repair form */}
                    {
                        value == 0 && <form className='form-control' action="">
                            <input name='name' type="text" placeholder="Your Name*" className="mt-5 mb-2 input input-bordered w-full max-w-lg rounded-none" />
                            <div className='flex space-x-2 my-3'>
                                <input name='email' type="email" placeholder="Your e-mail address*" className="input input-bordered w-full max-w-lg rounded-none" />

                                <input name='contact' type="number" placeholder="Your phone number*" className="input input-bordered w-full max-w-lg rounded-none" />
                            </div>
                            <input name='address' type="text" placeholder="Address*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />
                            <input name='city' type="text" placeholder="City*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />
                            <input name='pinCode' type="number" placeholder="Pin code*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                            <div className='my-2'>
                                <span className="ml-1">Category*</span>
                                <select name='category' className="capitalize select select-bordered w-full max-w-lg rounded-none mt-2">
                                    {
                                        services.map(service => <option className='capitalize' value={service.category}>{service.category}</option>)
                                    }
                                </select>
                            </div>

                            <div className='my-2'>
                                <span className="ml-1">Item*</span>
                                <select name='item' className="capitalize select select-bordered w-full max-w-lg rounded-none mt-2">
                                    <option className='capitalize' value='Laptop'>Laptop</option>
                                    <option className='capitalize' value='Laptop'>Desktop</option>
                                </select>
                            </div>

                            <div className='my-2'>
                                <span className="ml-1">Brand*</span>
                                <select name='brand' className="capitalize select select-bordered w-full max-w-lg rounded-none mt-2">
                                    <option className='capitalize' value='Laptop'>Apple</option>
                                    <option className='capitalize' value='Laptop'>Hp</option>
                                    <option className='capitalize' value='Laptop'>Dell</option>
                                    <option className='capitalize' value='Laptop'>Lenovo</option>
                                    <option className='capitalize' value='Laptop'>Acer</option>
                                    <option className='capitalize' value='Laptop'>Asus</option>
                                    <option className='capitalize' value='Laptop'>MSI</option>
                                    <option className='capitalize' value='Laptop'>Microsoft Surface</option>
                                    <option className='capitalize' value='Laptop'>Razer</option>
                                    <option className='capitalize' value='Laptop'>Samsung</option>
                                </select>
                            </div>

                            <div className='my-2'>
                                <span className="ml-1">Operating System*</span>
                                <select name='operating' className=" select select-bordered w-full max-w-lg rounded-none mt-2">
                                    <option className='capitalize' value='Laptop'>MS-Windows</option>
                                    <option className='capitalize' value='Laptop'>Ubuntu</option>
                                    <option className='capitalize' value='Laptop'>Apple macOs</option>
                                    <option className='capitalize' value='Laptop'>Apple iOS</option>
                                    <option className='capitalize' value='Laptop'>Google's Android OS</option>
                                    <option className='capitalize' value='Laptop'>Linux</option>
                                    <option className='capitalize' value='Laptop'>Chrome OS</option>
                                </select>
                            </div>

                            <input name='collectionDate' type="Date" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                            <textarea name='message' placeholder="Your message*" className="textarea textarea-bordered textarea-lg w-full max-w-lg my-2 rounded-none" ></textarea>
                        </form>
                    }



                    {/* UPS repair form */}

                    {
                        value == 1 && <form className='form-control' action="">
                            <input name='name' type="text" placeholder="Your Name*" className="mt-5 mb-2 input input-bordered w-full max-w-lg rounded-none" />
                            <div className='flex space-x-2 my-3'>
                                <input name='email' type="email" placeholder="Your e-mail address*" className="input input-bordered w-full max-w-lg rounded-none" />

                                <input name='contact' type="number" placeholder="Your phone number*" className="input input-bordered w-full max-w-lg rounded-none" />
                            </div>
                            <input name='address' type="text" placeholder="Address*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />
                            <input name='city' type="text" placeholder="City*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />
                            <input name='pinCode' type="number" placeholder="Pin code*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                            <div className='my-2'>
                                <span className="ml-1">Category*</span>
                                <select name='category' className="capitalize select select-bordered w-full max-w-lg rounded-none mt-2">
                                    {
                                        services.map(service => <option className='capitalize' value={service.category}>{service.category}</option>)
                                    }
                                </select>
                            </div>

                            {/* <div className='my-2'>
                                <span className="ml-1">Item*</span>
                                <select name='item' className="capitalize select select-bordered w-full max-w-lg rounded-none mt-2">
                                    <option className='capitalize' value='Laptop'>Laptop</option>
                                    <option className='capitalize' value='Laptop'>Desktop</option>
                                </select>
                            </div> */}

                            <div className='my-2'>
                                <span className="ml-1">Brand*</span>
                                <select name='brand' className="capitalize select select-bordered w-full max-w-lg rounded-none mt-2">
                                    <option className='capitalize' value='Laptop'>Luminous</option>
                                    <option className='capitalize' value='Laptop'>Genus Power</option>
                                    <option className='capitalize' value='Laptop'>Microtek</option>
                                    <option className='capitalize' value='Laptop'>Amaron</option>
                                    <option className='capitalize' value='Laptop'>Eaton Corporation Inc</option>
                                    <option className='capitalize' value='Laptop'> Hitachi Hi-Rel</option>
                                    <option className='capitalize' value='Laptop'>Zebronics</option>
                                    <option className='capitalize' value='Laptop'>V-Guard Industries Ltd</option>
                                    <option className='capitalize' value='Laptop'>Riello PCI India Pvt Ltd</option>
                                    <option className='capitalize' value='Laptop'>APC by Schneider Electric</option>
                                </select>
                            </div>

                            <input name='collectionDate' type="Date" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                            <textarea name='message' placeholder="Your message*" className="textarea textarea-bordered textarea-lg w-full max-w-lg my-2 rounded-none" ></textarea>
                        </form>
                    }


                    {/* Printer repair form */}

                    {
                        value == 2 && <form className='form-control' action="">
                            <input name='name' type="text" placeholder="Your Name*" className="mt-5 mb-2 input input-bordered w-full max-w-lg rounded-none" />
                            <div className='flex space-x-2 my-3'>
                                <input name='email' type="email" placeholder="Your e-mail address*" className="input input-bordered w-full max-w-lg rounded-none" />

                                <input name='contact' type="number" placeholder="Your phone number*" className="input input-bordered w-full max-w-lg rounded-none" />
                            </div>
                            <input name='address' type="text" placeholder="Address*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />
                            <input name='city' type="text" placeholder="City*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />
                            <input name='pinCode' type="number" placeholder="Pin code*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                            <div className='my-2'>
                                <span className="ml-1">Category*</span>
                                <select name='category' className="capitalize select select-bordered w-full max-w-lg rounded-none mt-2">
                                    {
                                        services.map(service => <option className='capitalize' value={service.category}>{service.category}</option>)
                                    }
                                </select>
                            </div>

                            <div className='my-2'>
                                <span className="ml-1">Brand*</span>
                                <select name='brand' className="capitalize select select-bordered w-full max-w-lg rounded-none mt-2">
                                    <option className='capitalize' value='Laptop'>HP</option>
                                    <option className='capitalize' value='Laptop'>Canon</option>
                                    <option className='capitalize' value='Laptop'>Xerox</option>
                                    <option className='capitalize' value='Laptop'>Brother</option>
                                    <option className='capitalize' value='Laptop'>Epson</option>
                                    <option className='capitalize' value='Laptop'>Others</option>
                                </select>
                            </div>

                            <input name='collectionDate' type="Date" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                            <textarea name='message' placeholder="Your message*" className="textarea textarea-bordered textarea-lg w-full max-w-lg my-2 rounded-none" ></textarea>
                        </form>
                    }




{
                        value == 3 && <form className='form-control' action="">
                            <input name='name' type="text" placeholder="Your Name*" className="mt-5 mb-2 input input-bordered w-full max-w-lg rounded-none" />
                            <div className='flex space-x-2 my-3'>
                                <input name='email' type="email" placeholder="Your e-mail address*" className="input input-bordered w-full max-w-lg rounded-none" />

                                <input name='contact' type="number" placeholder="Your phone number*" className="input input-bordered w-full max-w-lg rounded-none" />
                            </div>
                            <input name='address' type="text" placeholder="Address*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />
                            <input name='city' type="text" placeholder="City*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />
                            <input name='pinCode' type="number" placeholder="Pin code*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                            <div className='my-2'>
                                <span className="ml-1">Category*</span>
                                <select name='category' className="capitalize select select-bordered w-full max-w-lg rounded-none mt-2">
                                    {
                                        services.map(service => <option className='capitalize' value={service.category}>{service.category}</option>)
                                    }
                                </select>
                            </div>

                            <div className='my-2'>
                                <span className="ml-1">Brand*</span>
                                <select name='brand' className="capitalize select select-bordered w-full max-w-lg rounded-none mt-2">
                                    <option className='capitalize' value='Laptop'>Honeywell</option>
                                    <option className='capitalize' value='Laptop'>Bosch</option>
                                    <option className='capitalize' value='Laptop'>Axis Communications</option>
                                    <option className='capitalize' value='Laptop'>Hikvision</option>
                                    <option className='capitalize' value='Laptop'>CP Plus</option>
                                    <option className='capitalize' value='Laptop'>Samsung</option>
                                    <option className='capitalize' value='Laptop'>Godrej</option>
                                    <option className='capitalize' value='Laptop'>Others</option>
                                </select>
                            </div>

                            <input name='collectionDate' type="Date" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                            <textarea name='message' placeholder="Your message*" className="textarea textarea-bordered textarea-lg w-full max-w-lg my-2 rounded-none" ></textarea>
                        </form>
                    }



                    <div className="modal-action justify-start">
                        <label htmlFor="serviceModal" className="btn capitalize bg-orange-500 border-none rounded-none"> <MdOutlineMiscellaneousServices className='mr-1' /> Explore services</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceModal;