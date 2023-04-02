import React from 'react';

const ServiceRequestRaw = ({ index, request, setDeleteSuccess }) => {
    const { _id, type, item, brand, category, isCompleted, isCanceled } = request;

    const handelCancel = (serviceType,id) => {
        fetch(`https://omepcserver.up.railway.app/api/omEpc/serviceReq/${serviceType}/cancel/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                isCanceled: true
            })
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.success == true) {
                    setDeleteSuccess(true)
                    alert('Service Canceled')
                }
            })
    };

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{item}</td>
            <td>{brand}</td>
            <td>{category}</td>
            <td className='capitalize'>{isCanceled ? <p className='bg-red-500 p-2 text-white'>Canceled</p> : isCompleted ? <p className='bg-green-500 p-2'>Completed</p> : <p className='bg-pink-500 p-2 text-white'>Pending</p>}</td>

            <td>{
                isCanceled ? <p className='bg-red-500 p-2 text-white'>Canceled</p> : isCompleted == true ? <button className='btn btn-disabled'>Completed</button> : <button onClick={() => handelCancel(type,_id)} className='btn btn-error text-white'>Cancel Service</button>
            }</td>
        </tr>
    );
};

export default ServiceRequestRaw;