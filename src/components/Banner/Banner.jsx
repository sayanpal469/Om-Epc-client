import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Banner.css";

// import required modules
import { Pagination, Autoplay } from "swiper";

import Flip from "react-reveal/Flip";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-0 banner">
      <Swiper
        direction={"vertical"}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        mousewheel={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide-1 text-left bg-none">
            <div className="banner-content px-10">
              <Flip right>
                <h1 className="lg:text-lg text-sm text-black">
                  Keep your data safe and secure with our cutting-edge UPS
                  technology. <br /> Choose us for unbeatable performance and
                  peace of mind when it comes to your power needs.
                </h1>
              </Flip>
              <div className="container mt-5">
                <div className="button-container">
                  <span className="mask">Buy Now</span>
                  <button className="" type="button" onClick={()=>{navigate("/ups")}} name="Hover">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-2 text-left bg-none">
            <div className="banner-content px-10">
              <h1 className="lg:text-2xl text-sm text-black">
                Choose from our range of devices to find the perfect fit for
                your needs. <br /> Trust us to deliver reliable performance and
                long-lasting battery life.
              </h1>
              <div className="container mt-5">
                <div className="button-container">
                  <span className="mask">Buy Now</span>
                  <button type="button" onClick={()=>{navigate("/computer")}} name="Hover">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-3 text-left bg-none">
            <div className="banner-content px-10">
              <h1 className="lg:text-2xl text-sm text-black">
                Protect your home or business with our high-quality surveillance
                products. <br /> Get 24/7 protection with our dependable
                surveillance solutions.
              </h1>
              <div className="container mt-5">
                <div className="button-container">
                  <span className="mask">Buy Now</span>
                  <button type="button" onClick={()=>{navigate("/surveillance")}} name="Hover">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-4 text-left bg-none">
            <div className="banner-content px-10">
              <h1 className="lg:text-2xl text-sm text-black">
                Take your workspace to the next level with these top-rated
                accessories! <br></br> Get connected and stay organized with
                these handy tech tools!
              </h1>
              <div className="container mt-5">
                <div className="button-container">
                  <span className="mask">Buy Now</span>
                  <button type="button" onClick={()=>{navigate("/accesories")}} name="Hover">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-5 text-left bg-none">
            <div className="banner-content px-10">
              <h1 className="lg:text-2xl text-sm text-black">
                Choose from a wide range of printers to suit your every need.
                <br></br> Take your printing to the next level with our advanced
                printer features.
              </h1>
              <div className="container mt-5">
                <div className="button-container">
                  <span className="mask">Buy Now</span>
                  <button type="button" onClick={()=>{navigate("/printer")}} name="Hover">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-6 text-left bg-none">
            <div className="banner-content px-10">
              <h1 className="lg:text-2xl text-sm text-black">
                Invest in Exide's big batteries for long-term cost savings and
                convenience.
                <br /> Stay charged and connected with Exide's reliable big
                battery solutions.
              </h1>
              <div className="container mt-5">
                <div className="button-container">
                  <span className="mask">Buy Now</span>
                  <button type="button" onClick={()=>{navigate("/ups")}} name="Hover">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </div>
  );
};

export default Banner;
