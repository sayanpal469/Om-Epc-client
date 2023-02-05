import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer bg-sky-700 p-10">
        <div>
         <img src="https://i.ibb.co/7Xt1RPG/1674998575548.png" className='logo' alt="" />
          <p>OM EPC Solution<br/>Providing reliable service since 2019</p>
        </div> 
        <div>
    <span className="footer-title">Products</span> 
    <a className="link link-hover">UPS & Backup</a> 
    <a className="link link-hover">Survillence</a> 
    <a className="link link-hover">Printer</a> 
    <a className="link link-hover">Computer</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Services</a> 
    <a className="link link-hover">Career</a>
  </div> 
  <div>
    <span className="footer-title">Social Links</span> 
    <a className="link link-hover">Facebook</a> 
    <a className="link link-hover">Instagram</a> 
    <a className="link link-hover">Linkedin</a>
  </div> 
      </footer>
    );
};

export default Footer;