import React from 'react';
import swal from 'sweetalert';

const AdminPrinterRaw = ({ index, printer }) => {
    const { _id, color, brand, image, modelName, refilType, type, warranty, price, wrongPrice, printingMethod
    } = printer;
    const productImg = `https://omepcserver.up.railway.app/uploads/${image}`;

    const handelDelete = (id) => {
        fetch(`https://omepcserver.up.railway.app/api/omEpc/product/printer/${id}`, {
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
    };

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
            <td>{printingMethod}</td>
            <td>{refilType}</td>
            <td>{type}</td>
            <td>{price}</td>
            <td>{wrongPrice}</td>
            <td>{warranty}</td>
            <td>{color}</td>
            <td>{warranty}</td>
            <td>
                <button onClick={() => handelDelete(_id)} className='btn btn-error'>Delete</button>
            </td>
        </tr>
    );
};

export default AdminPrinterRaw;