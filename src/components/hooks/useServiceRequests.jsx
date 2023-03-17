import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useServiceRequests = (category, email) => {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                let { data, status } = await axios.get(`https://omepcserver.up.railway.app/api/omEpc/serviceReq/${category}/${email}`)
                // let data = await res.json
                // console.log(data)
                if (status == 200) {
                    setRequests(data.data)
                    setLoading(false)
                    // setError('')
                }
                // console.log(data)
            } catch (error) {
                // setError(error.message)
                setLoading(false)
                console.log(error.message)
            }
        }

        fetchData()
    }, [category, email])

    return [requests, loading]
};

export default useServiceRequests;