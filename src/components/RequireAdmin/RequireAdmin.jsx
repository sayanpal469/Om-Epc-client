import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import userAuth from '../userAuth';
// import admin from '../hooks/useAdmin';
import useAdmin from '../hooks/useAdmin';

const RequireAdmin = ({ children }) => {
    const navigate = useNavigate();
    const [admin] = useAdmin()
    // console.log(admin)

    // useEffect(() => {
    //     if (!admin) {
    //         navigate('/login')
    //     }
    // }, [])


    return children
};

export default RequireAdmin;