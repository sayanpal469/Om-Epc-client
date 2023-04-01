import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const Register = () => {

    const navigate = useNavigate()
 
    const handelSubmit = (e) => {
        e.preventDefault()

        const userName = e.target.userName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const contact = e.target.contact.value;

        fetch('https://omepcserver.up.railway.app/api/omEpc/signUp/new', {
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
                if (data.success === true) {
                    console.log(data)
                    localStorage.setItem('user', JSON.stringify(data.userData))
                    if(data.userData.role === "user" || data.userData.role === "admin"){
                        navigate('/', { state:{isLoggedIn : true} })
                    }
                    // navigate('/')
                } else {
                  swal(`${data.message}`);
                }
            })
    }


    return (
        <div className='login-container '>
            <div className="flex items-center justify-center h-[100%]">
            <div className="w-full lg:w-[550px]">
                <form onSubmit={handelSubmit} className=" form-container  rounded-lg p-8">
            <div className="mb-4">
              <label
                className="block text-white font-medium mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input type="text" name='userName' placeholder="John Dexter" className="w-full border border-gray-400 bg-transparent font-semibold text-white p-2 rounded-lg" required /> 
            </div>
            <div className="mb-4">
              <label
                className="block text-white font-medium mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input type="text" name='email' placeholder="abc@gmail.com" className="w-full border border-gray-400 bg-transparent font-semibold text-white p-2 rounded-lg" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"  required /> 
            </div>
            <div className="mb-4">
              <label
                className="block text-white font-medium mb-2"
                htmlFor="email"
              >
                Phone Number
              </label>
              <input type="number" name='contact'  className="w-full border border-gray-400 bg-transparent font-semibold text-white p-2 rounded-lg"  required /> 
            </div>
            <div className="mb-4">
              <label
                className="block text-white font-medium mb-2"
                htmlFor="email"
              >
                password
              </label>
              <input type="text" name='password'  className="w-full border border-gray-400 bg-transparent font-semibold text-white p-2 rounded-lg"  required /> 
            </div>
            {/* <div className="mb-4">
              <label
                className="block text-white font-medium mb-2"
                htmlFor="email"
              >
                Confirm Password
              </label>
              <input type="text" name='userName'  className="w-full border border-gray-400 bg-transparent font-semibold text-white p-2 rounded-lg"  required /> 
            </div> */}
            <div className="flex items-center justify-between">
              <button
                type="submit"
                value='Submit'
                className="bg-transparent border hover:bg-sky-600 text-white font-medium py-2 px-4 rounded-lg"
              >
                Register
              </button>
              <Link
                to="/login"
                className="bg-transparent  hover:text-sky-600 text-white font-medium"
              >
               Already Registered?
              </Link>
            </div>
          </form>
          </div>
            </div>
        </div>
    );
};

export default Register;