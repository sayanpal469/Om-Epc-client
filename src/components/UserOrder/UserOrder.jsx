import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import NotFound from '../404NotFound/NotFound';
import userAuth from '../userAuth';
import UserOrderRaw from './UserOrderRaw';

const UserOrder = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [visible, setVisible] = useState(false);
    const [deleteSuccess, setDeleteSuccess] = useState(false);
    const email = userAuth?.email;
    // console.log(visible)


    useEffect(() => {
        // getUserEmail()
        fetchData()
    }, [email])

    useEffect(() => {
        if (deleteSuccess) {
            window.location.reload();
        }
    }, [deleteSuccess]);


    const fetchData = async () => {
        setLoading(true)
        try {
            let { data, status } = await axios.get(`https://omepcserver.up.railway.app/api/omEpc/buy/${email}`)
            // console.log(data.available)
            if (status === 200) {
                setVisible(true)
                setOrders(data.available)
                setLoading(false)
                // setError('')
                if (orders) {
                    setVisible(true)
                }
            } else {
                setVisible(!visible)

            }
        } catch (error) {
            setLoading(false)
        }
    }

    return (
        <div className='px-14'>
            {!visible && <NotFound/>}


            {visible && <div className="overflow-x-auto mt-10">
                <table className="table w-full text-center">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            orders?.map((order, index) => <UserOrderRaw
                                key={order._id}
                                index={index}
                                order={order}
                                setDeleteSuccess={setDeleteSuccess}
                            ></UserOrderRaw>)
                        }
                    </tbody>
                </table>
            </div>}
        </div>
    );
};

export default UserOrder;