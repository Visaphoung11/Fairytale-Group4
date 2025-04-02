import React from "react";
import StoryCard from "./StoryCard";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";

const stories = [
  {
    image: img1,
    title: "Magical Forest",
    description:
      "A young girl embarks on a journey through an enchanted forest.",
  },
  {
    image: img2,
    title: "The Curious Detective",
    description: "A boy solves mysteries in a village full of talking animals.",
  },
  {
    image: img3,
    title: "The Land of Cheese",
    description: "An adventure in a world where everything is made of cheese.",
  },
  {
    image: img4,
    title: "The Hidden Castle",
    description: "A princess discovers a hidden castle with a secret.",
  },
  {
    image: img5,
    title: "The Talking River",
    description: "A magical river that whispers ancient stories.",
  },
  {
    image: img6,
    title: "The Starry Night",
    description:
      "A boy dreams of flying to the stars and meeting celestial beings.",
  },
];

const StoryGrid: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-4">
        <h2 className="text-xl font-bold text-pink-600 mb-4 text-start">
          You will like this
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {stories.map((story, index) => (
            <StoryCard key={index} {...story} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoryGrid;
