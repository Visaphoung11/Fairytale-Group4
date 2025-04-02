// import React from "react";
// import Navbar from "./components/navbar.tsx";
// import AdventureBanner from "./pages/story.tsx"; // Ensure this component exists
// import StoryGrid from "./components/StoryGrid.tsx";
// import StoryDetail from "./pages/StoryDetail.tsx";
// import Login from "./pages/Login.tsx";

// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <AdventureBanner />
//       {/* <div className="p-6 bg-gray-100 min-h-screen"> */}
//       <StoryGrid />
//       <StoryDetail />
//       <Login />
//       {/* </div> */}
//     </>
//   );
// };

// export default App;
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar"; // Ensure correct casing
import Home from "./pages/Home";
import AdventureBanner from "./pages/story"; // Ensure correct casing
import Favorite from "./pages/Favorite";
import Login from "./pages/Login"; // Import Login component

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<AdventureBanner />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/register" element={<Register />} /> */}
      </Routes>
    </>
  );
};

export default App;
