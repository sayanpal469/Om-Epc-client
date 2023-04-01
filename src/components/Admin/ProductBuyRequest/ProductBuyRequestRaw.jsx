import React from 'react';
import { FcCancel } from 'react-icons/fc';

const ProductBuyRequestRaw = ({ index, order }) => {
    const { _id, Quantity, firstName, lastName, email, contact, createdAt, totalBill, address, city, postCode } = order;
    const { brand, modelNumber, modelName } = order?.product;
    const productImg = `https://omepcserver.up.railway.app/uploads/${order.product.image}`;

    const handelShipped = (id) => {
        fetch(`https://omepcserver.up.railway.app/api/omEpc/buy/shipped/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                isShipped: true
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    };
    const handelOutOfDeliver = (id) => {
        fetch(`https://omepcserver.up.railway.app/api/omEpc/buy/delivery/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                outOfDelivery: true
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    };

    const handelComplete = (id) => {
        fetch(`https://omepcserver.up.railway.app/api/omEpc/buy/complete/${id}`, {
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
                console.log(data)
            })
    }

    return (
        <tr>
            {/* <th>{index + 1}</th> */}
            <td>
                <div className="avatar">
                    <div className="w-14">
                        <img src={productImg} alt='' />
                    </div>
                </div>
                <div className='mt-3'>Quantity x {Quantity}</div>
            </td>
            <td>{brand}</td>
            <td>{modelNumber ? modelNumber : modelName}</td>
            <td className='capitalize'>{firstName} {lastName}</td>
            <td>{email}</td>
            <td>{contact}</td>
            <td>{address}</td>
            <td>{city}</td>
            <td>{postCode}</td>
            <td>₹{totalBill}</td>
            <td>{createdAt}</td>
            {order.isCanceled ? <td className='w-28 mx-auto'><FcCancel className='text-5xl' /></td> : <td className='text-white'>{order.isCompleted ? <p className='bg-blue-500 p-2 rounded-lg w-20 mx-auto'>Paid</p> : <p className='bg-red-500 p-2 rounded-lg w-20 mx-auto'>Not paid</p>}</td>}

            {order.isCanceled ? <td className='w-28 mx-auto'><FcCancel className='text-5xl' /></td> : order.isCompleted ? <td className='text-white'>
                <p className='bg-blue-600 p-2 rounded-lg w-24 mx-auto'>Delivered</p>
            </td>
                :
                <td className='text-white'>
                    {order.isShipped && !order.outOfDelivery ? <><p className='bg-green-500 p-2 rounded-lg w-24 mx-auto'>Shipped</p>
                        <button onClick={() => handelOutOfDeliver(_id)} className='rounded-lg btn btn-primary mx-auto mt-2 btn-sm capitalize text-xs'>Out of deliver</button>
                    </>
                        :
                        order.outOfDelivery && order.isShipped ? <p className='bg-green-500 p-2 rounded-lg w-28 mx-auto'>Out of deliver</p>
                            :
                            <button onClick={() => handelShipped(_id)} className='rounded-lg btn btn-primary mx-auto'>Shipp Order</button>
                    }
                </td>}

            <td>{order.isCanceled ? <p className='bg-red-500 p-2 rounded-lg w-36 mx-auto text-white'>Order Canceled</p> : order.isCompleted == true ? <button className='btn btn-disabled'>Completed</button> :
                <button disabled={order.outOfDelivery ? false : true} onClick={() => handelComplete(_id)} className="btn btn-primary">Complete Order</button>}</td>
        </tr>
    );
};

export default ProductBuyRequestRaw;