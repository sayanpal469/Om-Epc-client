import React from "react";
import "./Mission.css";
import { AiFillCheckCircle } from 'react-icons/ai';

const Mission = () => {
  return (
    <div className="mission-container grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 px-20">
      <div className="pb-20">
        <img
          className="max-w-full lg:h-[800px] h-auto"
          src="https://i.ibb.co/BnvPMrJ/pexels-cottonbro-studio-4705617.jpg"
          alt=""
        />
      </div>
      <div>
        <h1 className="text-3xl font-semibold text-blue-600 text-left">
          Welcome To OM EPC Solution
        </h1>
        <h2 className="text-5xl font-bold mt-5 text-black">
          OM EPC - We are here to help you repair service
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
        <div className="mt-20 items-center justify-center grid lg:grid-cols-2 gap-5">
          <div>
            <div className="flex items-center gap-2 mt-5">
              <AiFillCheckCircle className="text-blue-600  text-xl" />
              <h1 className="text-lg">Quick Repair Process</h1>
            </div>
            <div className="flex items-center gap-2 mt-5">
              <AiFillCheckCircle className="text-blue-600  text-xl" />
              <h1 className="text-lg">Commitment to Customers</h1>
            </div>
            <div className="flex items-center gap-2 mt-5">
              <AiFillCheckCircle className="text-blue-600  text-xl" />
              <h1 className="text-lg">Low Price Guarantee</h1>
            </div>
            <div className="flex items-center gap-2 mt-5">
              <AiFillCheckCircle className="text-blue-600  text-xl" />
              <h1 className="text-lg">60 Days Warranty</h1>
            </div>
          </div>
          <div>
            <img className="max-w-full h-auto" src="https://i.ibb.co/NnBzPqv/pexels-elias-gamez-10558599.jpg" alt="" />
          </div>
        </div>


        <div>
        {/* <div className="avatar">
  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div> */}
        </div>
      </div>
    </div>
  );
};

export default Mission;
