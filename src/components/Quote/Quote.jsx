import axios from 'axios';
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import userAuth from '../userAuth';
import "./Quote.css"

const Quote = () => {
  const navigate = useNavigate()
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  function validatePhoneNumber(phoneNumber) {
    const indianPhoneNumberRegex = /^[789]\d{9}$/;
    return indianPhoneNumberRegex.test(phoneNumber);
  };


  const handlePhoneNumberChange = (event) => {
    const inputPhoneNumber = event.target.value.replace(/\D/g, '').slice(0, 10); // remove all non-digit characters and limit to 10 digits
    setPhoneNumber(inputPhoneNumber);
  };

  const URL = 'http://localhost:5000/api/omEpc/getRequest/new'

  const handelSubmit = async (e) => {
    e.preventDefault();
    const user = e.target.name.value;
    const email = e.target.email.value;
    const userContact = phoneNumber;
    const message = e.target.message.value;

    // console.log(user, email, contact, message)

    try {
      if (userAuth) {
        if (validatePhoneNumber(phoneNumber)) {
          const res = await axios.post(URL, {
            user: user,
            email: email,
            contact: userContact,
            message: message
          })
          const {status} = res;
          console.log(res)
          if(status == 201) {
            swal('Your request submitted')
            e.target.reset()
          } 
        } else {
          // Phone number is not valid, show an error message
          setErrorMessage('Please enter a valid Indian phone number');
        }
        // console.log(resp.data)
      } else {
        swal("Please Login");
        navigate('/login')
      }
    } catch (err) {
      swal(err.message);
    }
    e.target.reset()
  }

  return (
    <div className='callback-container mx-20'>
      <div className="background">
        <div className="container-form">
          <div className="screen">
            <div className="screen-header">
              <div className="screen-header-left">
                <div className="screen-header-button close"></div>
                <div className="screen-header-button maximize"></div>
                <div className="screen-header-button minimize"></div>
              </div>
              <div className="screen-header-right">
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
              </div>
            </div>
            <div className="screen-body">
              <div className="screen-body-item left">
                <div className="app-title">
                  <span className="request">Request </span>
                  <span className="callback">Callback</span>
                </div>
                <div className="app-contact">CONTACT INFO : 917981413743</div>
              </div>
              <div className="screen-body-item right-box">
                <form onSubmit={handelSubmit} className="app-form">
                  <div className="app-form-group">
                    <input type='text' name='name' className="app-form-control" placeholder="NAME" />
                  </div>
                  <div className="app-form-group">
                    <input type='email' name='email' className="app-form-control" placeholder="EMAIL" />
                  </div>
                  <div className="app-form-group">
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                      pattern="[0-9]{10}" // enforce 10-digit pattern
                      required
                      className="app-form-control"
                      placeholder="CONTACT NO" />
                    {errorMessage && <div className='text-red-500'>{errorMessage}</div>}
                  </div>
                  <div className="app-form-group message">
                    <textarea type='text' name='message' className="app-form-control" placeholder="MESSAGE" />
                  </div>
                  <div className="app-form-group buttons">
                    <button className="app-form-button mr-10">CANCEL</button>
                    <button className="app-form-button" type='submit'>SEND</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Quote;