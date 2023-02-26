import React from 'react';
import { useReducer } from 'react';

const ServiceRaw = ({index, service, setAlls, alls}) => {
    const {_id} = service;
    // const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    const serviceImg = `http://localhost:5000/uploads/${service.image}`;

    const handelDelete = (id) => {
        fetch(`http://localhost:5000/api/omEpc/service/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.success == true) {
                alert(data.message)
                setAlls(alls.filter(item => item._id !== _id))
            } else {
                alert(data.message)
            }
        }).catch(err => {
            alert(err.message)
        })

        // forceUpdate()
    }


    return (
        <tr>
            <th>{index + 1}</th>
            <td>
            <div class="avatar">
                    <div class="w-14 rounded-full">
                        <img src={serviceImg}  alt=''/>
                    </div>
                </div>
            </td>
            <td className='capitalize'>{service.category}</td>
            <td>
                <button onClick={() => handelDelete(service._id)} className='btn btn-error'>Delete</button>
            </td>
        </tr>
    );
};

export default ServiceRaw;