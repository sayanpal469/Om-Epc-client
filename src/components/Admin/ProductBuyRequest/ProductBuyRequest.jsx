import React, { useState } from 'react';
import { useEffect } from 'react';
import ProductBuyRequestRaw from './ProductBuyRequestRaw';

const ProductBuyRequest = () => {
    const [buyRequest, setBuyRequest] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/omEpc/buy')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.success == true) {
                    setBuyRequest(data.allBuyRequest)
                } else {
                    alert(`Error : ${data.message}`)
                }
            })
    }, [buyRequest])

    return (
        <div>
            <div class="overflow-x-auto mt-5">
                <table class="table w-full text-center">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Product Name</th>
                            <th>Model</th>
                            <th>Customer Name</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Quantity</th>
                            <th>Responce</th>
                            <th>Order Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyRequest.map((request, index) => <ProductBuyRequestRaw
                                key={request._id}
                                index={index}
                                request={request}
                            ></ProductBuyRequestRaw>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductBuyRequest;