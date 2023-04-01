import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useRefurbished = () => {
    const [refurbished, setRefurbished] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                let { data, status } = await axios.get('https://omepcserver.up.railway.app/api/omEpc/product/refurbished')
                // let data = await res.json
                // console.log(data.data)
                if (status == 200) {
                    setRefurbished(data.data)
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
    }, [refurbished])
    return [refurbished, loading]
};

export default useRefurbished;