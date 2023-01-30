import axios from 'axios';
import React from 'react';
import "./Quote.css"

const Quote = () => {

  const URL = 'http://localhost:5000/api/omEpc/getRequest/new'

  const handelSubmit = async (e) => {
    e.preventDefault();
    const user = e.target.name.value;
    const email = e.target.email.value;
    const contact = e.target.contact.value;
    const message = e.target.message.value;

    console.log(user, email, contact, message)

    try {
      const resp = await axios.post(URL, {
        user: user,
        email: email,
        contact: contact,
        message: message
      });
      console.log(resp.data)
    } catch (err) {
      console.log(err.message);
    }
    e.target.reset()
  }

  return (
    <div className='callback-container mx-20'>
      <div class="background">
        <div class="container-form">
          <div class="screen">
            <div class="screen-header">
              <div class="screen-header-left">
                <div class="screen-header-button close"></div>
                <div class="screen-header-button maximize"></div>
                <div class="screen-header-button minimize"></div>
              </div>
              <div class="screen-header-right">
                <div class="screen-header-ellipsis"></div>
                <div class="screen-header-ellipsis"></div>
                <div class="screen-header-ellipsis"></div>
              </div>
            </div>
            <div class="screen-body">
              <div class="screen-body-item left">
                <div class="app-title">
                  <span>Request A</span>
                  <span>Callback</span>
                </div>
                <div class="app-contact">CONTACT INFO : 917981413743</div>
              </div>
              <div class="screen-body-item">
                <form onSubmit={handelSubmit} class="app-form">
                  <div class="app-form-group">
                    <input type='text' name='name' class="app-form-control" placeholder="NAME" />
                  </div>
                  <div class="app-form-group">
                    <input type='email' name='email' class="app-form-control" placeholder="EMAIL" />
                  </div>
                  <div class="app-form-group">
                    <input type='number' name='contact' class="app-form-control" placeholder="CONTACT NO" />
                  </div>
                  <div class="app-form-group message">
                    <textarea type='text' name='message' class="app-form-control" placeholder="MESSAGE" />
                  </div>
                  <div class="app-form-group buttons">
                    <button class="app-form-button mr-10">CANCEL</button>
                    <button class="app-form-button" type='submit'>SEND</button>
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