import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const useSurveillance = () => {
    const [surveillances, setSurveillances] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                let { data, status } = await axios.get('https://omepcserver.up.railway.app/api/omEpc/product/surveillance')
                // let data = await res.json
                // console.log(data)
                if (status == 200) {
                    setSurveillances(data.surveillance)
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

    }, [surveillances])
    return [surveillances, loading]
};

export default useSurveillance;