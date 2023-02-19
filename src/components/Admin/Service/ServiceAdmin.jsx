import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useService from '../../hooks/useService';
import ServiceRaw from './ServiceRaw';

const ServiceAdmin = () => {
    const [services, setServices] = useState([]);
    const [category, setCategory] = useState('')
    const [serviceImage, setServiceImage] = useState(null)

    useEffect(() => {
        fetch('http://localhost:5000/api/omEpc/service')
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setServices(data.services)
        })
    },[])

    const postProduct = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("category", category);
        formData.append("image", serviceImage);

        // console.log(name, productImg, model)

        const UPLOAD_URL = 'http://localhost:5000/api/omEpc/service/new'

        axios.post(UPLOAD_URL, formData)
            .then(response => console.log(response))
            .catch((err) => {
                console.log(err.message)
            })
    }
    return (
        <div>
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
                                <input onChange={(e) => setCategory(e.target.value)} type="text" placeholder="Service Name*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />
                                <input type="file" onChange={(e) => setServiceImage(e.target.files[0])} accept='image/png, image/jpg, image/jpeg' className="my-2" />

                                <input className="btn capitalize bg-orange-500 border-none rounded-none" type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="overflow-x-auto mt-10">
                <table class="table w-full text-center mb-5">
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
                            services.map((service, index) => <ServiceRaw
                                key={service._id}
                                index={index}
                                service={service}
                            ></ServiceRaw>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ServiceAdmin;