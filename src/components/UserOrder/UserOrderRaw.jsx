import React from 'react';
import '../../style/orderStyle.css'
import { FcCancel } from 'react-icons/fc';

const UserOrderRaw = ({ index, order, setDeleteSuccess }) => {
    const productImg = `http://localhost:5000/uploads/${order.product.image}`;
    // console.log(order.responseStatus)

    const { brand, modelName} = order.product


    const handelCancel = (id) => {
        fetch(`http://localhost:5000/api/omEpc/buy/cancel/${id}`, {
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
                console.log(data)
                if (data.success == true) {
                    setDeleteSuccess(true)
                    alert(data.message)
                } else {
                    alert(data.message)
                }
            }).catch(err => {
                alert(err.message)
            })
    }

    return (
        <tr className='text-center border-b-2 border-gray-200 py-5'>

            {/* <th>{index + 1}</th> */}
            <td>
                <div className="avatar">
                    <div className="w-14">
                        <img src={productImg} alt='' />
                    </div>
                </div>
                <div className='mt-3'>Quantity x {order.Quantity}</div>
            </td>

            {order.isCanceled ? <td><del>{brand}</del></td> : <td>{brand}</td>}

            {order.isCanceled ? <td><del>{modelName}</del></td> : <td>{modelName}</td>}

            {order.isCanceled ? <td className='font-bold'><del>₹{order.totalBill}</del></td> : <td className='font-bold'>₹{order.totalBill}</td>}

            {order.isCanceled ? <td className='w-28 mx-auto'><FcCancel className='text-5xl'/></td> : <td className='text-white'>{order.isCompleted ? <p className='bg-blue-500 p-2 rounded-lg w-20 mx-auto'>Paid</p> : <p className='bg-red-500 p-2 rounded-lg w-20 mx-auto'>Not paid</p>}</td>}

            



            {order.isCanceled ? <td className='w-28 mx-auto'><FcCancel className='text-5xl'/></td> :  order.isCompleted ? <td className='text-white'>
                <p className='bg-blue-600 p-2 rounded-lg w-24 mx-auto'>Delivered</p>
            </td>
                :
                <td className='text-white'>
                    {order.isShipped ? <p className='bg-green-500 p-2 rounded-lg w-24 mx-auto'>Shipped</p>
                        :
                        <p className='bg-green-600 p-2 rounded-lg w-24 mx-auto'>Approved</p>
                    }
                </td>}



            <td>{order.isCanceled ? <p className='bg-red-500 p-2 rounded-lg w-36 mx-auto text-white'>Order Canceled</p> : order.isCompleted == true ? <button className='btn btn-disabled'>Completed</button> :
                <button onClick={() => handelCancel(order?._id)} class="noselect cancel mx-auto"><span class="text">Cancel</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>}</td>
        </tr>
    );
};

export default UserOrderRaw;