import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay } from "swiper";

const Client = () => {
  return (
    <div className="my-20 mx-0">
      <h2 className="text-6xl mb-10 text-blue-400 text-center">Our Client's</h2>
      <div className="mt-5 ">
        <Swiper
          spaceBetween={30}
          
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper2"
          breakpoints={{
            640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
          }}
          
        >
          <SwiperSlide>
            <img
              className="max-w-fit h-fit"
              src="https://st.adda247.com/https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2022/11/26100149/Canara-Bank-Starts-Issuing-Electronic-Bank-Guarantee-In-Partnership-With-NeSL.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="max-w-fit h-fit"
              src="https://yt3.googleusercontent.com/-SqWW5wu-_p90A2gCAAD8NtrtHVz43jrq84P4BYHRkNrGbRBNqYwnUY2s4SKPbsuio-Elt8ONg=s900-c-k-c0x00ffffff-no-rj"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="max-w-fit h-fit"
              
              src="https://content.jdmagicbox.com/comp/birbhum/j9/9999p3462.3462.140514051850.a7j9/catalogue/paschim-banga-gramin-bank-rampurhat-birbhum-banks-287ch.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="max-w-fit h-fit"
              src="https://cdn.payrup.com/images/operators/electricity-bill-payment/wbsedcl_logo.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="max-w-fit h-fit"
              src="data:image/png;base64,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"
              alt=""
            />
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  );
};

export default Client;
