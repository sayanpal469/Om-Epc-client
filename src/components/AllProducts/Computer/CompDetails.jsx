import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../Loading/Loading";

const CompDetails = () => {
  const { compId } = useParams();
  const [computer, setComputer] = useState({});
  const [loading, setLoading] = useState(true);
  const [readmore, setReadmore] = useState(false);
  const navigate = useNavigate();
  // console.log(compId)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let { data, status } = await axios.get(
          `https://omepcserver.up.railway.app/api/omEpc/product/computer/${compId}`
        );
        // let data = await res.json
        // console.log(data.computer)
        if (status == 200) {
          setComputer(data.data);
          setLoading(false);
          // setError('')
        }
        // console.log(data)
      } catch (error) {
        // setError(error.message)
        setLoading(false);
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  const handelBuyClick = (id) => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
    } else {
      localStorage.setItem("buyProduct", JSON.stringify(computer));
      navigate("/buy");
    }
  };

  const {
    modelName,
    series,
    brand,
    processor,
    processorBrand,
    processorFrequency,
    operatingSystem,
    processorModel,
    ram,
    displaySize,
    graphics,
    hardDrive,
    ssdCapacity,
    warranty,
    image,
    price,
    wrongPrice,
    category,
    color,
    description,
  } = computer;
  const imgUrl = `https://omepcserver.up.railway.app/uploads/${image}`;

  return (
    // < !--component -- >
    <div className="container px-14 py-24 mx-auto">
      {loading && <Loading />}

      {!loading && (
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 space-x-5">
          <img
            alt="ecommerce"
            className="w-full object-cover object-center rounded"
            src={imgUrl}
          />
          <div className="w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            {/* <h2 className="text-sm title-font text-gray-500 tracking-widest">{brand}</h2> */}
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {modelName}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                <a href="https://www.facebook.com/omepcsolution" className="text-gray-500 cursor-pointer">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a href="https://wa.me/7981413743" className="ml-2 cursor-pointer text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="gray"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M12 0a12 12 0 1 1 0 24 12 12 0 0 1 0-24zm.14 4.5a7.34 7.34 0 0 0-6.46 10.82l.15.26L4.5 19.5l4.08-1.3a7.38 7.38 0 0 0 10.92-6.4c0-4.03-3.3-7.3-7.36-7.3zm0 1.16c3.41 0 6.19 2.76 6.19 6.15a6.17 6.17 0 0 1-9.37 5.27l-.23-.15-2.38.76.77-2.28a6.08 6.08 0 0 1-1.17-3.6 6.17 6.17 0 0 1 6.19-6.15zM9.66 8.47a.67.67 0 0 0-.48.23l-.14.15c-.2.23-.5.65-.5 1.34 0 .72.43 1.41.64 1.71l.14.2a7.26 7.26 0 0 0 3.04 2.65l.4.14c1.44.54 1.47.33 1.77.3.33-.03 1.07-.43 1.22-.85.15-.42.15-.78.1-.85-.02-.05-.08-.08-.15-.12l-1.12-.54a5.15 5.15 0 0 0-.3-.13c-.17-.06-.3-.1-.41.09-.12.18-.47.58-.57.7-.1.1-.18.13-.32.08l-.4-.18a4.64 4.64 0 0 1-2.13-1.98c-.1-.18-.01-.28.08-.37l.27-.31c.1-.1.12-.18.18-.3a.3.3 0 0 0 .01-.26l-.1-.23-.48-1.15c-.15-.36-.3-.3-.4-.3l-.35-.02z" />
                  </svg>
                </a>
                <a onClick={() => (window.location.href = 'tel:917981413743')} className="ml-2 cursor-pointer text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="gray"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </a>
              </span>
            </div>
            <p className="leading-relaxed">{description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              <div className="flex items-center">
                <span className="mr-2">Color</span>
                <p
                  className={`rounded-full bg-${color} w-6 h-6 focus:outline-none`}
                ></p>
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-2">Warranty</span>
                <p className="font-bold">{warranty} Year</p>
              </div>
            </div>

            <div className="pb-5 border-b-2 border-gray-200 collapse">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                Specifications
              </h1>
              <div className="lg:flex justify-between my-4 items-center">
                <h3 className="">In The Box</h3>
                <h3 className="text-sm">
                  LED, CPU, KEYBOARD,MOUSE & POWER CABLE
                </h3>
              </div>
              <div className="lg:flex justify-between my-4 items-center capitalize">
                <h3>Model Name</h3>
                <h3 className="text-sm">{modelName}</h3>
              </div>
              <div className="flex justify-between my-4 items-center capitalize">
                <h3>Series</h3>
                <h3 className="text-sm">{series}</h3>
              </div>

              <div>
                {readmore ? (
                  <button
                    onClick={() => setReadmore(false)}
                    className="text-red-500 font-semibold"
                  >
                    Read less..
                  </button>
                ) : (
                  <button
                    onClick={() => setReadmore(true)}
                    className="text-blue-500 font-semibold"
                  >
                    Read more...
                  </button>
                )}
              </div>

              {readmore && (
                <div>
                  <div className="flex justify-between my-4 items-center capitalize">
                    <h3>Brand</h3>
                    <h3 className="text-sm">{brand}</h3>
                  </div>
                  <div className="flex justify-between my-4 items-center capitalize">
                    <h3>Processor</h3>
                    <h3 className="text-sm">{processor}</h3>
                  </div>
                  <div className="flex justify-between my-4 items-center capitalize">
                    <h3>proceccor brand</h3>
                    <h3 className="text-sm">{processorBrand}</h3>
                  </div>
                  <div className="flex justify-between my-4 items-center capitalize">
                    <h3>processor frequency</h3>
                    <h3 className="text-sm">{processorFrequency}</h3>
                  </div>
                  <div className="flex justify-between my-4 items-center capitalize">
                    <h3>processor model</h3>
                    <h3 className="text-sm">{processorModel}</h3>
                  </div>
                  <div className="flex justify-between my-4 items-center capitalize">
                    <h3>ram</h3>
                    <h3 className="text-sm">{ram}</h3>
                  </div>
                  <div className="flex justify-between my-4 items-center capitalize">
                    <h3>display size</h3>
                    <h3 className="text-sm">{displaySize}</h3>
                  </div>
                  <div className="flex justify-between my-4 items-center capitalize">
                    <h3>operating system</h3>
                    <h3 className="text-sm">{operatingSystem}</h3>
                  </div>
                  <div className="flex justify-between my-4 items-center capitalize">
                    <h3>Graphics capasity</h3>
                    <h3 className="text-sm">{graphics}</h3>
                  </div>
                  <div className="flex justify-between my-4 items-center capitalize">
                    <h3>hard drive</h3>
                    <h3 className="text-sm">{hardDrive}</h3>
                  </div>
                  <div className="flex justify-between my-4 items-center capitalize">
                    <h3>ssd capacity</h3>
                    <h3 className="text-sm">{ssdCapacity}</h3>
                  </div>
                </div>
              )}
            </div>

            <div className="lg:flex mt-5 lg:items-center justify-between space-y-3 lg:space-y-2">
              <div className="">
                <span className="title-font font-medium text-gray-900 text-3xl">
                  ₹{price}
                </span>
                <span className="text-gray-400 ml-2 text-xl">
                  <del>₹{wrongPrice}</del>
                </span>
              </div>
              <button
                onClick={() => handelBuyClick(compId)}
                className="text-white btn capitalize bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-700 rounded"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompDetails;
