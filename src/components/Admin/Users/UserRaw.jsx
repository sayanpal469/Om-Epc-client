import React from 'react';

const UserRaw = ({index, user}) => {
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user.userName}</td>
            <td>{user.email}</td>
            {/* <td>{user.password}</td> */}
            <td>{user.contact}</td>
            <td>{user.role}</td>
            <td>{user.createdAt}</td>
        </tr>
    );
};

export default UserRaw;