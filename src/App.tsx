import React from "react";
import Navbar from "./components/navbar.tsx";
import AdventureBanner from "./pages/story.tsx"; // Ensure this component exists

const App = () => {
  return (
    <>
      <Navbar />
      <AdventureBanner />
    </>
  );
};

export default App;
