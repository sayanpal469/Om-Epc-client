import { useEffect, useState } from 'react';
import auth from '../userAuth';

const useAdmin = () => {
    const [admin, setAdmin] = useState(false)

    useEffect(() => {
        fetch('http://localhost:5000/api/omEpc/login/users')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.success == true && auth) {
                    if (data.users.role == 'admin') {
                        setAdmin(true)
                    }
                }
            })
    }, [])

    return [admin]
};

export default useAdmin;