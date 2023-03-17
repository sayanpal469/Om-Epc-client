import React from 'react';
import swal from 'sweetalert';

const AdminRefurbishedRaw = ({ index, product }) => {
    const { _id, brand, type, image, modelName, price, wrongPrice, warranty } = product;
    const productImg = `https://omepcserver.up.railway.app/uploads/${image}`;
    // console.log(product)

    const handelDelete = (id) => {
        fetch(`https://omepcserver.up.railway.app/api/omEpc/product/refurbished/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.success == true) {
                    swal(data.message)
                } else {
                    swal(data.message)
                }
            }).catch(err => {
                swal(err.message)
            })
    }

    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <div className="avatar">
                    <div className="w-14">
                        <img src={productImg} alt='' />
                    </div>
                </div>
            </td>
            <td>{type}</td>
            <td>{brand}</td>
            <td>{modelName}</td>
            <td>₹{price}</td>
            <td>₹{wrongPrice}</td>
            <td>
                <button onClick={() => handelDelete(_id)} className='btn btn-error'>Delete</button>
            </td>
        </tr>
    );
};

export default AdminRefurbishedRaw;