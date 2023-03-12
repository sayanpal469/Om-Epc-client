import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useUserEmail = () => {
    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {
        getUserEmail();
    }, []);

    async function getDataUserLocalStorage(key) {
        return new Promise((resolve, reject) => {
            try {
                const data = localStorage.getItem(key);
                resolve(JSON.parse(data));
            } catch (error) {
                reject(error);
            }
        });
    }

    async function getUserEmail() {
        try {
            const data = await getDataUserLocalStorage('user');
            if (data) {
                setUserEmail(data?.email);
                // console.log(data.email)
            }
        } catch (error) {
            console.error(error);
        }
    }
    return [userEmail]
};

export default useUserEmail;