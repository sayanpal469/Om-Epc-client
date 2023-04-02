import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import admin from '../hooks/useAdmin';
import useAdmin from '../hooks/useAdmin';
import { useState } from 'react';

const RequireAdmin = ({ children }) => {
    const navigate = useNavigate();
    const [admin, setAdmin] = useState(false)
    // const [admin] = useAdmin()
    const auth = localStorage?.getItem('user');
    const userAuth = JSON.parse(auth)
    console.log(userAuth)

    useEffect(() => {
        if (userAuth.isAdmin) {
            setAdmin(true)
        } else {
            if (!admin) {
                navigate('/login')
            }
        }
    }, [userAuth])




    return children
};

export default RequireAdmin;