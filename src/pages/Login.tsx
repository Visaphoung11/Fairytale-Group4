import React, { useState } from "react";
import mashroom from "../assets/Mashroom.png";
import { useNavigate } from "react-router-dom"; // Optional, for redirect

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Optional

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:1337/api/auth/local", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful:", data);
        localStorage.setItem("token", data.jwt);
        // Optional: redirect
        navigate("/dashboard");
      } else {
        alert("Login failed: " + (data?.error?.message || "Unknown error"));
      }
    } catch (error) {
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${mashroom})` }}
    >
      <form
        onSubmit={handleLogin}
        className="bg-transparent bg-opacity-20 backdrop-blur-md p-8 rounded-lg shadow-md w-150 h-90 text-center"
      >
        <h2 className="text-black text-2xl font-bold mb-4">Login</h2>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Username or Email"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            className="w-full p-3 rounded-full bg-white text-gray-700 shadow-md focus:outline-none"
          />
        </div>

        <div className="mb-4 relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-full bg-white text-gray-700 shadow-md focus:outline-none"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-3 flex items-center text-gray-700"
            onClick={() => setShowPassword(!showPassword)}
          >
            👁️
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-pink-500 text-white py-3 rounded-full text-lg font-semibold shadow-md cursor-pointer"
        >
          Log in
        </button>

        <p className="mt-4 text-black font-semibold cursor-pointer">
          Forgot your password?
        </p>
      </form>
    </div>
  );
};

export default Login;
