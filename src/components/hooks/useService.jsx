import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const useService = (item) => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [error, setError] = useState('')
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                let { data, status } = await axios.get(`https://omepcserver.up.railway.app/api/omEpc/service/${item}`)
                // let data = await res.json
                // console.log(data)
                if (status == 200) {
                    setServices(data.services)
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
    }, [item])

    return [services, loading]
};

export default useService;