import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ComingSoon from '../ComingSoon/ComingSoon';

const SingelService = () => {
    const [serviceDetails, setServiceDetails] = useState({});
    const {serviceId} = useParams()
    
    useEffect(() => {
        axios.get(`https://omepcserver.up.railway.app/api/omEpc/service/${serviceId}`)
            .then((res) => {
                console.log(res.data.service)
                // setServiceData(res.data.services)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className='bg-black text-white h-screen '>
            <div className='flex justify-center h-screen'>
                <ComingSoon/>
            </div>
        </div>
    );
};

export default SingelService;