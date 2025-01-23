import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <div className="flex justify-center items-center w-full h-screen bg-[#172842] gap-3 flex-col text-white">
        <Link to="/register" className="bg-sky-600 p-3 rounded-2xl hover:bg-sky-500">Register</Link>
        <Link to="/login" className="bg-sky-600 p-3 rounded-2xl hover:bg-sky-500">Login</Link>
      </div>
    </>
  );
}

export default Landing;
