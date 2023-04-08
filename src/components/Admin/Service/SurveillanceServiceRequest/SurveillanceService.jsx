import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import swal from 'sweetalert';
import SurveillanceRaw from './SurveillanceRaw';

const SurveillanceService = () => {
    const [serviceRequest, setServiceRequest] = useState([]);
    // const [responce, setResponce] = useState()

    let completedStatus = serviceRequest.filter(service => service.isCompleted == true);
    let pendingStatus = serviceRequest.filter(service => service.isCompleted == false && service.isCanceled == false);
    let canceledStatus = serviceRequest.filter(service => service.isCanceled == true);

    // console.log(resStatus)

    useEffect(() => {
        fetch('https://omepcserver.up.railway.app/api/omEpc/serviceReq/surveillance')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.success === true) {
                    setServiceRequest(data.allServiceRequests.reverse())
                    // setResponce( serviceRequest.filter(service => service.responseStatus == true))
                } else {
                    swal({
                        title: "Error!",
                        text: "data.message",
                        icon: "error",
                        button: "Aww!",
                      });
                }
            })
    }, [serviceRequest])
    return (
        <div>
            <p className='text-center lg:text-3xl mt-2 font-semibold text-orange-500'>Surveillance Service Requests</p>

            <div className='my-10'>
                <p className='text-xl font-bold text-blue-500'>Total completed services- {completedStatus.length}</p>
                <p className='text-xl mt-2 font-bold text-pink-500'>Total Pending services- {pendingStatus.length}</p>
                <p className='text-xl mt-2 font-bold text-red-500'>Total Canceled services- {canceledStatus.length}</p>
            </div>


            <div>
                <div className="overflow-x-auto mt-5">
                    <table className="table w-full text-center">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Customer Name</th>
                                <th>Email</th>
                                <th>Contact</th>
                                <th>Address</th>
                                <th>City</th>
                                <th>Pin code</th>
                                <th>Service Category</th>
                                <th>Brand</th>
                                <th>Date</th>
                                <th>Message</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                serviceRequest.map((request, index) => <SurveillanceRaw
                                    key={request._id}
                                    index={index}
                                    request={request}
                                ></SurveillanceRaw>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SurveillanceService;