import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";

// Define the type for a story
type Story = {
  id: number;
  image: string;
  title: string;
  description: string;
};

const stories: Story[] = [
  {
    id: 1,
    image: img1,
    title: "Magical Forest",
    description:
      "A young girl embarks on a journey through an enchanted forest.",
  },
  {
    id: 2,
    image: img2,
    title: "The Curious Detective",
    description: "A boy solves mysteries in a village full of talking animals.",
  },
  {
    id: 3,
    image: img3,
    title: "The Land of Cheese",
    description: "An adventure in a world where everything is made of cheese.",
  },
  {
    id: 4,
    image: img4,
    title: "The Hidden Castle",
    description: "A princess discovers a hidden castle with a secret.",
  },
  {
    id: 5,
    image: img5,
    title: "The Talking River",
    description: "A magical river that whispers ancient stories.",
  },
  {
    id: 6,
    image: img6,
    title: "The Starry Night",
    description:
      "A boy dreams of flying to the stars and meeting celestial beings.",
  },
];

const StoryGrid: React.FC = () => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  // Toggle favorite status
  const toggleFavorite = (id: number) => {
    setFavorites((prevFavorites) => {
      const newFavorites = new Set(prevFavorites);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-4">
        <h2 className="text-xl font-bold text-pink-600 mb-4 text-start">
          You will like this
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {stories.map((story) => (
            <div
              key={story.id}
              className="cursor-pointer p-2 rounded-lg shadow-lg hover:shadow-xl transition"
              onClick={() => navigate(`/story/${story.id}`)} // Navigate to story detail
            >
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h3 className="text-lg font-semibold mt-2">{story.title}</h3>
              <p className="text-sm text-gray-600">{story.description}</p>

              {/* Favorite Button */}
              <label
                className="mt-2 block"
                onClick={(e) => e.stopPropagation()} // Prevent navigation when clicking favorite
              >
                <input
                  type="checkbox"
                  checked={favorites.has(story.id)}
                  onChange={() => toggleFavorite(story.id)}
                  className="peer hidden"
                />
                <div className="group flex w-fit cursor-pointer items-center gap-2 overflow-hidden rounded-full border border-pink-500 fill-none p-2 px-3 font-extrabold text-pink-500 transition-all peer-checked:fill-pink-500 peer-checked:hover:text-white active:scale-90">
                  <div className="z-10 transition group-hover:translate-x-4">
                    FAVORITE
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 transition duration-500 group-hover:scale-[1500%] group-hover:-translate-x-10"
                  >
                    <path
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </div>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoryGrid;
