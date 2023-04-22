import axios from "axios";
import React, { useEffect, useState } from "react";

const useServiceRequests = (category, email) => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isData, setIsData] = useState(true);
  const [cancel, setCancel] = useState(false);
  // console.log(isData)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let { data, status } = await axios.get(
          `https://omepc-server.onrender.com/api/omEpc/serviceReq/${category}/${email}`
        );
        // let data = await res.json
        // console.log(data)
        if (status == 200) {
          setRequests(data.data);
          setLoading(false);
          // setError('')
        }
        // console.log(data)
      } catch (error) {
        // setError(error.message)
        setLoading(false);
        // console.log(error.message);
      }
    };

    fetchData();
  }, [category, email]);

  useEffect(() => {
    if (cancel) {
      fetchData();
    }
  }, [cancel]);

  const fetchData = async () => {
    setLoading(true);
    try {
      let { data, status } = await axios.get(
        `https://omepc-server.onrender.com/api/omEpc/serviceReq/${category}/${email}`
      );
      // let data = await res.json
      // console.log(data.data)
      if (status == 200) {
        setRequests(data.data);
        setLoading(false);
        // setError('')
        if (requests.length) {
          setIsData(!isData);
        }
      }
      // console.log(data)
    } catch (error) {
      // setError(error.message)
      setLoading(false);
      // console.log(error.message);
    }
  };

  return [requests, loading, setCancel];
};

export default useServiceRequests;
