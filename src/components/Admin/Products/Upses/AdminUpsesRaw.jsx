import React from 'react';
import swal from 'sweetalert';

const AdminUpsesRaw = ({ index, ups }) => {
    const { _id, batteriesNumber, brand, color, image, inputVoltage, modelName, modelNumber, outputPlugsNumber, outputVoltage, phase, price, wrongPrice, warranty } = ups;
    const productImg = `https://omepcserver.up.railway.app/uploads/${image}`;

    const handelDelete = (id) => {
        fetch(`https://omepcserver.up.railway.app/api/omEpc/product/ups/${id}`, {
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
            <td>{index}</td>
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
            <td>{inputVoltage}</td>
            <td>{outputVoltage}</td>
            <td>{outputPlugsNumber}</td>
            <td>{batteriesNumber}</td>
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

export default AdminUpsesRaw;