import React from 'react';
import './style.css'
import { AiOutlineWhatsApp, AiOutlineInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';

const ComingSoon = () => {
    return (
        <div id='comingSoon'>
            <div className="wrapper bg-black text-center capitalize">
                <h1>Coming Soon<span className="dot">.</span></h1>
                <h2 className='mt-2'>This website is under construction.</h2>
                <p className='para'>Put some text here.</p>
                <div className="icons flex justify-center items-center space-x-5">
                    <a href="https://wa.me/7981413743" target='_blank'><AiOutlineWhatsApp className='text-black bg-white hover:bg-black hover:text-white hover:border-white hover:btn-lg p-3 btn btn-circle'/></a>
                    <a href="https://www.facebook.com/omepcsolution" target="_blank"><BsFacebook className='text-black bg-white hover:bg-black hover:text-white hover:border-white hover:btn-lg p-3 btn btn-circle'/></a>
                    <a href="https://www.instagram.com/omepcsolution/" target="_blank"><AiOutlineInstagram className='text-black bg-white hover:bg-black hover:text-white hover:border-white hover:btn-lg p-3 btn btn-circle'/></a>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;