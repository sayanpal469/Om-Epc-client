import React from 'react';

const ProductRaw = ({index, product}) => {
    const productImg = `http://localhost:5000/uploads/${product.image}`;


    const handelDelete = (id) => {
        fetch(`http://localhost:5000/api/omEpc/product/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.success == true) {
                alert(data.message)
            } else {
                alert(data.message)
            }
        }).catch(err => {
            alert(err.message)
        })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
            <div class="avatar">
                    <div class="w-14 rounded-full">
                        <img src={productImg}  alt=''/>
                    </div>
                </div>
            </td>
            <td>{product.name}</td>
            <td>{product.modelNo}</td>
            <td>
                <button onClick={() => handelDelete(product._id)} className='btn btn-error'>Delete</button>
            </td>
        </tr>
    );
};

export default ProductRaw;