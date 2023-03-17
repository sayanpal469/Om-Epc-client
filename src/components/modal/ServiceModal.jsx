import React, { useState } from 'react';
import { useEffect } from 'react';
import { MdOutlineMiscellaneousServices } from 'react-icons/md';
import { Link } from 'react-router-dom';
import useService from '../hooks/useService';
import useUserEmail from '../hooks/useUserEmail';
import './ModalStyle.css';
import swal from 'sweetalert';
const serviceItems = ['computer', 'ups', 'printer', 'survillence']

const ServiceModal = ({ openModal, setOpennModal }) => {
    const [value, setValue] = useState(0)
    const [services, loading] = useService(serviceItems[value]);
    const [clientName, setClientName] = useState('');
    const [phone, setPhone] = useState(1);
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [pincode, setPincode] = useState(1);
    const [computerCategory, setComputerCategory] = useState('battery replacemant');
    const [upsCategory, setUpsCategory] = useState('battery faliure');
    const [printerCategory, setPrinterCategory] = useState('paper jamming');
    const [surveillanceCategory, setSurveillanceCategory] = useState('Check arp tables');
    const [computerBrand, setComputerBrand] = useState('hp');
    const [upsBrand, setUpsBrand] = useState('luminous');
    const [printerBrand, setPrinterBrand] = useState('hp');
    const [surveillanceBrand, setSurveillanceBrand] = useState('honeywell');
    const [item, setItem] = useState('Desktop');
    const [operating, setOperating] = useState('Ms-Windows');
    const [date, setDate] = useState('');
    const [message, setMessage] = useState('');
    const [userEmail] = useUserEmail();

    const updateValue = (id) => {
        setValue(id)
    };

    const handelComputerService = (e) => {
        e.preventDefault();
        const computerRequest = {
            collectionDate: date,
            category: computerCategory,
            item: item,
            brand: computerBrand,
            operating: operating,
            clientName: clientName,
            email: userEmail,
            contact: phone,
            address: address,
            city: city,
            pinCode: pincode,
            message: message
        }

        fetch('https://omepcserver.up.railway.app/api/omEpc/serviceReq/computer/new', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(computerRequest)
        })
            .then(res => res.json())
            .then(res => {
                if (res.success == true) {
                    swal('Your Service request send, we will call you very soon')
                    e.target.reset();
                    setOpennModal(false)
                } else {
                    swal('Not possible')
                }
            }).catch(err => {
                swal({
                    title: "Error!",
                    text: err.message,
                    icon: "error",
                });
            })

    };


    const handelUpsService = (e) => {
        e.preventDefault();

        const upsRequest = {
            collectionDate: date,
            category: upsCategory,
            brand: upsBrand,
            clientName: clientName,
            email: userEmail,
            contact: phone,
            address: address,
            city: city,
            pinCode: pincode,
            message: message
        }
        fetch('https://omepcserver.up.railway.app/api/omEpc/serviceReq/ups/new', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(upsRequest)
        })
            .then(res => res.json())
            .then(res => {
                if (res.success == true) {
                    swal('Your Service request send, we will call you very soon')
                    e.target.reset();
                    setOpennModal(false)
                } else {
                    swal('Not possible')
                }
            }).catch(err => {
                swal({
                    title: "Error!",
                    text: err.message,
                    icon: "error",
                });
            })

    }

    const handelPrinterService = (e) => {
        e.preventDefault();

        const printerRequest = {
            collectionDate: date,
            category: printerCategory,
            brand: printerBrand,
            clientName: clientName,
            email: userEmail,
            contact: phone,
            address: address,
            city: city,
            pinCode: pincode,
            message: message
        }
        fetch('https://omepcserver.up.railway.app/api/omEpc/serviceReq/printer/new', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(printerRequest)
        })
            .then(res => res.json())
            .then(res => {
                if (res.success == true) {
                    swal('Your Service request send, we will call you very soon')
                    e.target.reset();
                    setOpennModal(false)
                } else {
                    swal('Not possible')
                }
            }).catch(err => {
                swal({
                    title: "Error!",
                    text: err.message,
                    icon: "error",
                });
            })

    }
    const handelSurveillanceService = (e) => {
        e.preventDefault();

        const surveillanceRequest = {
            collectionDate: date,
            category: surveillanceCategory,
            brand: surveillanceBrand,
            clientName: clientName,
            email: userEmail,
            contact: phone,
            address: address,
            city: city,
            pinCode: pincode,
            message: message
        }
        fetch('https://omepcserver.up.railway.app/api/omEpc/serviceReq/surveillance/new', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(surveillanceRequest)
        })
            .then(res => res.json())
            .then(res => {
                if (res.success == true) {
                    swal('Your Service request send, we will call you very soon')
                    e.target.reset();
                    setOpennModal(false)
                } else {
                    swal('Not possible')
                }
            }).catch(err => {
                swal({
                    title: "Error!",
                    text: err.message,
                    icon: "error",
                });
            })

    }

    return (
        <div className=''>
            {/* The button to open modal */}
            {/* <lable label htmlFor="serviceModal" className="btn" > open modal</lable> */}

            {/* Put this part before </body> tag */}
            {openModal && <input type="checkbox" id="serviceModal" className="modal-toggle" />}
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box ">
                    <label htmlFor="serviceModal" className="btn btn-sm btn-circle bg-red-500 border-0 absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-3xl mt-2">Make an Appointment for your</h3>


                    <div className='mt-8 mb-3'>
                        <ul className="menu menu-horizontal space-x-1 lg:space-x-5 border-orange-500 text-xs lg:text-sm">
                            <li><Link to='#' className="border" onClick={() => updateValue(0)} >Computer or Laptop</Link></li>
                            <li><Link to='#' className="border" onClick={() => updateValue(1)} >Ups</Link></li>
                            <li><Link to='#' className="border" onClick={() => updateValue(2)} >Printer</Link></li>
                            <li><Link to='#' className="border" onClick={() => updateValue(3)} >Survillence</Link></li>
                        </ul>
                    </div>


                    {/* Computer repair form */}
                    {
                        value == 0 && <form onSubmit={handelComputerService} className='form-control' action="">
                            <input name='clientName' onChange={(e) => setClientName(e.target.value)} type="text" placeholder="Your Name*" required className="mt-5 mb-2 input input-bordered w-full max-w-lg rounded-none" />

                            <div className='flex space-x-2 my-3'>
                                <input name='email' type="email" disabled required value={userEmail} placeholder="Your e-mail address*" className="input input-bordered w-full max-w-lg rounded-none" />

                                <input name='contact' onChange={(e) => setPhone(e.target.value)} type="number" placeholder="Your phone number*" required className="input input-bordered w-full max-w-lg rounded-none" />
                            </div>

                            <input name='address' onChange={(e) => setAddress(e.target.value)} type="text" placeholder="Address*" required className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                            <input name='city' onChange={(e) => setCity(e.target.value)} type="text" placeholder="City*" required className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                            <input name='pinCode' onChange={(e) => setPincode(e.target.value)} type="number" placeholder="Pin code*" required className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                            <div className='my-2'>
                                <span className="ml-1">Category*</span>
                                <select required name='category' onChange={(e) => setComputerCategory(e.target.value)} className="capitalize select select-bordered w-full max-w-lg rounded-none mt-2">
                                    {
                                        services.map(service => <option className='capitalize' value={service.category}>{service.category}</option>)
                                    }
                                </select>
                            </div>

                            <div className='my-2'>
                                <span className="ml-1">Item*</span>
                                <select required name='item' onChange={(e) => setItem(e.target.value)} className="capitalize select select-bordered w-full max-w-lg rounded-none mt-2">
                                    <option className='capitalize' value='Desktop'>Desktop</option>
                                    <option className='capitalize' value='Laptop'>Laptop</option>
                                </select>
                            </div>

                            <div className='my-2'>
                                <span className="ml-1">Brand*</span>
                                <select required name='brand' onChange={(e) => setComputerBrand(e.target.value)} className="capitalize select select-bordered w-full max-w-lg rounded-none mt-2">
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
                                <select required name='operating' onChange={(e) => setOperating(e.target.value)} className=" select select-bordered w-full max-w-lg rounded-none mt-2">
                                    <option className='capitalize' value='Laptop'>MS-Windows</option>
                                    <option className='capitalize' value='Laptop'>Ubuntu</option>
                                    <option className='capitalize' value='Laptop'>Apple macOs</option>
                                    <option className='capitalize' value='Laptop'>Apple iOS</option>
                                    <option className='capitalize' value='Laptop'>Google's Android OS</option>
                                    <option className='capitalize' value='Laptop'>Linux</option>
                                    <option className='capitalize' value='Laptop'>Chrome OS</option>
                                </select>
                            </div>

                            <input name='collectionDate' onChange={(e) => setDate(e.target.value)} type="Date" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                            <textarea name='message' onChange={(e) => setMessage(e.target.value)} placeholder="Your message*" className="textarea textarea-bordered textarea-lg w-full max-w-lg my-2 rounded-none" ></textarea>

                            <div className="modal-action justify-start">
                                <button className="btn capitalize bg-orange-500 border-none rounded-none"><MdOutlineMiscellaneousServices className='mr-1'>
                                </MdOutlineMiscellaneousServices>
                                    <input type="submit" value='Explore services' />
                                </button>
                            </div>
                        </form>
                    }



                    {/* UPS repair form */}

                    {
                        value == 1 && <form onSubmit={handelUpsService} className='form-control' action="">
                            <input name='name' onChange={(e) => setClientName(e.target.value)} type="text" placeholder="Your Name*" className="mt-5 mb-2 input input-bordered w-full max-w-lg rounded-none" />

                            <div className='flex space-x-2 my-3'>
                                <input name='email' value={userEmail} type="email" placeholder="Your e-mail address*" className="input input-bordered w-full max-w-lg rounded-none" />

                                <input name='contact' onChange={(e) => setPhone(e.target.value)} type="number" placeholder="Your phone number*" className="input input-bordered w-full max-w-lg rounded-none" />
                            </div>

                            <input name='address' onChange={(e) => setAddress(e.target.value)} type="text" placeholder="Address*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                            <input name='city' onChange={(e) => setCity(e.target.value)} type="text" placeholder="City*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                            <input name='pinCode' onChange={(e) => setPincode(e.target.value)} type="number" placeholder="Pin code*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                            <div className='my-2'>
                                <span className="ml-1">Category*</span>
                                <select name='category' onChange={(e) => setUpsCategory(e.target.value)} className="capitalize select select-bordered w-full max-w-lg rounded-none mt-2">
                                    {
                                        services.map(service => <option className='capitalize' value={service.category}>{service.category}</option>)
                                    }
                                </select>
                            </div>

                            <div className='my-2'>
                                <span className="ml-1">Brand*</span>
                                <select name='brand' onChange={(e) => setUpsBrand(e.target.value)} className="capitalize select select-bordered w-full max-w-lg rounded-none mt-2">
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

                            <input name='collectionDate' onChange={(e) => setDate(e.target.value)} type="Date" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                            <textarea name='message' onChange={(e) => setMessage(e.target.value)} placeholder="Your message*" className="textarea textarea-bordered textarea-lg w-full max-w-lg my-2 rounded-none" ></textarea>


                            <div className="modal-action justify-start">
                                <button className="btn capitalize bg-orange-500 border-none rounded-none"><MdOutlineMiscellaneousServices className='mr-1'>
                                </MdOutlineMiscellaneousServices>
                                    <input type="submit" value='Explore services' />
                                </button>
                            </div>

                        </form>
                    }


                    {/* Printer repair form */}

                    {
                        value == 2 && <form onSubmit={handelPrinterService} className='form-control' action="">
                            <input name='name' required onChange={(e) => setClientName(e.target.value)} type="text" placeholder="Your Name*" className="mt-5 mb-2 input input-bordered w-full max-w-lg rounded-none" />

                            <div className='flex space-x-2 my-3'>
                                <input name='email' value={userEmail} type="email" placeholder="Your e-mail address*" className="input input-bordered w-full max-w-lg rounded-none" />

                                <input name='contact' onChange={(e) => setPhone(e.target.value)} type="number" placeholder="Your phone number*" className="input input-bordered w-full max-w-lg rounded-none" />
                            </div>

                            <input name='address' onChange={(e) => setAddress(e.target.value)} type="text" placeholder="Address*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                            <input name='city' onChange={(e) => setCity(e.target.value)} type="text" placeholder="City*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                            <input name='pinCode' onChange={(e) => setPincode(e.target.value)} type="number" placeholder="Pin code*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                            <div className='my-2'>
                                <span className="ml-1">Category*</span>
                                <select name='category' onChange={(e) => setPrinterCategory(e.target.value)} className="capitalize select select-bordered w-full max-w-lg rounded-none mt-2">
                                    {
                                        services.map(service => <option className='capitalize' value={service.category}>{service.category}</option>)
                                    }
                                </select>
                            </div>

                            <div className='my-2'>
                                <span className="ml-1">Brand*</span>
                                <select name='brand' onChange={(e) => setPrinterBrand(e.target.value)} className="capitalize select select-bordered w-full max-w-lg rounded-none mt-2">
                                    <option className='capitalize' value='Laptop'>HP</option>
                                    <option className='capitalize' value='Laptop'>Canon</option>
                                    <option className='capitalize' value='Laptop'>Xerox</option>
                                    <option className='capitalize' value='Laptop'>Brother</option>
                                    <option className='capitalize' value='Laptop'>Epson</option>
                                    <option className='capitalize' value='Laptop'>Others</option>
                                </select>
                            </div>

                            <input name='collectionDate' onChange={(e) => setDate(e.target.value)} type="Date" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                            <textarea name='message' onChange={(e) => setMessage(e.target.value)} placeholder="Your message*" className="textarea textarea-bordered textarea-lg w-full max-w-lg my-2 rounded-none" ></textarea>

                            <div className="modal-action justify-start">
                                <button className="btn capitalize bg-orange-500 border-none rounded-none"><MdOutlineMiscellaneousServices className='mr-1'>
                                </MdOutlineMiscellaneousServices>
                                    <input type="submit" value='Explore services' />
                                </button>
                            </div>

                        </form>
                    }


                    {/* Surveillance repair form */}

                    {
                        value == 3 && <form onSubmit={handelSurveillanceService} className='form-control' action="">
                            <input name='name' required onChange={(e) => setClientName(e.target.value)} type="text" placeholder="Your Name*" className="mt-5 mb-2 input input-bordered w-full max-w-lg rounded-none" />

                            <div className='flex space-x-2 my-3'>
                                <input name='email' value={userEmail} type="email" placeholder="Your e-mail address*" className="input input-bordered w-full max-w-lg rounded-none" />

                                <input name='contact' required onChange={(e) => setPhone(e.target.value)} type="number" placeholder="Your phone number*" className="input input-bordered w-full max-w-lg rounded-none" />
                            </div>

                            <input name='address' required onChange={(e) => setAddress(e.target.value)} type="text" placeholder="Address*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                            <input name='city' required onChange={(e) => setCity(e.target.value)} type="text" placeholder="City*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                            <input name='pinCode' required onChange={(e) => setPincode(e.target.value)} type="number" placeholder="Pin code*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                            <div className='my-2'>
                                <span className="ml-1">Category*</span>
                                <select name='category' required onChange={(e) => setSurveillanceCategory(e.target.value)} className="capitalize select select-bordered w-full max-w-lg rounded-none mt-2">
                                    {
                                        services.map(service => <option className='capitalize' value={service.category}>{service.category}</option>)
                                    }
                                </select>
                            </div>

                            <div className='my-2'>
                                <span className="ml-1">Brand*</span>
                                <select name='brand' required onChange={(e) => setSurveillanceBrand(e.target.value)} className="capitalize select select-bordered w-full max-w-lg rounded-none mt-2">
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

                            <input name='collectionDate' required onChangeCapture={(e) => setDate(e.target.value)} onChange={(e) => setDate(e.target.value)} type="Date" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                            <textarea name='message' required onChange={(e) => setMessage(e.target.value)} placeholder="Your message*" className="textarea textarea-bordered textarea-lg w-full max-w-lg my-2 rounded-none" ></textarea>

                            <div className="modal-action justify-start">
                                <button className="btn capitalize bg-orange-500 border-none rounded-none"><MdOutlineMiscellaneousServices className='mr-1'>
                                </MdOutlineMiscellaneousServices>
                                    <input type="submit" value='Explore services' />
                                </button>
                            </div>
                        </form>
                    }

                </div>
            </div>
        </div>
    );
};

export default ServiceModal;