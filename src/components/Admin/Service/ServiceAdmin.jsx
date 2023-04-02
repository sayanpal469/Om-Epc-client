import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useService from '../../hooks/useService';
import ServiceRaw from './ServiceRaw';

const serviceItems = ['computer', 'ups', 'printer', 'survillence']

const ServiceAdmin = () => {
    const [item, setItem] = useState('');
    const [category, setCategory] = useState('');
    const [serviceImage, setServiceImage] = useState(null);
    const [value, setValue] = useState(0);
    const [services, loading] = useService(serviceItems[value]);
    const [alls, setAlls] = useState([]);

    useEffect(() => {
        setAlls(services)
    }, [services])

    const updateValue = (id) => {
        setValue(id)
    }


    const postProduct = (e) => {
        e.preventDefault();

        console.log(item, serviceImage, category)

        const formData = new FormData();
        formData.append("item", item);
        formData.append("category", category);
        formData.append("image", serviceImage);

        // console.log(name, productImg, model)

        const UPLOAD_URL = 'https://omepcserver.up.railway.app/api/omEpc/service/new'

        axios.post(UPLOAD_URL, formData)
            .then(response => {
                console.log(response.status)
                if (response.status == 200) {
                    const interval = setInterval(() => {
                        setAlls(services)
                    }, 5000);

                    return () => clearInterval(interval);
                }
                // console.log(response)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    useEffect(() => {

    }, [])


    return (
        <div>

            {/* Add service modal */}
            <div className='flex justify-center mt-2'>
                {/* <button className='btn'>Add</button> */}
                {/* The button to open modal */}
                <div>
                    <label htmlFor="addModal" className="btn">Add Service</label>

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="addModal" className="modal-toggle" />
                    <div className="modal modal-bottom sm:modal-middle ">
                        <div className="modal-box text-center">
                            <label htmlFor="addModal" className="btn btn-sm btn-circle bg-red-500 border-0 absolute right-2 top-2">✕</label>
                            <h3 className="font-bold text-3xl">Add a product</h3>
                            <form onSubmit={postProduct} className='form-control mt-5' action="" enctype="multipart/form-data">
                                <div className='my-2'>
                                    <select onChange={(e) => setItem(e.target.value)} className="capitalize select select-bordered w-full max-w-lg rounded-none mt-2">
                                        <option className='capitalize' value='computer'>Computer/Laptop</option>
                                        <option className='capitalize' value='ups'>Ups</option>
                                        <option className='capitalize' value='printer'>Printer</option>
                                        <option className='capitalize' value='survillence'>Surveillance</option>
                                        {/* <option className='capitalize' value='others'>Others</option> */}
                                    </select>
                                </div>
                                <input onChange={(e) => setCategory(e.target.value)} type="text" placeholder="Service Name*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />
                                <input type="file" onChange={(e) => setServiceImage(e.target.files[0])} accept='image/png, image/jpg, image/jpeg' className="my-2" />

                                <input className="btn capitalize bg-orange-500 border-none rounded-none" type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services category */}
            <div className='flex justify-center mt-5 '>
                <ul className="menu menu-horizontal space-x-2 gap-3 md:space-x-5 flex justify-center lg:space-x-10 border-orange-500">
                    <li><Link to='#' className="border" onClick={() => updateValue(0)} >Computer or Laptop</Link></li>
                    <li><Link to='#' className="border" onClick={() => updateValue(1)} >Ups</Link></li>
                    <li><Link to='#' className="border" onClick={() => updateValue(2)} >Printer</Link></li>
                    <li><Link to='#' className="border" onClick={() => updateValue(3)} >Survillence</Link></li>
                </ul>
            </div>

            {/* Service table */}
            <div className="overflow-x-auto mt-5">
                <table className="table w-full text-center mb-5">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Service</th>
                            <th>Name</th>
                            <th>Delete Service</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            alls.map((service, index) => <ServiceRaw
                                key={service._id}
                                index={index}
                                service={service}
                                alls={alls}
                                setAlls={setAlls}
                            ></ServiceRaw>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ServiceAdmin;