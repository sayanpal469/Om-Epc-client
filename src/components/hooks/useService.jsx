import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const useService = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/api/omEpc/service")
            .then((res) => {
                // console.log(res.data.services)
                setServices(res.data.services)
            })
            .catch((err) => console.log(err))
    }, [services])
    return [services]
};

export default useService;