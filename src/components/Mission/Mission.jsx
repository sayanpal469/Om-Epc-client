import React from "react";
import "./Mission.css";

const Mission = () => {
  return (
    <div className="mission-container  grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 px-20">
      <div className="pb-20">
        <img
          className="max-w-full lg:h-[800px] h-auto"
          src="https://i.ibb.co/BnvPMrJ/pexels-cottonbro-studio-4705617.jpg"
          alt=""
        />
      </div>
      <div>
        <h1 className="text-4xl font-bold text-blue-400">
          Welcome To OM EPC Solution
        </h1>
        <h2 className="text-6xl mt-5 text-black">
          OM EPC - We are here to help you repair service
        </h2>
        <p className="text-2xl text-black mt-10">
          OM EPC Solution is dedicated to providing exceptional servicing and
          support for a wide range of computer, printer, CCTV camera, and UPS
          brands. Our mission is to be the trusted and reliable source for all
          technology repair and maintenance needs, ensuring our clients receive
          prompt, efficient and cost-effective solutions that maximize their
          productivity and minimize downtime. We strive to deliver top-notch
          customer service and continuously improve our processes to meet the
          ever-evolving needs of the market.
        </p>
        <div>
            
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Mission;
