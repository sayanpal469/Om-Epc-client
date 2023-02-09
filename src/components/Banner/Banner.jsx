import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Banner.css";

// import required modules
import { Pagination, Autoplay } from "swiper";

import Flip from 'react-reveal/Flip';

const Banner = () => {
  return (<div className="mt-0 banner">
    <Swiper
      direction={"vertical"}
      loop={false}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      mousewheel={true}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className='slide-1 text-left bg-none'>
          <div className="banner-content px-10">
            <Flip right>
              <h1 className='lg:text-2xl text-lg text-black'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, nulla. Voluptate voluptatibus eius qui maiores aperiam consequatur aliquid? Omnis, suscipit.</h1>
            </Flip>
            <div class="container mt-5">
              <div class="button-container">
                <span class="mask">Buy Now</span>
                <button className='' type="button" name="Hover">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='slide-2 text-left bg-none'>
          <div className="banner-content px-10">
            <h1 className='lg:text-2xl text-lg text-black'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, nulla. Voluptate voluptatibus eius qui maiores aperiam consequatur aliquid? Omnis, suscipit.</h1>
            <div class="container mt-5">
              <div class="button-container">
                <span class="mask">Buy Now</span>
                <button type="button" name="Hover">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='slide-3 text-left bg-none'>
          <div className="banner-content px-10">
            <h1 className='lg:text-2xl text-lg text-black'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, nulla. Voluptate voluptatibus eius qui maiores aperiam consequatur aliquid? Omnis, suscipit.</h1>
            <div class="container mt-5">
              <div class="button-container">
                <span class="mask">Buy Now</span>
                <button type="button" name="Hover">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='slide-4 text-left bg-none'>
          <div className="banner-content px-10">
            <h1 className='lg:text-2xl text-lg text-black'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, nulla. Voluptate voluptatibus eius qui maiores aperiam consequatur aliquid? Omnis, suscipit.</h1>
            <div class="container mt-5">
              <div class="button-container">
                <span class="mask">Buy Now</span>
                <button type="button" name="Hover">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='slide-5 text-left bg-none'>
          <div className="banner-content px-10">
            <h1 className='lg:text-2xl text-lg text-black'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, nulla. Voluptate voluptatibus eius qui maiores aperiam consequatur aliquid? Omnis, suscipit.</h1>
            <div class="container mt-5">
              <div class="button-container">
                <span class="mask">Buy Now</span>
                <button type="button" name="Hover">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='slide-6 text-left bg-none'>
          <div className="banner-content px-10">
            <h1 className='lg:text-2xl text-lg text-black'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, nulla. Voluptate voluptatibus eius qui maiores aperiam consequatur aliquid? Omnis, suscipit.</h1>
            <div class="container mt-5">
              <div class="button-container">
                <span class="mask">Buy Now</span>
                <button type="button" name="Hover">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    <div class="ocean">
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
    </div>
  </div>
  );
};

export default Banner;