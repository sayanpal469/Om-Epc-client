import React from 'react';

const PrinterServiceRaw = ({ index, request }) => {
    const { _id, collectionDate, category, brand, clientName, email, contact, address, city, pinCode, message, responseStatus } = request;

    const handelDelevery = (id) => {
        fetch(`http://localhost:5000/api/omEpc/serviceReq/printer/status/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                responseStatus: true
            })
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.success == true) {
                    alert('Service completed')
                }
            })
    }
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
            <td>{
                responseStatus == true ? <button className='btn btn-disabled'>Complete</button> : <button onClick={() => handelDelevery(_id)} className='btn btn-error'>Pending</button>
            }</td>
        </tr>
    );
};

export default PrinterServiceRaw;