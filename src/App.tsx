import React from "react";
import Navbar from "./components/navbar.tsx";
import AdventureBanner from "./pages/story.tsx"; // Ensure this component exists
import StoryGrid from "./components/StoryGrid.tsx";

const App = () => {
  return (
    <>
      <Navbar />
      <AdventureBanner />
      {/* <div className="p-6 bg-gray-100 min-h-screen"> */}
      <StoryGrid />
      {/* </div> */}
    </>
  );
};

export default App;
