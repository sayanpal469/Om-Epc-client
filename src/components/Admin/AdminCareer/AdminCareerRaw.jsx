import React from "react";

const AdminCareerRaw = ({ index, career }) => {
  const { firstName, lastName, email, contact, image, createdAt } = career;
  const imgUrl = `https://omepc-server.onrender.com/uploads/${image}`;

  const createdAtTime = new Date(createdAt);
  const options = {
    timeZone: "UTC",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const localDate = createdAtTime.toLocaleDateString("en-US", options);
  // console.log(localDate); // output: 3/20/2023, 10:25:31 AM

  const createdA = new Date(createdAt);
  const localDates = createdA.toLocaleDateString();
  // console.log(localDate); // output depends on the user's locale

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
      <td>{localDates}</td>
    </tr>
  );
};

export default AdminCareerRaw;
