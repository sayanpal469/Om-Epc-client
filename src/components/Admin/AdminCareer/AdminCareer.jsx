import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import AdminCareerRaw from "./AdminCareerRaw";

const AdminCareer = () => {
  const [careers, setCareers] = useState([]);

  useEffect(() => {
    fetch("https://omepc-server.onrender.com/api/omEpc/carrer")
      .then((res) => res.json())
      .then((data) => {
        if (data.success === true) {
          // console.log(data.allRequest);
          setCareers(data.data);
        } else {
          swal("Server Error  :", `${data.message}`, "error");
        }
      });
  }, []);
  return (
    <div>
      <div className="overflow-x-auto mt-5">
        <table className="table w-full text-center">
          <thead>
            <tr>
              <th>No</th>
              <th>First Name</th>
              <th>last Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Document</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {careers.map((career, index) => (
              <AdminCareerRaw
                key={career._id}
                index={index}
                career={career}
                // messages={careers}
              ></AdminCareerRaw>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminCareer;
