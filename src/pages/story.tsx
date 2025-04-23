import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import banner from "../assets/banner.png";
import StoryGrid from "../components/StoryGrid";
import Footer from "../components/footer";

const AdventureBanner = () => {
  const [filters, setFilters] = useState({
    categories: [],
    ageGroups: [],
  });

  const [categories, setCategories] = useState([]);
  const [ageGroups, setAgeGroups] = useState([]);

  // Fetch story types and age ranges from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoryRes, ageRes] = await Promise.all([
          fetch("http://62.72.46.248:1337/api/story-types"),
          fetch("http://62.72.46.248:1337/api/age-ranges"),
        ]);

        const categoryData = await categoryRes.json();
        const ageData = await ageRes.json();

        setCategories(categoryData.data.map((item) => item.name));
        setAgeGroups(ageData.data.map((item) => item.label));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const toggleFilter = (type, value) => {
    setFilters((prev) => {
      const updated = prev[type].includes(value)
        ? prev[type].filter((item) => item !== value)
        : [...prev[type], value];
      return { ...prev, [type]: updated };
    });
  };

  const isActive = (type, value) => filters[type].includes(value);

  return (
    <div>
      {/* Banner */}
      <div className="relative w-full mx-auto">
        <img
          src={banner}
          alt="Adventure Storybook"
          className="w-full h-full rounded-lg shadow-lg"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-col items-center p-4">
        <div className="relative w-full max-w-md mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border rounded-full bg-gray-200 focus:outline-none"
          />
        </div>
        <div className="flex w-full max-w-md justify-between border-t pt-4">
          <div className="space-y-2">
            {categories.map((category) => (
              <label
                key={category}
                className={`flex items-center space-x-2 cursor-pointer ${
                  isActive("categories", category)
                    ? "font-bold text-pink-500"
                    : ""
                }`}
              >
                <input
                  type="checkbox"
                  className="accent-pink-500"
                  checked={isActive("categories", category)}
                  onChange={() => toggleFilter("categories", category)}
                />
                <span>{category}</span>
              </label>
            ))}
          </div>
          <div className="border-l px-4"></div>
          <div className="space-y-2">
            {ageGroups.map((age) => (
              <label
                key={age}
                className={`flex items-center space-x-2 cursor-pointer ${
                  isActive("ageGroups", age) ? "font-bold text-pink-500" : ""
                }`}
              >
                <input
                  type="checkbox"
                  className="accent-pink-500"
                  checked={isActive("ageGroups", age)}
                  onChange={() => toggleFilter("ageGroups", age)}
                />
                <span>{age}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <StoryGrid />
      <Footer />
    </div>
  );
};

export default AdventureBanner;
