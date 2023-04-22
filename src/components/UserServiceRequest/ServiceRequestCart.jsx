import React, { useEffect, useState } from "react";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const ServiceRequestCart = ({ index, request, setCancel }) => {
  const {
    _id,
    type,
    brand,
    category,
    item,
    isCanceled,
    isCompleted,
    isRequest,
  } = request;

  const handelCancel = (id) => {
    fetch(
      `https://omepc-server.onrender.com/api/omEpc/serviceReq/${type}/cancel/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isCanceled: true,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        if (data.success === true) {
          // setDeleteSuccess(true)
          swal("Service Canceled");
          setCancel(true);
        } else {
          swal(`${data.message}`);
        }
      })
      .catch((err) => {
        swal({
          title: "Error!",
          text: err.message,
          icon: "error",
        });
      });
  };

  return (
    <div className="flex flex-col md:flex-row lg:flex-row justify-between lg:shadow-md shadow-sm p-10 bg-base-200">
      <div className="flex flex-col md:flex-row lg:flex-row lg:space-x-10 text-center md:text-left lg:text-left md:space-x-10">
        <div>
          <h3 className="capitalize text-sm md:text-lg lg:text-xl font-semibold">
            {category}
          </h3>
        </div>
        <div className="lg:w-60 md:w-56">
          <h3 className="capitalize text-sm md:text-lg lg:text-lg font-semibold">
            Brand-{brand}
          </h3>
        </div>
      </div>
      <div className="text-center lg:text-left mt-2 lg:mt-0">
        <h3 className="text-sm md:text-lg lg:text-lg font-semibold capitalize">
          For-{item}
        </h3>
      </div>

      <div className="mt-2 lg:mt-0">
        {isCanceled ? (
          <div className="flex space-x-2 items-center justify-center lg:justify-start">
            {" "}
            <div className="badge badge-xs bg-red-500 border-none"></div>{" "}
            <p className="text-base font-semibold">Canceled</p>
          </div>
        ) : isCompleted ? (
          <div className="flex space-x-2 items-center justify-center lg:justify-start">
            {" "}
            <div className="badge badge-xs bg-green-500 border-none rounded-full"></div>{" "}
            <p className="text-base font-semibold">Completed</p>
          </div>
        ) : (
          <div>
            <div className="flex space-x-1 items-center justify-center lg:justify-start">
              {" "}
              <div className="badge badge-xs bg-blue-500 border-none"></div>{" "}
              <p className="text-base font-semibold">Approved</p>
            </div>

            <div
              onClick={() => handelCancel(_id)}
              className="flex items-center space-x-1 mt-2"
            >
              <MdCancel className="text-red-500 text-xl md:text-2xl lg:text-lg" />{" "}
              <span className="text-sm text-red-500 md:text-lg lg:text-sm">
                Cancel
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceRequestCart;
