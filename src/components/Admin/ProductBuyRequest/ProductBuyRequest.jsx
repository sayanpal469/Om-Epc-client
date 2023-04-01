import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import ProductBuyRequestRaw from './ProductBuyRequestRaw';

const ProductBuyRequest = () => {
    const [orders, setOrders] = useState([]);
    const reversedData = [...orders].reverse();


    useEffect(() => {
        fetchData()
    }, [orders])

    const fetchData = async () => {
        // setLoading(true)
        try {
            let { data, status } = await axios.get(`https://omepcserver.up.railway.app/api/omEpc/buy`)
            // console.log(data.data)
            if (status == 200) {
                // setVisible(true)
                setOrders(data.data)
                // setLoading(false)
                // setError('')
                if (orders) {
                    // setVisible(true)
                }
            } else {
                // setVisible(!visible)

            }
        } catch (error) {
            // setLoading(false)
        }
    }

    return (
        <div>
            <div className="overflow-x-auto mt-5">
                <table className="table w-full text-center">
                    <thead>
                        <tr>
                            {/* <th>No</th> */}
                            <th>Product</th>
                            <th>Brand</th>
                            <th>Model Number</th>
                            <th>Customer Name</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>Pin Code</th>
                            <th>Total Bill</th>
                            <th>Order Time</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reversedData.map((order, index) => <ProductBuyRequestRaw
                                key={order._id}
                                index={index}
                                order={order}
                            ></ProductBuyRequestRaw>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductBuyRequest;