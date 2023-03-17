import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../style/serviceCart.css'

const ServiceCart = ({ service }) => {
    const navigate = useNavigate();
    const imgUrl = `https://omepcserver.up.railway.app/uploads/${service.image}`;

    const learnMore = () => {
        navigate(`/service/${service._id}`)
    }

    return (
        <div className="card rounded-none card-compact w-96 bg-base-100 shadow-sm hover:shadow-lg transition serviceCart">
            <figure><img className='serviceImg' src={imgUrl} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title capitalize">{service.category}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, magnam non laudantium vitae eos tempora obcaecati,</p>
                <div className="card-actions justify-start my-5">
                    <button onClick={learnMore} className="btn btn-outline rounded-none capitalize font-mono text-sm">Read more</button>
                </div>
            </div>
            {/* <button className="service-btn btn btn-warning w-full mt-2">Get Service</button> */}
        </div>
    );
};

export default ServiceCart;