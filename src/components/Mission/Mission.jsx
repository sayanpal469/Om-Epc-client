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
    <div className="mission-container  grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 px-20">
      <div className="">
        <img
          className="max-w-full lg:h-[820px]  border rounded h-auto"
          src="https://i.ibb.co/BnvPMrJ/pexels-cottonbro-studio-4705617.jpg"
          alt=""
        />
      </div>
      <div>
        <h1 className="text-3xl font-semibold text-blue-600 text-left">
          Welcome To OM EPC Solution
        </h1>
        <h2 className="text-6xl mt-5 text-black">
          OM EPC Solution - We are here to help you.
        </h2>
        <p className="text-xl text-black mt-10">
          OM EPC Solution is dedicated to providing exceptional servicing and
          support for a wide range of computer, printer, CCTV camera, and UPS
          brands. Our mission is to be the trusted and reliable source for all
          technology repair and maintenance needs, ensuring our clients receive
          prompt, efficient and cost-effective solutions that maximize their
          productivity and minimize downtime. We strive to deliver top-notch
          customer service and continuously improve our processes to meet the
          ever-evolving needs of the market.
        </p>
        <div className="swiper-div mt-5">
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
            <img src="https://i.ibb.co/dt2qphS/pexels-elias-gamez-10558599.jpg" alt="" />
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
