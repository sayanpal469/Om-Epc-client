import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const useComputer = () => {
    const [computers, setComputers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                let { data, status } = await axios.get('https://omepcserver.up.railway.app/api/omEpc/product/computer')
                // let data = await res.json
                // console.log(data.data)
                if (status === 200) {
                    setComputers(data.data)
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
    }, [computers])
    return [computers, loading]
};

export default useComputer;