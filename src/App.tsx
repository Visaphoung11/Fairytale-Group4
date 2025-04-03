import React from "react";
import Navbar from "./components/navbar.tsx";
import AdventureBanner from "./pages/story.tsx"; // Ensure this component exists
import RegisterForm from "./pages/register.tsx";
const App = () => {
  return (
    <>
      <Navbar />
      <AdventureBanner />
      <RegisterForm />
    </>
  );
};

export default App;
