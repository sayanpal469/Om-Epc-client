import React from 'react';

const AdminComputerRaw = ({ index, computer }) => {
    const productImg = `http://localhost:5000/uploads/${computer.image}`;
    const {_id, modelName, series, brand, processor, processorBrand, processorFrequency, operatingSystem, processorModel, ram, displaySize, graphics, hardDrive, ssdCapacity, warranty, price, wrongPrice, category, color} = computer;


    const handelDelete = (id) => {
        fetch(`http://localhost:5000/api/omEpc/product/computer/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
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