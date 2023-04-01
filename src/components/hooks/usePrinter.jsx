import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const usePrinter = () => {
    const [printers, setPrinters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                let { data, status } = await axios.get('https://omepcserver.up.railway.app/api/omEpc/product/printer')
                // let data = await res.json
                // console.log(data.printers)
                if (status == 200) {
                    setPrinters(data.printers)
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
    }, [printers])
    return [printers, loading]
};

export default usePrinter;