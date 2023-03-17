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
                                <img src="https://images.unsplash.com/flagged/photo-1571367034861-e6729ad9c2d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" />
                            </div>
                        </div>
                        <div className='w-1/2'>
                            <h1 className='lg:text-left md:text-left lg:text-3xl font-bold capitalize text-orange-500 my-2'>Sidhhes Kumar</h1>
                            <h3 className='capitalize text-xs md:text-sm lg:text-sm lg:text-left md:text-left font-extralight text-justify '>I recently took my printers to OM EPC Solution for servicing, and I am thoroughly impressed with the quality of service I received. From the moment I walked in, the staff was welcoming and professional, and they took the time to listen to my concerns and assess the condition of my printers.</h3>
                            <h4 className='text-end designation font-mono'>~ Student</h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='lg:gap-10 md:gap-10'>
                        <div className="avatar man w-50">
                            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://images.unsplash.com/photo-1595502124338-950db27ea1c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" />
                            </div>
                        </div>
                        <div className='w-1/2'>
                            <h1 className='lg:text-left md:text-left lg:text-3xl font-bold capitalize text-orange-500 my-2'>Rahul Das</h1>
                            <h3 className='capitalize text-xs md:text-sm lg:text-sm lg:text-left md:text-left font-extralight text-justify '>I recently purchased a gaming computer setup from OM EPC Solution, and I am thrilled with my purchase. The staff was knowledgeable and helpful in guiding me through the process of selecting the right components for my needs, and they were able to build a custom gaming computer that exceeded my expectations.</h3>
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
                            <h1 className='lg:text-left md:text-left lg:text-3xl font-bold capitalize text-orange-500 my-2'>Sagnik Ghosh</h1>
                            <h3 className='capitalize text-xs md:text-sm lg:text-sm lg:text-left md:text-left font-extralight text-justify'>I recently purchased a refurbished hard disk setup from OM EPC Solution and I am extremely satisfied with my purchase. Not only was the product in excellent condition, but the price was also very reasonable compared to buying a new hard disk.</h3>
                            <h4 className='text-end designation font-mono'>~Jack</h4>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;