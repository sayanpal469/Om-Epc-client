import React from "react";
import swal from "sweetalert";

const ComputerServiceRaw = ({ index, request }) => {
  const {
    _id,
    collectionDate,
    category,
    item,
    brand,
    operating,
    clientName,
    email,
    contact,
    address,
    city,
    pinCode,
    message,
    isCompleted,
    isCanceled,
  } = request;

  const handelComplete = (id) => {
    fetch(
      `https://omepc-server.onrender.com/api/omEpc/serviceReq/computer/complete/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isCompleted: true,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        if (data.success === true) {
          swal({
            title: "Good job!",
            text: "Service completed!",
            icon: "success",
          });
        }
      });
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td className="capitalize">{clientName}</td>
      <td>{email}</td>
      <td>+91 {contact}</td>
      <td className="capitalize">{address}</td>
      <td className="capitalize">{city}</td>
      <td>{pinCode}</td>
      <td className="capitalize">{category}</td>
      <td className="capitalize">{item}</td>
      <td className="capitalize">{brand}</td>
      <td className="capitalize">{operating}</td>
      <td>{collectionDate}</td>
      <td className="capitalize">{message}</td>

      <td className="capitalize">
        {isCanceled ? (
          <p className="bg-red-500 p-2 text-white">Canceled</p>
        ) : isCompleted ? (
          <p className="bg-green-500 p-2">Completed</p>
        ) : (
          <p className="bg-pink-500 p-2 text-white">Pending</p>
        )}
      </td>

      <td>
        {isCanceled ? (
          <p className="bg-red-500 p-2 text-white">Canceled</p>
        ) : isCompleted == true ? (
          <button className="btn btn-disabled">Completed</button>
        ) : (
          <button
            onClick={() => handelComplete(_id)}
            className="btn btn-primary"
          >
            Complete Service
          </button>
        )}
      </td>
    </tr>
  );
};

export default ComputerServiceRaw;
