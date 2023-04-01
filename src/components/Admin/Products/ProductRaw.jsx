import React from 'react';
import swal from 'sweetalert';

const ProductRaw = ({index, product}) => {
    const productImg = `https://omepcserver.up.railway.app/uploads/${product.image}`;


    const handelDelete = (id) => {
        fetch(`https://omepcserver.up.railway.app/api/omEpc/product/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.success === true) {
                swal(data.message);
            } else {
                swal(data.message);
            }
        }).catch(err => {
            swal({
                title: "Error",
                text: err.message,
                icon: "Error",
                button: "Aww!",
              });
        })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
            <div className="avatar">
                    <div className="w-14 rounded-full">
                        <img src={productImg}  alt=''/>
                    </div>
                </div>
            </td>
            <td>{product.name}</td>
            <td>{product.model}</td>
            <td>{product.brand}</td>
            <td>
                <button onClick={() => handelDelete(product._id)} className='btn btn-error'>Delete</button>
            </td>
        </tr>
    );
};

export default ProductRaw;