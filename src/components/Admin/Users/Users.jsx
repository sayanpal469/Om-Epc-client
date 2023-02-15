import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import UserRaw from './UserRaw';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/omEpc/getUser')
        .then(res => res.json())
        .then(data => {
            if(data.success == true) {
                setUsers(data.users)
            } else {
                alert(`Server Error : ${data.message}`)
            }
        })
    },[])

    return (
        <div>
            <div class="overflow-x-auto mt-5">
                <table class="table w-full text-center">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Contact</th>
                            {/* <th>Image</th> */}
                            <th>Role</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRaw
                                key={user._id}
                                index={index}
                                user={user}
                            ></UserRaw>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;