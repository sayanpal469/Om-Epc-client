import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const useProduct = (category) => {
    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(true);
    // const [error, setError] = useState('')
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                let { data, status } = await axios.get(`https://omepcserver.up.railway.app/api/omEpc/product/${category}`)
                // let data = await res.json
                // console.log(data)
                if (status == 200) {
                    setProducts(data)
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
    }, [])

    return [products, loading]
};

export default useProduct;