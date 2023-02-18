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
                let {data, status} = await axios.get(`http://localhost:5000/api/omEpc/service/${item}`) 
                // let data = await res.json
                console.log(data)
                if(status == 200) {
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


        // fetch(`http://localhost:5000/api/omEpc/service/${item}`)
        // .then(res => res.json())
        // .then(data => {
        //     // console.log(data)
        //     setServices(data.services)
        // })


    }, [item])

    return [services, loading]
};

export default useService;