// import { useEffect, useState } from "react";
// import { Search } from "lucide-react";
// import banner from "../assets/banner.png";
// import StoryGrid from "../components/StoryGrid";
// import Footer from "../components/footer";

// const AdventureBanner = () => {
//   const [filters, setFilters] = useState({
//     categories: [],
//     ageGroups: [],
//   });

//   const [categories, setCategories] = useState([]);
//   const [ageGroups, setAgeGroups] = useState([]);

//   // Fetch story types and age ranges from the API
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [categoryRes, ageRes] = await Promise.all([
//           fetch("http://62.72.46.248:1337/api/story-types"),
//           fetch("http://62.72.46.248:1337/api/age-ranges"),
//         ]);

//         const categoryData = await categoryRes.json();
//         const ageData = await ageRes.json();

//         setCategories(categoryData.data.map((item) => item.name));
//         setAgeGroups(ageData.data.map((item) => item.label));
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const toggleFilter = (type, value) => {
//     setFilters((prev) => {
//       const updated = prev[type].includes(value)
//         ? prev[type].filter((item) => item !== value)
//         : [...prev[type], value];
//       return { ...prev, [type]: updated };
//     });
//   };

//   const isActive = (type, value) => filters[type].includes(value);

//   return (
//     <div>
//       {/* Banner */}
//       <div className="relative w-full mx-auto">
//         <img
//           src={banner}
//           alt="Adventure Storybook"
//           className="w-full h-full rounded-lg shadow-lg"
//         />
//       </div>

//       {/* Filters */}
//       <div className="flex flex-col items-center p-4">
//         <div className="relative w-full max-w-md mb-4">
//           <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
//           <input
//             type="text"
//             placeholder="Search"
//             className="w-full pl-10 pr-4 py-2 border rounded-full bg-gray-200 focus:outline-none"
//           />
//         </div>
//         <div className="flex w-full max-w-md justify-between border-t pt-4">
//           <div className="space-y-2">
//             {categories.map((category) => (
//               <label
//                 key={category}
//                 className={`flex items-center space-x-2 cursor-pointer ${
//                   isActive("categories", category)
//                     ? "font-bold text-pink-500"
//                     : ""
//                 }`}
//               >
//                 <input
//                   type="checkbox"
//                   className="accent-pink-500"
//                   checked={isActive("categories", category)}
//                   onChange={() => toggleFilter("categories", category)}
//                 />
//                 <span>{category}</span>
//               </label>
//             ))}
//           </div>
//           <div className="border-l px-4"></div>
//           <div className="space-y-2">
//             {ageGroups.map((age) => (
//               <label
//                 key={age}
//                 className={`flex items-center space-x-2 cursor-pointer ${
//                   isActive("ageGroups", age) ? "font-bold text-pink-500" : ""
//                 }`}
//               >
//                 <input
//                   type="checkbox"
//                   className="accent-pink-500"
//                   checked={isActive("ageGroups", age)}
//                   onChange={() => toggleFilter("ageGroups", age)}
//                 />
//                 <span>{age}</span>
//               </label>
//             ))}
//           </div>
//         </div>
//       </div>

//       <StoryGrid />
//       <Footer />
//     </div>
//   );
// };

// export default AdventureBanner;

import { useState, useEffect } from "react";

const StoryFilterForm = () => {
  const [stories, setStories] = useState([]);
  const [ageRanges, setAgeRanges] = useState([]);
  const [storyTypes, setStoryTypes] = useState([]);
  const [selectedAgeRange, setSelectedAgeRange] = useState(null);
  const [selectedStoryType, setSelectedStoryType] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch age ranges and story types on page load
  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const ageResponse = await fetch(
          "http://62.72.46.248:1337/api/age-ranges"
        );
        const typeResponse = await fetch(
          "http://62.72.46.248:1337/api/story-types"
        );

        const ageData = await ageResponse.json();
        const typeData = await typeResponse.json();

        setAgeRanges(ageData.data || []);
        setStoryTypes(typeData.data || []);
      } catch (error) {
        console.error("Error fetching options:", error);
      }
    };

    fetchOptions();
  }, []);

  // Fetch stories when filters change
  useEffect(() => {
    const fetchStories = async () => {
      setLoading(true);
      setError(null);

      let url = `http://62.72.46.248:1337/api/stories?populate=*`;

      // Add filters only if selected
      if (selectedAgeRange !== null) {
        url += `&filters[age_range][id][$eq]=${selectedAgeRange}`;
      }
      if (selectedStoryType !== null) {
        url += `&filters[story_type][id][$eq]=${selectedStoryType}`;
      }

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setStories(result.data || []);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch stories.");
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, [selectedAgeRange, selectedStoryType]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Story Filter</h1>

      {/* Filter Form */}
      <form className="space-y-4 mb-6">
        {/* Age Range Selector */}
        <div className="flex items-center">
          <label htmlFor="ageRange" className="mr-2 font-medium">
            Age Range:
          </label>
          <select
            id="ageRange"
            value={selectedAgeRange || ""}
            onChange={(e) => setSelectedAgeRange(e.target.value || null)}
            className="border px-3 py-2 rounded"
          >
            <option value="">All</option>
            {ageRanges.map((range) => (
              <option key={range.id} value={range.id}>
                {range.label}
              </option>
            ))}
          </select>
        </div>

        {/* Story Type Selector */}
        <div className="flex items-center">
          <label htmlFor="storyType" className="mr-2 font-medium">
            Story Type:
          </label>
          <select
            id="storyType"
            value={selectedStoryType || ""}
            onChange={(e) => setSelectedStoryType(e.target.value || null)}
            className="border px-3 py-2 rounded"
          >
            <option value="">All</option>
            {storyTypes.map((type) => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>
        </div>
      </form>

      {/* Loading/Error States */}
      {loading && <p>Loading stories...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Stories List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stories.length > 0
          ? stories.map((story) => (
              <div key={story.id} className="border p-4 rounded shadow">
                {story.cover_image?.formats?.thumbnail?.url && (
                  <img
                    src={story.cover_image.formats.thumbnail.url}
                    alt={story.title}
                    className="w-full h-48 object-cover mb-4 rounded"
                  />
                )}
                <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                <p className="text-gray-700">{story.description}</p>
              </div>
            ))
          : !loading && <p>No stories available for the selected filters.</p>}
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <StoryFilterForm />
    </div>
  );
}

export default App;
