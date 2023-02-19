import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckEmail = () => {
    const [forgetEmail, setForgetEmail] = useState()
    const navigate = useNavigate()
    // console.log(forgetEmail)


    const handelPass = () => {
        fetch('http://localhost:5000/api/omEpc/checkEmail', {
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
                    alert(`${data.message}`)
                    navigate(`/changePass/${forgetEmail}`)
                } else {
                    alert(`${data.message}`)
                    
                }
            })
    }

    return (
        <div className='flex justify-center mt-20'>
            <div>
                <h1 className='text-2xl'>Enter your email</h1>
                <input onChange={(e) => setForgetEmail(e.target.value)} type="text" placeholder="abc@gmail.com" className="input input-bordered input-primary w-full max-w-xs my-5" /> <br />
                <button onClick={handelPass} className='btn'>Submit</button>
            </div>
        </div>
    );
};

export default CheckEmail;