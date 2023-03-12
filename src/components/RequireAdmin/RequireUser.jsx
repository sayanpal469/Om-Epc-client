import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RequireUser = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState();

    useEffect(() => {
        if(!localStorage.getItem('user')) {
            navigate('/login')
        }
    },[])

    return children;
};

export default RequireUser;