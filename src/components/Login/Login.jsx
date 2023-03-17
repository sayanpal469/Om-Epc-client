import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "./Login.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('https://omepcserver.up.railway.app/api/omEpc/login', {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        if (data.success == true) {
          // console.log(data)
          localStorage.setItem('user', JSON.stringify(data.user))
          navigate('/', { state:{isLoggedIn : true} })
        } else {
          swal(`${data.message}`);
        }
      })
  };
  return (
    <div className="login-container">
      <div className="flex items-center justify-center h-[100%]">
        <div className="w-full lg:w-[550px]">
          <form onSubmit={handleSubmit} className=" form-container  rounded-lg p-8">
          <h2 className="text-5xl text-white">Login</h2>
            <div className="mb-4">
              <label
                className="block text-white font-medium mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full border border-gray-400 bg-transparent font-semibold text-white p-2 rounded-lg"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-white font-medium mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full border border-gray-400  bg-transparent font-semibold text-white p-2 rounded-lg"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-transparent border hover:bg-sky-600 text-white font-medium py-2 px-4 rounded-lg"
              >
                Log In
              </button>
              <Link
                to="/checkEmail"
                className="bg-transparent  hover:text-sky-600 text-white font-medium"
              >
                Forgot password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;