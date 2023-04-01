import React, { useState } from 'react'
import background from '../../Assets/bg.png';
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';

const ChangePassword = () => {
    const [changePassword, setchangePassword] = useState()
    console.log(changePassword)
    const { email } = useParams();
    const navigate = useNavigate();

    const handelChangePass = () => {
        fetch(`https://omepcserver.up.railway.app/api/omEpc/forget/${email}`, {
            method: "PUT",
            body: JSON.stringify({
                password: changePassword
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data.success === true) {
                    swal(`${data.message}`);
                    navigate('/login')
                } else {
                    swal(`${data.message}`);

                    
                }
            })
    }

    return (
        <div className='flex justify-center items-center w-full h-full border' style={{backgroundImage: `url("https://i.ibb.co/XzMdW3L/bg.png")`}}>
            <div>
                <h1 className='text-2xl text-white'>Change your password</h1>
                <input onChange={(e) => setchangePassword(e.target.value)} type="password" placeholder="Write a password" className="input input-bordered input-primary w-full max-w-xs my-5" /> <br />
                <button onClick={handelChangePass} className='btn btn-primary'>Sujhbmit</button>
            </div>
        </div>
    );
};

export default ChangePassword;