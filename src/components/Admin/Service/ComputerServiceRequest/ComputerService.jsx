import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import ComputerServiceRaw from './ComputerServiceRaw';

const ComputerService = () => {
    const [serviceRequest, setServiceRequest] = useState([]);
    // const [responce, setResponce] = useState()

    let completedStatus = serviceRequest.filter(service => service.isCompleted == true);
    let pendingStatus = serviceRequest.filter(service => service.isCompleted == false && service.isCanceled == false);
    let canceledStatus = serviceRequest.filter(service => service.isCanceled == true);

    // console.log(resStatus)

    useEffect(() => {
        fetch('https://omepcserver.up.railway.app/api/omEpc/serviceReq/computer')
            .then(res => res.json())
            .then(data => {
                // console.log(data)

                if (data.success == true) {
                    setServiceRequest(data.data)

                    // setResponce( serviceRequest.filter(service => service.responseStatus == true))
                } else {
                    swal({
                        title: "Error",
                        text: data.message,
                        icon: "Error",
                        button: "Aww!",
                      });
                }
            })
    }, [serviceRequest])

    return (
        <div>
            <p className='text-center lg:text-3xl mt-2 font-semibold text-orange-500'>Computer Service Requests</p>
            <div className='my-10'>
                <p className='text-xl font-bold text-blue-500'>Total completed services- {completedStatus.length}</p>
                <p className='text-xl mt-2 font-bold text-pink-500'>Total Pending services- {pendingStatus.length}</p>
                <p className='text-xl mt-2 font-bold text-red-500'>Total Canceled services- {canceledStatus.length}</p>
            </div>


            <div>
                <div className="overflow-x-auto my-5">
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
                                <th>Item</th>
                                <th>Brand</th>
                                <th>Operating</th>
                                <th>Date</th>
                                <th>Message</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                serviceRequest.map((request, index) => <ComputerServiceRaw
                                    key={request._id}
                                    index={index}
                                    request={request}
                                ></ComputerServiceRaw>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ComputerService;