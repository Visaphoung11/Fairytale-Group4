import React, { useState } from "react";
import mashroom from "../assets/Mashroom.png";
import Footer from "../components/footer"; // Ensure correct casing

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${mashroom})` }}
    >
      {/* Main Content */}
      <div className="flex-grow flex items-center mt-20 sm:mt-10 justify-center p-8">
        <div className="bg-transparent bg-opacity-20 backdrop-blur-md p-8 rounded-lg shadow-md w-full max-w-sm text-center">
          <h2 className="text-black text-2xl font-bold mb-4">Login</h2>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full p-3 rounded-full bg-white text-gray-700 shadow-md focus:outline-none"
            />
          </div>

          <div className="mb-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-3 rounded-full bg-white text-gray-700 shadow-md focus:outline-none"
            />
            <button
              className="absolute inset-y-0 right-3 flex items-center text-gray-700"
              onClick={() => setShowPassword(!showPassword)}
            >
              👁️
            </button>
          </div>

          <button className="w-full bg-pink-500 text-white py-3 rounded-full text-lg font-semibold shadow-md">
            Log in
          </button>

          <p className="mt-4 text-black font-semibold cursor-pointer">
            Forgot your password?
          </p>
        </div>
      </div>
      {/* Footer Section */}
      <Footer /> {/* Footer is inside the main container now */}
    </div>
  );
};

export default Login;
