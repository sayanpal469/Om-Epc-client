import { useEffect, useState } from 'react';
// import userAuth from '../userAuth';

const useAdmin = () => {
    const [user, setUser] = useState({})
    const [admin, setAdmin] = useState(false)
    // const [isReloaded, setIsReloaded] = useState(false);
    const auth = localStorage?.getItem('user');
    const userAuth = JSON.parse(auth)

    useEffect(() => {
        let email = userAuth?.email;
        if (email) {
            fetch(`http://localhost:5000/api/omEpc/login/user/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data.user)
                    if (data.success === true && userAuth) {
                        setUser(data.user)
                        // setAdmin(adminUser)
                        // console.log(adminUser.role)
                        if (user.role === "admin") {
                            setAdmin(true)
                            // setIsReloaded(true);
                        }
                    }
                })
        }
    }, [user])

    return [admin]
};

export default useAdmin;