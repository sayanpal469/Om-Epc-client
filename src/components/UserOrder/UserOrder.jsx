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
    const [userEmail, setUserEmail] = useState('');
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


    // async function getDataUserLocalStorage(key) {
    //     return new Promise((resolve, reject) => {
    //         try {
    //             const data = localStorage.getItem(key);
    //             resolve(JSON.parse(data));
    //         } catch (error) {
    //             reject(error);
    //         }
    //     });
    // }

    // async function getUserEmail() {
    //     try {
    //         const data = await getDataUserLocalStorage('user');
    //         if (data) {
    //             setUserEmail(data?.email);
    //             // console.log(data.email)
    //         }
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    const fetchData = async () => {
        setLoading(true)
        try {
            let { data, status } = await axios.get(`http://localhost:5000/api/omEpc/buy/${email}`)
            // console.log(data.available)
            if (status == 200) {
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