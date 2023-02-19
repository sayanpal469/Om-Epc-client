import React from 'react';
import "./Footer.css"

const Footer = () => {
  return (
    // <div id='parentFooter'>
    //   <div className='lg:max-w-7xl w-full bg-orange-500 mx-auto subscribeBox'>
    //     <div className='flex justify-between px-10 py-8 items-center gap-5 '>
    //       <h1 className='text-sm lg:text-3xl text-white font-semibold'>Subscribe to Our OM EPC</h1>
    //       {/* <input className='lg:w-[35rem] py-3 border-0' type="text" /> */}
    //       <input type="text" placeholder="Enter your email@" className="input input-bordered lg:input-lg w-full lg:max-w-xl" />
    //       <button className='btn'>Subscribe now</button>
    //     </div>
    //   </div>
      
    // </div>

    <footer className="footer bg-sky-700 p-10 py-28">
        <div>
          <img src="https://i.ibb.co/7Xt1RPG/1674998575548.png" className='logo' alt="" />
          <p>OM EPC Solution<br />Providing reliable service since 2019</p>
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
          <a href="https://www.facebook.com/omepcsolution" className="link link-hover">Facebook</a>
          <a src="https://www.instagram.com/omepcsolution/" className="link link-hover">Instagram</a>
          <a href="https://wa.me/7981413743" className="link link-hover">Whatsapp</a>
        </div>
      </footer>
  );
};

export default Footer;