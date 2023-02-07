import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingelService = () => {
    const [serviceDetails, setServiceDetails] = useState({});
    const {serviceId} = useParams()
    
    useEffect(() => {
        axios.get(`http://localhost:5000/api/omEpc/service/${serviceId}`)
            .then((res) => {
                console.log(res.data.service)
                // setServiceData(res.data.services)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            bla
            bla
            bla
            bla
            bla
            bla
            bla
        </div>
    );
};

export default SingelService;