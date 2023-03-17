import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import NotFound from '../404NotFound/NotFound';
import userAuth from '../userAuth';
import UserOrderCart from './UserOrderCart';

const UserOrder = () => {
    const [orders, setOrders] = useState([]);
    const reversedData = [...orders].reverse();
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
            let { data, status } = await axios.get(`https://omepcserver.up.railway.app/api/omEpc/buy/order/${email}`)
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
        <div className='px-5 lg:px-14 md:px-10 bg-base-200'>
            {!visible && <NotFound />}

            {visible && <div className='max-w-6xl mx-auto space-y-5 my-5'>
                {
                    reversedData.map((order, index) => <UserOrderCart
                        key={order._id}
                        index={index}
                        order={order}
                        setDeleteSuccess={setDeleteSuccess}
                    />)
                }
            </div>}
        </div>
    );
};

export default UserOrder;