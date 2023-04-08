import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import swal from 'sweetalert';
import UserRaw from './UserRaw';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://omepcserver.up.railway.app/api/omEpc/getUser')
        .then(res => res.json())
        .then(data => {
            if(data.success == true) {
                setUsers(data.users)
            } else {
                swal({
                    title: "Error!",
                    text: data.message,
                    icon: "error",
                    button: "Aww yiss!",
                  });
            }
        })
    },[])

    return (
        <div>
            <div className="overflow-x-auto mt-5">
                <table className="table w-full text-center">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>User Name</th>
                            <th>Email</th>
                            {/* <th>Password</th> */}
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