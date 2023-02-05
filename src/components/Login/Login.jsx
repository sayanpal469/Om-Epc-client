import React, { useState } from "react";
import "./Login.css"

const Login = () => {
	const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email} Password: ${password}`);
  };
	return (
		<div className="login-container">
			 <div className="flex items-center justify-center h-[100%]">
      <div className="w-full lg:w-[550px]">
        <form onSubmit={handleSubmit} className=" form-container  rounded-lg shadow-md p-8">
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
            <a
              href="#"
              className="bg-transparent  hover:text-sky-600 text-white font-medium"
            >
              Forgot password?
            </a>
          </div>
        </form>
      </div>
    </div>
		</div>
	);
};

export default Login;