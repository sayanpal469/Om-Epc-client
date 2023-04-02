import React from 'react';
import { useReducer } from 'react';
import swal from 'sweetalert';

const ServiceRaw = ({index, service, setAlls, alls}) => {
    const {_id} = service;
    // const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    const serviceImg = `https://omepcserver.up.railway.app/uploads/${service.image}`;

    const handelDelete = (id) => {
        fetch(`https://omepcserver.up.railway.app/api/omEpc/service/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.success === true) {
                 swal(data.message);
                setAlls(alls.filter(item => item._id !== _id))
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

        // forceUpdate()
    }


    return (
        <tr>
            <th>{index + 1}</th>
            <td>
            <div className="avatar">
                    <div className="w-14 rounded-full">
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