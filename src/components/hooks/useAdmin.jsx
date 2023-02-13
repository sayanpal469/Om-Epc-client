import { useEffect, useState } from 'react';
import userAuth from '../userAuth';

const useAdmin = () => {
    const [adminUser, setAdminUser] = useState({})
    const [admin, setAdmin] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:5000/api/omEpc/login/user/${userAuth?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data.user)
                if (data.success == true && userAuth) {
                    setAdminUser(data.user)
                    // setAdmin(adminUser)
                    // console.log(adminUser.role)
                    if (adminUser.role == "admin") {
                        setAdmin(true)
                    }
                }
            })
    }, [adminUser])

    return [admin]
};

export default useAdmin;