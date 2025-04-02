import React from "react";

type StoryCardProps = {
  image: string;
  title: string;
  description: string;
};

const StoryCard: React.FC<StoryCardProps> = ({ image, title, description }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <img className="w-full h-40 object-cover" src={image} alt={title} />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default StoryCard;
