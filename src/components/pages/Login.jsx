import React, { useState } from "react";
import Logo from "./logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const HomeScreen = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative min-h-screen text-neutral-900 antialiased selection:bg-cyan-300 selection:text-cyan-900 flex items-center justify-center" style={{ backgroundColor: '#e7f4fd' }}>
      {/* Content */}
      <div className="relative z-10 bg-white p-8 rounded-lg shadow-lg w-full max-w-md" style={{ backgroundColor: '#e7f4fd' }}>
        <div className="flex justify-center mb-6">
          <img src={Logo} alt="Kyambogo University Logo" className="h-24" />
        </div>
        <h2 className="text-center text-2xl font-bold mb-4 text-blue-500">KYAMBOGO UNIVERSITY</h2>
        <h3 className="text-center text-lg mb-6 text-blue-500">STUDENT PORTAL</h3>
        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Student Number or Reg. Number"
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-6 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 px-3 py-2 text-gray-600"
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-3 rounded hover:bg-green-600"
          >
            SIGN IN
          </button>
        </form>
        <div className="flex justify-between mt-4 text-sm">
          <a href="#" className="text-blue-500 hover:underline">Forgot your Password?</a>
          <a href="#" className="text-blue-500 hover:underline">Reset Here!</a>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;