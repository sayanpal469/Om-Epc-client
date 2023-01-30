import React from 'react';
import "./Quote.css"

const Quote = () => {
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
          <div class="app-form">
            <div class="app-form-group">
              <input class="app-form-control" placeholder="NAME"  />
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="EMAIL" />
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="CONTACT NO" />
            </div>
            <div class="app-form-group message">
              <input class="app-form-control" placeholder="MESSAGE" />
            </div>
            <div class="app-form-group buttons">
              <button class="app-form-button mr-10">CANCEL</button>
              <button class="app-form-button">SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
    );
};

export default Quote;