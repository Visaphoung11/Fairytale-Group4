import React from "react";
import Navbar from "./components/navbar.tsx";
import AdventureBanner from "./pages/story.tsx"; // Ensure this component exists
import StoryGrid from "./components/StoryGrid.tsx";
import StoryDetail from "./pages/StoryDetail.tsx";

const App = () => {
  return (
    <>
      <Navbar />
      <AdventureBanner />
      {/* <div className="p-6 bg-gray-100 min-h-screen"> */}
      <StoryGrid />
      <StoryDetail />
      {/* </div> */}
    </>
  );
};

export default App;
