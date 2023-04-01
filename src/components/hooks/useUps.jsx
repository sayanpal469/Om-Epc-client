import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useUps = () => {
    const [upses, setUpses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                let { data, status } = await axios.get('https://omepcserver.up.railway.app/api/omEpc/product/ups')
                // let data = await res.json
                // console.log(data.upses)
                if (status == 200) {
                    setUpses(data.upses)
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

        // const interval = setInterval(() => {
        //     fetchData();
        // }, 5000);

        // return () => clearInterval(interval);
    }, [upses])
    return [upses, loading]
};

export default useUps;