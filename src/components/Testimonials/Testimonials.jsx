import React from 'react';
import './Testimonials.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";

const Testimonials = () => {
    return (
        <div className='review-container'>
            <div className='left-review'>

            </div>

            <div className='right'>
                <Swiper
                 autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                 pagination={true} modules={[Pagination, Autoplay]} className="mySwiper review-card shadow-2xl">
                    <SwiperSlide className='lg:gap-10 md:gap-10'>
                        <div className="avatar man w-50">
                            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://i.postimg.cc/jSJsJF4H/pexels-photo-2379004.jpg" />
                            </div>
                        </div>
                        <div className='w-1/2'>
                            <h1 className='lg:text-left md:text-left lg:text-3xl font-bold capitalize text-orange-500 my-2'>Dr. GOGO</h1>
                            <h3 className='capitalize text-xs md:text-sm lg:text-sm lg:text-left md:text-left font-extralight text-justify '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus at eveniet voluptatem dicta totam nisi aperiam possimus impedit animi porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dignissimos maxime dicta optio asperiores accusamus fugiat dolore error non perferendis dolorum !</h3>
                            <h4 className='text-end designation font-mono'>~Jack</h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='lg:gap-10 md:gap-10'>
                        <div className="avatar man w-50">
                            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://i.postimg.cc/jSJsJF4H/pexels-photo-2379004.jpg" />
                            </div>
                        </div>
                        <div className='w-1/2'>
                            <h1 className='lg:text-left md:text-left lg:text-3xl font-bold capitalize text-orange-500 my-2'>Dr. John</h1>
                            <h3 className='capitalize text-xs md:text-sm lg:text-sm lg:text-left md:text-left font-extralight text-justify '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus at eveniet voluptatem dicta totam nisi aperiam possimus impedit animi porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dignissimos maxime dicta optio asperiores accusamus fugiat dolore error non perferendis dolorum !</h3>
                            <h4 className='text-end designation font-mono'>~Jack</h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='lg:gap-10 md:gap-10'>
                        <div className="avatar man w-50">
                            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://i.postimg.cc/jSJsJF4H/pexels-photo-2379004.jpg" />
                            </div>
                        </div>
                        <div className='w-1/2'>
                            <h1 className='lg:text-left md:text-left lg:text-3xl font-bold capitalize text-orange-500 my-2'>John Milton</h1>
                            <h3 className='capitalize text-xs md:text-sm lg:text-sm lg:text-left md:text-left font-extralight text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus at eveniet voluptatem dicta totam nisi aperiam possimus impedit animi porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dignissimos maxime dicta optio asperiores accusamus fugiat dolore error non perferendis dolorum !</h3>
                            <h4 className='text-end designation font-mono'>~Jack</h4>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;