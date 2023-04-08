import React from 'react';
import swal from 'sweetalert';

const AdminComputerRaw = ({ index, computer }) => {
    const productImg = `https://omepcserver.up.railway.app/uploads/${computer.image}`;
    const {_id, modelName, series, brand, processor, processorBrand, processorFrequency, operatingSystem, processorModel, ram, displaySize, graphics, hardDrive, ssdCapacity, warranty, price, wrongPrice, category, color} = computer;


    const handelDelete = (id) => {
        fetch(`https://omepcserver.up.railway.app/api/omEpc/product/computer/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success === true) {
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
                    <div className="w-14">
                        <img src={productImg} alt='' />
                    </div>
                </div>
            </td>
            <td>{modelName}</td>
            <td>{series}</td>
            <td>{brand}</td>
            <td>{processor}</td>
            <td>{processorBrand}</td>
            <td>{processorFrequency}</td>
            <td>{processorModel}</td>
            <td>{operatingSystem}</td>
            <td>{ram}</td>
            <td>{displaySize}</td>
            <td>{graphics}</td>
            <td>{hardDrive}</td>
            <td>{ssdCapacity}</td>
            <td>{warranty} Year</td>
            <td>₹{price}</td>
            <td>₹{wrongPrice}</td>
            <td>{color}</td>
            <td>{category}</td>
            <td>
                <button onClick={() => handelDelete(_id)} className='btn btn-error'>Delete</button>
            </td>
        </tr>
    );
};

export default AdminComputerRaw;