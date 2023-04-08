import React from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const UserOrderCart = ({ index, order, setDeleteSuccess }) => {
    const productImg = `https://omepcserver.up.railway.app/uploads/${order.product.image}`;
    // console.log(order)

    const { brand, modelName } = order.product;


    return (
        <Link to={`/myOrderDetails/${order?._id}`} className='flex flex-col md:flex-row lg:flex-row justify-between lg:shadow-md shadow-sm p-10 bg-white'>
            <div className='flex flex-col md:flex-row lg:flex-row lg:space-x-10 text-center md:text-left lg:text-left md:space-x-10'>
                <div>
                    <div className="avatar">
                        <div className="lg:w-14 md:w-14 w-[50%] mx-auto">
                            <img src={productImg} alt='' />
                        </div>
                    </div>
                    <div className='mt-3 text-sm'>Quantity x {order.Quantity}</div>
                </div>
                <div className='lg:w-60 md:w-56'>
                    <h1 className='text-sm md:text-lg lg:text-lg font-semibold'>{modelName}</h1>
                    <h3 className='text-sm md:text-lg lg:text-lg font-semibold'>{brand}</h3>
                </div>
            </div>
            <div className='text-center lg:text-left mt-2 lg:mt-0'>
                <h3 className='text-sm md:text-lg lg:text-lg font-semibold'>₹{order.totalBill}</h3>
            </div>

            <div className='mt-2 lg:mt-0'>
                {order.isCanceled ? <div className='flex space-x-2 items-center justify-center lg:justify-start'> <div className="badge badge-xs bg-red-500 border-none"></div> <p className='text-base font-semibold'>Canceled</p></div> :
                

                    order.isCompleted ? <div className='flex space-x-2 items-center justify-center lg:justify-start'> <div className="badge badge-xs bg-green-500 border-none rounded-full"></div> <p className='text-base font-semibold'>Delivered</p></div>
                        :
                        <div>
                            {order.isShipped ? <div className='flex space-x-2 items-center justify-center lg:justify-start'> <div className="badge badge-xs bg-green-500 border-none rounded-full"></div> <p className='text-base font-semibold'>
                                {order.outOfDelivery ? "Out of delivery" : 'Shipped'}
                                </p></div>
                                : 

                                <div className='flex space-x-1 items-center justify-center lg:justify-start'> <div className="badge badge-xs bg-blue-500 border-none"></div> <p className='text-base font-semibold'>Approved</p></div>
                            }
                        </div>}
            </div>
        </Link>
    );
};

export default UserOrderCart;