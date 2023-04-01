import React from 'react';

const AdminSurveillanceRaw = ({ index, surveillance }) => {
    const { _id, brand, color, image, modelName, modelNumber, recordResolution, price, wrongPrice, warranty } = surveillance;
    const productImg = `https://omepcserver.up.railway.app/uploads/${image}`;

    const handelDelete = (id) => {
        fetch(`https://omepcserver.up.railway.app/api/omEpc/product/surveillance/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.success == true) {
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
            <td>{index + 1}</td>
            <td>
                <div className="avatar">
                    <div className="w-14">
                        <img src={productImg} alt='' />
                    </div>
                </div>
            </td>
            <td>{brand}</td>
            <td>{modelName}</td>
            <td>{modelNumber}</td>
            <td>{recordResolution}</td>
            <td>{price}</td>
            <td>{wrongPrice}</td>
            <td>{warranty}</td>
            <td>{color}</td>
            <td>
                <button onClick={() => handelDelete(_id)} className='btn btn-error'>Delete</button>
            </td>
        </tr>
    );
};

export default AdminSurveillanceRaw;