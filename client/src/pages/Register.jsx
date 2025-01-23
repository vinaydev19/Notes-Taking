import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegisterForm = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "/api/v1/users/register",
        {
          fullName,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.data);

      if (res.data.success) {
        console.log("Registration successful");
        navigate("/login"); // Redirect to login page
      } else {
        console.log("Registration failed");
      }
    } catch (error) {
      console.log(`error on register in react app`, error);
    }
  };

  return (
    <>
      <div className="w-full flex justify-center items-center bg-[#172842] h-screen">
        <div className="flex flex-col items-center gap-5 pt-3 w-[30%] h-[50%] bg-[#2B24AE] rounded-lg">
          <h1 className="font-bold text-white">Create Your Account</h1>
          <form
            onSubmit={handleRegisterForm}
            className="flex flex-col gap-5 items-center"
          >
            <input
              type="text"
              required
              placeholder="FullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className=" border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white py-1.5"
            ></input>
            <input
              type="email"
              required
              placeholder="Email-Id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white py-1.5"
            ></input>
            <input
              type="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white py-1.5"
            ></input>
            <button className="inline-flex p-3 h-8 rounded-lg text-sm border border-black/10 justify-center items-center hover:cursor-pointer  bg-gray-50 hover:bg-gray-300 shrink-0">
              submit
            </button>
          </form>
          <div className="flex gap-2 text-white">
            <p>i have alreay Account</p>
            <Link to="/Login">
              <button className="border-b-2 hover:cursor-pointer">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
