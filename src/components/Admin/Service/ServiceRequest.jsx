import React, { useEffect, useState } from 'react';
import ServiceRequestRaw from './ServiceRequestRaw';

const ServiceRequest = () => {
    const [serviceRequest, setServiceRequest] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/omEpc/serviceReq')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.success == true) {
                    setServiceRequest(data.allServiceRequests)
                } else {
                    alert(`Error : ${data.message}`)
                }
            })
    }, [serviceRequest])
    return (
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
                            <th>Item</th>
                            <th>Brand</th>
                            <th>Operating</th>
                            <th>Date</th>
                            <th>Message</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            serviceRequest.map((request, index) => <ServiceRequestRaw
                                key={request._id}
                                index={index}
                                request={request}
                            ></ServiceRequestRaw>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ServiceRequest;