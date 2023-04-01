import React from "react";
import "./Footer.css";

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
        <img
          src="https://i.ibb.co/7Xt1RPG/1674998575548.png"
          className="logo"
          alt=""
        />
        <p>
          OM EPC Solution
          <br />
          Providing reliable service since 2019
        </p>
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
        <a
          href="https://www.facebook.com/omepcsolution"
          className="link link-hover"
        >
          Facebook
        </a>
        <a
          href="https://www.instagram.com/omepcsolution/"
          className="link link-hover"
        >
          Instagram
        </a>
        <a href="https://wa.me/7981413743" className="link link-hover">
          Whatsapp
        </a>
      </div>
      <div className="border-2 w-full shadow-lg">
        <iframe
         title="Google Map of OM EPC SOLUTION location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.9482237480015!2d88.30905171446241!3d22.58103973835268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0279abba2c42fd%3A0xe66334355dad35da!2sOM%20EPC%20SOLUTION!5e0!3m2!1sen!2sin!4v1679027122265!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </footer>
  );
};

export default Footer;
