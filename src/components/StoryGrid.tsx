// import React from "react";
// import StoryCard from "./StoryCard";
// import img1 from "../assets/img1.png";
// import img2 from "../assets/img2.png";
// import img3 from "../assets/img3.png";
// import img4 from "../assets/img4.png";
// import img5 from "../assets/img5.png";
// import img6 from "../assets/img6.png";

// const stories = [
//   {
//     image: img1,
//     title: "Magical Forest",
//     description:
//       "A young girl embarks on a journey through an enchanted forest.",
//   },
//   {
//     image: img2,
//     title: "The Curious Detective",
//     description: "A boy solves mysteries in a village full of talking animals.",
//   },
//   {
//     image: img3,
//     title: "The Land of Cheese",
//     description: "An adventure in a world where everything is made of cheese.",
//   },
//   {
//     image: img4,
//     title: "The Hidden Castle",
//     description: "A princess discovers a hidden castle with a secret.",
//   },
//   {
//     image: img5,
//     title: "The Talking River",
//     description: "A magical river that whispers ancient stories.",
//   },
//   {
//     image: img6,
//     title: "The Starry Night",
//     description:
//       "A boy dreams of flying to the stars and meeting celestial beings.",
//   },
// ];

// const StoryGrid: React.FC = () => {
//   return (
//     <div className="flex justify-center items-center min-h-screen">
//       <div className="p-4">
//         <h2 className="text-xl font-bold text-pink-600 mb-4 text-start">
//           You will like this
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {stories.map((story, index) => (
//             <StoryCard key={index} {...story} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StoryGrid;

import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";

const stories = [
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
  const navigate = useNavigate(); // ✅ Hook for navigation

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
              onClick={() => navigate(`/story/${story.id}`)} // ✅ Navigate on click
            >
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h3 className="text-lg font-semibold mt-2">{story.title}</h3>
              <p className="text-sm text-gray-600">{story.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoryGrid;
