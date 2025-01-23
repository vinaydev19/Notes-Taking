import React from "react";

function Register() {
  return (
    <>
      <div className="w-full flex justify-center items-center bg-[#172842] h-screen">
        <div className="flex flex-col items-center gap-5 pt-3 w-[30%] h-[50%] bg-[#2B24AE] rounded-lg">
          <h1 className="font-bold text-white">Register</h1>
          <form className="flex flex-col gap-5 items-center">
            <input
              type="text"
              required
              placeholder="FullName"
              className=" border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white py-1.5"
            ></input>
            <input
              type="email"
              required
              placeholder="Email-Id"
              className=" border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white py-1.5"
            ></input>
            <input
              type="password"
              required
              placeholder="Password"
              className=" border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white py-1.5"
            ></input>
            <button className="inline-flex p-3 h-8 rounded-lg text-sm border border-black/10 justify-center items-center hover:cursor-pointer  bg-gray-50 hover:bg-gray-300 shrink-0">
              submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
