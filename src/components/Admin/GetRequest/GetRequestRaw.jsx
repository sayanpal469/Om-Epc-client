import React from 'react';
import MessageModal from './MessageModal';

const GetRequestRaw = ({ index, request, messages }) => {
    const { user, email, contact, message, responseStatus, createdAt } = request
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user}</td>
            <td>{email}</td>
            <td>+91 {contact}</td>
            {/* <td><p>{message}</p></td> */}
            <td>
                <MessageModal messages={messages}/>
            </td>

            <td>{
                responseStatus == true ? 'True' : 'False'
            }</td>
            <td>{createdAt}</td>
        </tr>
    );
};

export default GetRequestRaw;