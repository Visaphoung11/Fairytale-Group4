import { useState } from "react";
import RegisterBg from "../assets/rejister.png"; // Import the image
export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-opacity-80 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${RegisterBg})`,
      }}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-center text-pink-500 text-2xl font-bold mb-4">
          Register
        </h2>
        <form>
          <input
            type="email"
            placeholder="username"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            className="w-full p-3 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <div className="relative mb-3">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
          <button className="w-full bg-pink-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-pink-600">
            Rigester
          </button>
        </form>
        <p className="text-center text-gray-600 mt-3">
          Already have an account?{" "}
          <a href="#" className="text-pink-500">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}
