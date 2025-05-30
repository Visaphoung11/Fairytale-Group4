import { useState } from "react"; // ✅ Only import useStateimport bgImage from "../assets/image.png";
import StoryGrid from "../components/StoryGrid";
import Footer from "../components/footer";
import Pagination from "../components/Pagination";
import bgImage from "../assets/image.png";

const Home = () => {
  // State to track the current page
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Total number of pages

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page); // Update the current page state
    console.log(`Navigating to page ${page}`);
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-[80px] font-extrabold mb-4 drop-shadow-lg font-BlackAndWhitePicture">
          Making a little more{" "}
          <span className="text-yellow-400 text-7xl">magic</span>.
        </h1>
        <p className="max-w-2xl text-4xl font-bold font-BlackAndWhitePicture">
          Welcome to the world’s largest collection of Fairly Tales.
        </p>

        {/* Button */}
        <button className="mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold text-lg rounded-full shadow-lg hover:bg-yellow-300 transition">
          Display
        </button>
      </div>

      {/* Story Grid Component */}
      <div className="relative z-10 px-6">
        <h1 className="text-pink-600 text-4xl font-extrabold p-7 font-BlackAndWhitePicture">
          Adventure
        </h1>
        <StoryGrid />
      </div>
      <div className="flex justify-center">
        <button className="mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold text-lg rounded-full shadow-lg hover:bg-yellow-300 transition">
          Display
        </button>
      </div>
      {/* Story Grid Component */}
      <div className="relative z-10 px-6">
        <h1 className="text-pink-600 text-4xl font-extrabold p-7 font-BlackAndWhitePicture">
          Animals
        </h1>
        <StoryGrid />
      </div>
      <div className="flex justify-center">
        <button className="mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold text-lg rounded-full shadow-lg hover:bg-yellow-300 transition">
          Display
        </button>
      </div>
      {/* Story Grid Component */}
      <div className="relative z-10 px-6">
        <h1 className="text-pink-600 text-4xl font-extrabold p-7 font-BlackAndWhitePicture">
          Classic
        </h1>
        <StoryGrid />
      </div>
      <div className="flex justify-center">
        <button className="mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold text-lg rounded-full shadow-lg hover:bg-yellow-300 transition">
          Display
        </button>
      </div>

      {/* Pagination Component */}
      <div className="flex justify-center mt-8">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange} // Pass the handler to update the state
        />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
