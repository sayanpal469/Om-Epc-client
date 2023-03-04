import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="landing-animation">
        <div className="mx-10">
          <div className="container-about text-center w-full">
            <h2 className="title">
              <span className="title-word title-word-1">OM </span>
              <span className="title-word title-word-2">EPC </span>
              <span className="title-word title-word-3">SOLUTION</span>
            </h2>
          </div>
          <p className="text-2xl text-white font-mono">OM EPC Solutions is a leading provider of comprehensive maintenance services for all types of computers, printers, cameras, batteries, and inverters. With its team of experienced technicians and their expertise in troubleshooting and fixing different types of electronic devices, the company is a trusted partner for individuals and businesses alike. The company offers an annual maintenance contract that covers regular check-ups and preventative maintenance, ensuring that all devices are functioning optimally at all times. In addition, the company provides 24/7 support for urgent repair needs, ensuring minimal downtime and interruption to the customer's operations.

            In today's digital age, electronic devices have become an integral part of our daily lives. Whether it's a home office setup or a large enterprise network, the functioning of these devices is critical to our personal and professional lives. However, even the most reliable devices can experience problems, and the downtime caused by these issues can be costly and disruptive. That's why it's important to have a reliable maintenance partner that can ensure the smooth functioning of these devices.

            OM EPC Solutions offers a wide range of services to its customers, including hardware repair, software upgrades, preventative maintenance, and 24/7 support. The company's technicians are trained in all the latest technology and are equipped with the latest tools and equipment to repair and maintain all types of devices. Whether it's a simple software upgrade or a complex hardware repair, the company's technicians are up to the task.

            In addition to its repair and maintenance services, OM EPC Solutions also offers training and support to its customers. The company's training programs are designed to help customers get the most out of their devices and to prevent problems from occurring in the first place. The company's support team is available 24/7 to answer any questions and to provide guidance and support whenever needed.</p>
        </div>
        <div className="sine-wave">
          <svg
            className="svg-waves"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shape-rendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              ></path>
            </defs>
            <g className="svg-waves__parallax">
              <use href="#gentle-wave" x="48" y="0"></use>
              <use href="#gentle-wave" x="48" y="3"></use>
              <use href="#gentle-wave" x="48" y="5"></use>
              <use href="#gentle-wave" x="48" y="7"></use>
            </g>
          </svg>
        </div>
      </div>
    </>
  );
};

export default About;
