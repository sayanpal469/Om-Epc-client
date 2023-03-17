import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import NotFound from '../404NotFound/NotFound';
import useServiceRequests from '../hooks/useServiceRequests';
import useUserEmail from '../hooks/useUserEmail';
import Loading from '../Loading/Loading';
import userAuth from '../userAuth';
import ServiceRequestRaw from './ServiceRequestRaw';

const requestCategory = ['computer', 'ups', 'printer', 'surveillance'];

const ServiceRequests = () => {
    const [userEmail] = useUserEmail();
    const [value, setValue] = useState(0)
    const [requests, loading] = useServiceRequests(requestCategory[value], userEmail);
    const [deleteSuccess, setDeleteSuccess] = useState(false);
    // console.log(requests)


    const updateValue = (id) => {
        setValue(id)
    }

    useEffect(() => {
        if (deleteSuccess) {
            window.location.reload();
        }
    }, [deleteSuccess]);



    // const fetchData = async () => {
    //     setLoading(true)
    //     try {
    //         let { data, status } = await axios.get(`https://omepcserver.up.railway.app/api/omEpc/buy/${email}`)
    //         // console.log(data.available)
    //         if (status == 200) {
    //             setVisible(true)
    //             setOrders(data.available)
    //             setLoading(false)
    //             // setError('')
    //             if (orders) {
    //                 setVisible(true)
    //             }
    //         } else {
    //             setVisible(!visible)

    //         }
    //     } catch (error) {
    //         setLoading(false)
    //     }
    // }

    return (
        <div className='px-14'>

            <div className='flex justify-center my-10'>
                <ul className="menu menu-horizontal space-x-2 gap-3 md:space-x-5 flex justify-center lg:space-x-10 border-orange-500">
                    <li><Link to='#' className="border" onClick={() => updateValue(0)} >Computer or Laptop</Link></li>
                    <li><Link to='#' className="border" onClick={() => updateValue(1)} >Ups</Link></li>
                    <li><Link to='#' className="border" onClick={() => updateValue(2)} >Printer</Link></li>
                    <li><Link to='#' className="border" onClick={() => updateValue(3)} >Survillence</Link></li>
                </ul>
            </div>


            <div className="overflow-x-auto mt-10">
                <table className="table w-full text-center">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Item</th>
                            <th>Brand</th>
                            <th>Category</th>
                            {/* <th>Price</th> */}
                            {/* <th>Payment</th> */}
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                           !loading && requests?.map((request, index) => <ServiceRequestRaw
                                key={request._id}
                                index={index}
                                request={request}
                                setDeleteSuccess={setDeleteSuccess}
                            ></ServiceRequestRaw>)
                        }

                        {
                            loading && <Loading/>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ServiceRequests;