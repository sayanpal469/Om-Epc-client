import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import PrinterServiceRaw from './PrinterServiceRaw';

const PrinterService = () => {
    const [serviceRequest, setServiceRequest] = useState([]);
    // const [responce, setResponce] = useState()

    let resStatus = serviceRequest.filter(service => service.responseStatus == true)
    let pendingStatus = serviceRequest.filter(service => service.responseStatus == false)

    // console.log(resStatus)

    useEffect(() => {
        fetch('http://localhost:5000/api/omEpc/serviceReq/printer')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success == true) {
                    setServiceRequest(data.allServiceRequests)
                    // setResponce( serviceRequest.filter(service => service.responseStatus == true))
                } else {
                    alert(`Error : ${data.message}`)
                }
            })
    }, [serviceRequest])

    return (
        <div>
            <p className='text-center lg:text-3xl mt-2 font-semibold text-orange-500'>Printer Service Requests</p>

            <div className='my-10'>
                <p className='text-xl font-bold text-blue-500'>Total completed services- {resStatus.length}</p>
                <p className='text-xl mt-2 font-bold text-red-500'>Total Pending services- {pendingStatus.length}</p>
            </div>


            <div>
                <div class="overflow-x-auto mt-5">
                    <table class="table w-full text-center">
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
                                serviceRequest.map((request, index) => <PrinterServiceRaw
                                    key={request._id}
                                    index={index}
                                    request={request}
                                ></PrinterServiceRaw>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PrinterService;