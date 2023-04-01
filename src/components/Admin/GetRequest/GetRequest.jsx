import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import GetRequestRaw from './GetRequestRaw';
import swal from 'sweetalert';

const GetRequest = () => {
    const [getRequest, setGetRequest] = useState([]);

    useEffect(() => {
        fetch('https://omepcserver.up.railway.app/api/omEpc/getRequest')
        .then(res => res.json())
        .then(data => {
            if(data.success === true) {
                // console.log(data.allRequest);
                setGetRequest(data.allRequest)
                
            } else {
                swal("Server Error  :", `${data.message}`, "error");
            }
        })
    },[])

    console.log("set",getRequest);
    return (
        <div>
            <div className="overflow-x-auto mt-5">
                <table className="table w-full text-center">
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