import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import NotFound from "../404NotFound/NotFound";
import useServiceRequests from "../hooks/useServiceRequests";
import useUserEmail from "../hooks/useUserEmail";
import Loading from "../Loading/Loading";
import OrderNotFound from "../OrderNotFound/OrderNotFound";
import userAuth from "../userAuth";
import ServiceRequestCart from "./ServiceRequestCart";
import ServiceRequestRaw from "./ServiceRequestRaw";

const requestCategory = ["computer", "ups", "printer", "surveillance"];

const ServiceRequests = () => {
  const [userEmail] = useUserEmail();
  const [value, setValue] = useState(0);
  const [zero, setZero] = useState(true);
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState();
  const [three, setThree] = useState(false);
  const [requests, loading, setCancel] = useServiceRequests(
    requestCategory[value],
    userEmail
  );
  const reversedData = [...requests].reverse();
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [visible, setVisible] = useState(false);
  // console.log(reversedData)

  const updateValue = (id) => {
    setValue(id);
    if (id == 0) {
      setZero(true);
      setOne(false);
      setTwo(false);
      setThree(false);
    } else if (id == 1) {
      setOne(true);
      setZero(false);
      setTwo(false);
      setThree(false);
    } else if (id == 2) {
      setTwo(true);
      setZero(false);
      setOne(false);
      setThree(false);
    } else {
      setThree(true);
      setTwo(false);
      setOne(false);
      setZero(false);
    }
  };

  useEffect(() => {
    if (reversedData.length) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [reversedData]);

  // const fetchData = async () => {
  //     setLoading(true)
  //     try {
  //         let { data, status } = await axios.get(`https://omepc-server.onrender.com/api/omEpc/buy/${email}`)
  //         // console.log(data.available)
  //         if (status == 200) {
  //             setVisible(true)
  //             setOrders(data.available)
  //             setLoading(false)
  //             // setError('')
  //             if (orders) {
  //                 setVisible(true)
  //             }
  //         } else {
  //             setVisible(!visible)

  //         }
  //     } catch (error) {
  //         setLoading(false)
  //     }
  // }

  return (
    <div className="px-14">
      <div className="flex justify-center my-10">
        <ul className="menu menu-horizontal space-x-2 gap-3 md:space-x-5 flex justify-center lg:space-x-10 border-orange-500">
          <li>
            <Link
              to="#"
              className={zero ? "border bg-primary text-white" : "border"}
              onClick={() => updateValue(0)}
            >
              Computer or Laptop
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className={one ? "border bg-primary text-white" : "border"}
              onClick={() => updateValue(1)}
            >
              Ups
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className={two ? "border bg-primary text-white" : "border"}
              onClick={() => updateValue(2)}
            >
              Printer
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className={three ? "border bg-primary text-white" : "border"}
              onClick={() => updateValue(3)}
            >
              Survillence
            </Link>
          </li>
        </ul>
      </div>

      <div>
        {loading && <Loading />}

        {!loading && (
          <>
            {!visible && "Service not found"}

            {visible && (
              <div className="max-w-6xl mx-auto space-y-5 my-5">
                {reversedData.map((request, index) => (
                  <ServiceRequestCart
                    key={request._id}
                    index={index}
                    request={request}
                    setCancel={setCancel}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceRequests;
