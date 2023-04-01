import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useSingelProduct = (category, id) => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                let { data, status } = await axios.get(`https://omepcserver.up.railway.app/api/omEpc/product/${category}/${id}`)
                // let data = await res.json
                // console.log(data.printers)
                if (status == 200) {
                    setProduct(data.printers)
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

        fetchData();
    }, [product])
    return [product, loading]
};

export default useSingelProduct;