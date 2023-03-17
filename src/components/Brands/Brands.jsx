import React from 'react';
import "./Brands.css";

const Brands = () => {
    return (
        <div className='brand-container my-20'>
            <h2 className='text-6xl mb-10 text-blue-400 text-center'>Showcase</h2>
            <div className='grid justify-items-center lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5 px-5'>
                <div className='yt-video'>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/TnAydGe1qtk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className='yt-video'>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dW7nA7RoYBQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default Brands;