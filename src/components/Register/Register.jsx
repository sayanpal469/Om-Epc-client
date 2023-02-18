import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import userAuth from '../userAuth';

const Register = () => {

    const navigate = useNavigate()
 
 
    if(userAuth) {
        navigate('/')
    }

    const handelSubmit = (e) => {
        e.preventDefault()

        const userName = e.target.userName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const contact = e.target.contact.value;

        fetch('http://localhost:5000/api/omEpc/signUp/new', {
            method: "POST",
            body: JSON.stringify({
                userName: userName,
                email: email,
                password: password,
                contact: contact,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.success == true) {
                    console.log(data)
                    localStorage.setItem('user', JSON.stringify(data.userData))
                    // navigate('/')
                } else {
                    alert(`${data.message}`)
                }
            })
    }


    return (
        <div className='flex justify-center items-center h-screen '>
            <div>
                <h1 className='text-3xl'>Register</h1>
                <form action="" onSubmit={handelSubmit} enctype="multipart/form-data">
                    <input type="text" name='userName' placeholder="user name" className="input input-bordered input-primary w-full max-w-xs mt-5" /> <br />
                    <input type="email" name='email' placeholder="email" className="input input-bordered input-primary w-full max-w-xs mt-5" /> <br />
                    <input type="password" name='password' placeholder="password" className="input input-bordered input-primary w-full max-w-xs mt-5" /> <br />
                    <input type="number" name='contact' placeholder="phone number" className="input input-bordered input-primary w-full max-w-xs mt-5" /> <br />
                    <input type="submit" className="mt-5 btn" value='Submit' /> <br />
                </form>
            </div>
        </div>
    );
};

export default Register;