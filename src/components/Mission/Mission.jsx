import React from "react";
import "./Mission.css";
import { AiFillCheckCircle } from 'react-icons/ai';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay } from "swiper";
const Mission = () => {
  return (
    <div className="mission-container items-center gap-5 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:px-20 md:px-10">
      <div className="">
        <img
          className="w-80 md:w-4/5 lg:w-4/5  border rounded"
          src="https://i.ibb.co/BnvPMrJ/pexels-cottonbro-studio-4705617.jpg"
          alt=""
        />
      </div>
      <div className="">
        <h1 className="lg:text-3xl sm:text-xl font-semibold heading text-blue-600">
          Welcome To OM EPC Solution
        </h1>
        <h2 className="lg:text-5xl md:text-3xl heading2 sm:text-2xl mt-2 text-black">
          OM EPC Solution - We are here to help you.
        </h2>
        <p className="lg:text-lg sm:text-sm text-justify text-black mt-6">
          OM EPC Solution is dedicated to providing exceptional servicing and
          support for a wide range of computer, printer, CCTV camera, and UPS
          brands. Our mission is to be the trusted and reliable source for all
          technology repair and maintenance needs, ensuring our clients receive
          prompt, efficient and cost-effective solutions that maximize their
          productivity and minimize downtime. We strive to deliver top-notch
          customer service and continuously improve our processes to meet the
          ever-evolving needs of the market.
        </p>
        <div className="swiper-div mt-5 ">
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[Autoplay]}
        className="mySwiper2"
      >
        <SwiperSlide>
            <img className="max-w-full h-auto" src="https://i.ibb.co/dt2qphS/pexels-elias-gamez-10558599.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://i.ibb.co/YdK35WJ/pexels-rfstudio-3825581.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://i.ibb.co/4m3jMR3/pexels-mikhail-nilov-9242893.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://i.ibb.co/pvDGBpD/security-camera-without-subscription-azv-Co-J.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://i.ibb.co/x7KVRGh/download.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://i.ibb.co/99VYK3B/printer-image.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
        </div>
      </div>
    </div>
  )
};

export default Mission;
