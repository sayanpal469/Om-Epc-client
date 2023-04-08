import React from "react";

const AdminCareerRaw = ({ index, career }) => {
  const { firstName, lastName, email, contact, image, createdAt } = career;
  const imgUrl = `https://omepcserver.up.railway.app/uploads/${image}`;

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>+91 {contact}</td>
      <td>
        <a href={imgUrl} download className="btn">
          Show Document
        </a>
      </td>
      <td>{createdAt}</td>
    </tr>
  );
};

export default AdminCareerRaw;
