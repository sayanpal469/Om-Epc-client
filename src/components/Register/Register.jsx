import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const Register = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phError, setPhError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleEmailChange = (event) => {
    const { value } = event.target;
    const emailRegex = /^\S+@\S+\.\S+$/;
    const isEmailValid = emailRegex.test(value);
    setEmail(value);
    setIsValid(isEmailValid);
  };

  function validatePhoneNumber(phoneNumber) {
    const indianPhoneNumberRegex = /^[789]\d{9}$/;
    return indianPhoneNumberRegex.test(phoneNumber);
  };


  const handlePhoneNumberChange = (event) => {
    const inputPhoneNumber = event.target.value.replace(/\D/g, '').slice(0, 10); // remove all non-digit characters and limit to 10 digits
    setPhoneNumber(inputPhoneNumber);
  };

  const handelSubmit = (e) => {
    e.preventDefault()

    const userName = e.target.userName.value;
    const password = e.target.password.value;

    if (validatePhoneNumber(phoneNumber) && isValid) {
      fetch('http://localhost:5000/api/omEpc/signUp/new', {
        method: "POST",
        body: JSON.stringify({
          userName: userName,
          email: email,
          password: password,
          contact: phoneNumber
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          // console.log(data)
          if (data.success === true) {
            // console.log(data)
            localStorage.setItem('user', JSON.stringify(data.userData))
            if (data.userData.role === "user" || data.userData.role === "admin") {
              navigate('/', { state: { isLoggedIn: true } })
            }
            // navigate('/')
          } else {
            swal(`${data.message}`);
          }
        })
    } else {
      if (!isValid) {
        setEmailError('Please enter a valid email address.');
      } else {
        setPhError('Please enter a valid Indian phone number');
      }
    }
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
                Full Name
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
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="abc@gmail.com"
                className="w-full border border-gray-400 bg-transparent font-semibold text-white p-2 rounded-lg" required />
              {!isValid && (
                <p className='text-red-500'>{emailError}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-white font-medium mb-2"
                htmlFor="email"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                pattern="[0-9]{10}" // enforce 10-digit pattern
                required
                className="w-full border border-gray-400 bg-transparent font-semibold text-white p-2 rounded-lg" />
              {phError && <div className='text-red-500'>{phError}</div>}
            </div>
            <div className="mb-4">
              <label
                className="block text-white font-medium mb-2"
                htmlFor="email"
              >
                password
              </label>
              <input type="password" name='password' className="w-full border border-gray-400 bg-transparent font-semibold text-white p-2 rounded-lg" required />
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