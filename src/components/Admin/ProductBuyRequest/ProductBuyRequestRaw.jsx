import React from 'react';

const ProductBuyRequestRaw = ({ index, request }) => {
    const { _id, productName, modelNo, firstName, lastName, email, contact, quantity, responseStatus, createdAt } = request;

    const handelDelevery = (id) => {
        fetch(`http://localhost:5000/api/omEpc/buy/update/${id}`, {
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
            console.log(data)
         })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{productName}</td>
            <td>{modelNo}</td>
            <td className='capitalize'>{firstName} {lastName}</td>
            <td>{email}</td>
            <td>{contact}</td>
            <td>{quantity}</td>
            <td>{
                responseStatus == true ? <button className='btn btn-primary btn-disabled'>Delevered</button> : <button onClick={() => handelDelevery(_id)} className='btn btn-error'>Not Delevered</button>
            }</td>
            <td>{createdAt}</td>
        </tr>
    );
};

export default ProductBuyRequestRaw;