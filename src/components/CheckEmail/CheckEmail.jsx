import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const CheckEmail = () => {
    const [forgetEmail, setForgetEmail] = useState()
    const navigate = useNavigate()
    // console.log(forgetEmail)


    const handelPass = () => {
        fetch('https://omepcserver.up.railway.app/api/omEpc/checkEmail', {
            method: "POST",
            body: JSON.stringify({
                email: forgetEmail
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data.success == true) {
                     swal(`${data.message}`);
                    navigate(`/changePass/${forgetEmail}`)
                } else {
                     swal(`${data.message}`);
                    
                }
            })
    }

    return (
        <div className='flex justify-center items-center w-full h-full border' style={{backgroundImage: `url("https://i.ibb.co/XzMdW3L/bg.png")`}}>
            <div>
                <h1 className='text-2xl text-white'>Enter your email</h1>
                <input onChange={(e) => setForgetEmail(e.target.value)} type="text" placeholder="abc@gmail.com" className="input input-bordered input-primary w-full max-w-xs my-5" /> <br />
                <button onClick={handelPass} className='btn btn-primary'>Submit</button>
            </div>
        </div>
    );
};

export default CheckEmail;