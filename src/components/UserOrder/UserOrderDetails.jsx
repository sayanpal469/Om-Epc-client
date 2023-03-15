import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';
import userAuth from '../userAuth';

const UserOrderDetails = () => {
    const { orderId } = useParams();
    const [openModal, setOpenModal] = useState(true);
    const [order, setOrder] = useState({});
    const [loading, setLoading] = useState(true);
    const [visible, setVisible] = useState(false);
    const { _id, address, city, postCode, firstName, lastName, contact, isApproved, isCanceled, isCompleted, isShipped, outOfDelivery, email, totalBill } = order;
    // const { brand, modelName, image } = product;
    const productImg = `http://localhost:5000/uploads/${order?.product?.image}`;
    // console.log(order.product?.brand)


    useEffect(() => {
        // getUserEmail()
        fetchData()
    }, [])

    const fetchData = async () => {
        setLoading(true)
        try {
            let { data, status } = await axios.get(`http://localhost:5000/api/omEpc/buy/${orderId}`)
            // console.log(data.data)
            if (status === 200) {
                setVisible(true)
                setOrder(data.data)
                setLoading(false)
                // setError('')
                if (order) {
                    setVisible(true)
                }
            } else {
                setVisible(!visible)

            }
        } catch (error) {
            setLoading(false)
        }
    }

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
                if (data.success === true) {
                    // setDeleteSuccess(true)
                    swal(`${data.message}`);
                    setOpenModal(false)
                    fetchData()
                } else {
                    swal(`${data.message}`);
                }
            }).catch(err => {
                swal({
                    title: "Error!",
                    text: err.message,
                    icon: "error",
                });
            })
    }

    return (
        <div className='px-5 lg:px-14 md:px-10 bg-base-200'>
            <div className='max-w-7xl mx-auto h-screen mt-10'>

                {/* Put this part before </body> tag */}
                {openModal && <input type="checkbox" id="cancelOrder" className="modal-toggle" />}
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Confirm Cancellation</h3>
                        <p className="py-4">If you cancel now, you may not be able to avail this deal again. Do you still want to cancel?</p>
                        <div className="modal-action justify-start">
                            <button onClick={() => handelCancel(_id)} className="btn btn-sm py-2 bg-red-500 rounded-none border-none capitalize hover:bg-red-700">Cancel order</button>

                            <label htmlFor='cancelOrder' className="btn btn-sm bg-white rounded-none border-blue-500 hover:text-white capitalize hover:bg-blue-700 text-black">Don't cancel</label>
                        </div>
                    </div>
                </div>


                <div className='flex flex-col-reverse md:flex-row lg:flex-row justify-between lg:shadow-md shadow-sm p-10 bg-white'>

                    <div>
                        <h3 className='text-xl font-semibold'>Delivery Address</h3>
                        <h4 className='mt-3 text-lg font-semibold capitalize'>{firstName} {lastName}</h4>
                        <p className='text-sm mt-5 '>{city}, {address}- {postCode}, West Bengal</p>
                        <p className='text-lg font-semibold mt-5'> Phone number <span className='text-sm font-normal'>+91 {contact}</span></p>
                    </div>

                    <div className='mb-16 lg:mb-0 md:mb-0'>

                        <div className='flex flex-col md:flex-row lg:flex-row lg:space-x-10 md:space-x-10 lg:text-center lg:w-[30rem] m-auto'>
                            <div>
                                <div className="avatar">
                                    <div className="lg:w-14 md:w-14 w-[30%] mx-auto">
                                        <img src={productImg} alt='' />
                                    </div>
                                </div>
                                <div className='mt-3 text-sm'>Quantity x {order.Quantity}</div>
                            </div>
                            <div className='lg:w-60 md:w-56'>
                                <h1 className='text-sm  font-semibold'>{order?.product?.modelName}</h1>
                                <h3 className='text-sm  font-semibold'>{order?.product?.brand}</h3>
                            </div>
                            <div className='mt-2 lg:mt-0'>
                                <h3 className='text-sm md:text-lg lg:text-lg font-semibold'>₹{order.totalBill}</h3>
                            </div>
                        </div>

                        <div className='flex justify-between items-center space-x-4'>
                            <div>

                                <ul className="steps mt-5 text-xs">
                                    <li data-content={isCanceled ? "✓" : isApproved ? "✓" : "✕"} className={`step ${isCanceled ? 'step-error' : isApproved ? 'step-primary' : ''}`}>{isCanceled ? '' : 'Approved'}</li>

                                    <li data-content={isCanceled ? "✓" : isShipped ? "✓" : "✕"} className={`step ${isCanceled ? 'step-error' : isShipped ? 'step-primary' : ''}`}>{isCanceled ? '' : 'Shipped'}</li>

                                    <li data-content={isCanceled ? "✓" : outOfDelivery ? "✓" : "✕"} className={`step ${isCanceled ? 'step-error' : outOfDelivery ? 'step-primary' : ''}`}>{isCanceled ? '' : 'Out of deliver'}</li>

                                    <li data-content={isCanceled ? "✓" : outOfDelivery ? "✓" : "✕"} className={`step ${isCanceled ? 'step-error' : isCompleted ? 'step-primary' : ''}`}>{isCanceled ? '' : "Delivered"}</li>
                                </ul>

                            </div>

                            <div>
                                {isCanceled ? <div className='flex space-x-2 items-center justify-center lg:justify-start'> <div className="badge badge-xs bg-red-500 border-none"></div> <p className='text-base font-semibold'>Canceled</p></div>
                                    :
                                    isCompleted ? <div className='flex space-x-2 items-center justify-center lg:justify-start'> <div className="badge badge-xs bg-green-500 border-none rounded-full"></div> <p className='text-base font-semibold'>Delivered</p></div> : <label onClick={() => setOpenModal(true)} htmlFor={openModal ? "cancelOrder" : ""} className={`btn btn-error ${outOfDelivery ? 'btn-disabled' : ''}`}>Cancel order</label>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserOrderDetails;