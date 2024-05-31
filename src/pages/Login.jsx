import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import background from '../assets/bg.jpg';

const Login = () => {
  const [loginData, setLoginData] = useState({
    address: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/services");
    console.log("hello");
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="bg-white p-10">
        
      <h2 className="text-[#024751] font-bold  text-2xl">Welcome! enter your address to continue.</h2>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xs mt-6 mx-auto"
      >
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Enter address"
            id="address"
            name="address"
            value={loginData.address}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-[#024751] text-white rounded-md hover:bg-[#85ceda] transition-colors"
        >
          Login
        </button>
      </form>
      </div>
    </div>
  );
};

export default Login;
