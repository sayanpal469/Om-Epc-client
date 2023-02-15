import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import GetRequestRaw from './GetRequestRaw';

const GetRequest = () => {
    const [getRequest, setGetRequest] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/omEpc/getRequest')
        .then(res => res.json())
        .then(data => {
            if(data.success == true) {
                setGetRequest(data.allRequest)
            } else {
                alert(`Server Error : ${data.message}`)
            }
        })
    },[])


    return (
        <div>
            <div class="overflow-x-auto mt-5">
                <table class="table w-full text-center">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>User</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Message</th>
                            <th>Response</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            getRequest.map((request, index) => <GetRequestRaw
                                key={request._id}
                                index={index}
                                request={request}
                                messages={getRequest}
                            ></GetRequestRaw>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default GetRequest;