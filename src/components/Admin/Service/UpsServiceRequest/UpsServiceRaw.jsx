import React from 'react';
import swal from 'sweetalert';

const UpsServiceRaw = ({ index, request }) => {
    const { _id, collectionDate, category, brand, clientName, email, contact, address, city, pinCode, message, isCompleted, isCanceled } = request;

    const handelComplete = (id) => {
        fetch(`https://omepcserver.up.railway.app/api/omEpc/serviceReq/ups/complete/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                isCompleted: true
            })
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.success === true) {
                    swal({
                        title: "Good job!",
                        text: "Service Completed!",
                        icon: "success",
                        button: "Aww yiss!",
                      });
                }
            })
    };

    return (
        <tr>
            <td>{index + 1}</td>
            <td className='capitalize'>{clientName}</td>
            <td>{email}</td>
            <td>+91 {contact}</td>
            <td className='capitalize'>{address}</td>
            <td className='capitalize'>{city}</td>
            <td>{pinCode}</td>
            <td className='capitalize'>{category}</td>
            <td className='capitalize'>{brand}</td>
            <td>{collectionDate}</td>
            <td className='capitalize'>{message}</td>

            <td className='capitalize'>{isCanceled ? <p className='bg-red-500 p-2 text-white'>Canceled</p> : isCompleted ? <p className='bg-green-500 p-2'>Completed</p> : <p className='bg-pink-500 p-2 text-white'>Pending</p>}</td>

            <td>{
                isCanceled ? <p className='bg-red-500 p-2 text-white'>Canceled</p> : isCompleted == true ? <button className='btn btn-disabled'>Completed</button> : <button onClick={() => handelComplete(_id)} className='btn btn-primary'>Complete Service</button>
            }</td>
        </tr>
    );
};

export default UpsServiceRaw;