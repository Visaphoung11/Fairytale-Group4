// import React, { useRef } from "react";
// import detail1 from "../assets/detail1.png";
// import detail2 from "../assets/detail2.png";
// import detail3 from "../assets/detail3.png";

// const StoryDetail: React.FC = () => {
//   const audioRef = useRef<HTMLAudioElement | null>(null);

//   const handlePlayAudio = () => {
//     if (audioRef.current) {
//       audioRef.current.play();
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-4 text-gray-800">
//       <h1 className="text-center text-2xl font-bold mb-2">Story Detail</h1>
//       <p className="text-center text-pink-600 font-semibold">1:28 minutes</p>

//       <div className="flex justify-center items-center mt-2">
//         <button
//           className="bg-gray-200 p-2 rounded-full mr-2"
//           onClick={handlePlayAudio}
//         >
//           ▶
//         </button>
//         <audio ref={audioRef} className="w-full" controls>
//           <source src="" type="audio/mp3" />
//         </audio>
//       </div>

//       <img className="w-full rounded-lg mt-4" src={detail1} alt="Story Cover" />

//       <p className="mt-4">
//         In the heart of the Verdant Expanse, where trees whispered secrets older
//         than time, lived a young cartographer. Her days were spent mapping
//         uncharted trails, her ink-stained fingers tracing paths no one dared to
//         tread. She carried a peculiar heirloom—a brass compass etched with
//         runes, passed down from her grandmother, who swore it pointed not to the
//         north, but to destiny.
//       </p>

//       <img className="w-full rounded-lg mt-4" src={detail2} alt="Story Scene" />

//       <p className="mt-4">
//         In the heart of the Verdant Expanse, where trees whispered secrets older
//         than time, lived a young cartographer. Her days were spent mapping
//         uncharted trails, her ink-stained fingers tracing paths no one dared to
//         tread. She carried a peculiar heirloom—a brass compass etched with
//         runes, passed down from her grandmother, who swore it pointed not to the
//         north, but to destiny.
//       </p>
//       <img className="w-full rounded-lg mt-4" src={detail3} alt="Story Scene" />

//       <p className="mt-4">
//         In the heart of the Verdant Expanse, where trees whispered secrets older
//         than time, lived a young cartographer. Her days were spent mapping
//         uncharted trails, her ink-stained fingers tracing paths no one dared to
//         tread. She carried a peculiar heirloom—a brass compass etched with
//         runes, passed down from her grandmother, who swore it pointed not to the
//         north, but to destiny.
//       </p>
//     </div>
//   );
// };

// export default StoryDetail;

import React from "react";
import { useParams } from "react-router-dom";
import detail1 from "../assets/detail1.png";
import detail2 from "../assets/detail2.png";
import detail3 from "../assets/detail3.png";
import detail4 from "../assets/img1.png";
import detail5 from "../assets/img2.png";
import detail6 from "../assets/img3.png";
import { Heart } from "lucide-react";
import Footer from "../components/footer";

const stories = [
  {
    id: 1,
    title: "Magical Forest",
    description:
      "Once upon a time, in a land where the mountains kissed the sky and the rivers sang lullabies, there lived a young girl named Elara. She was known throughout the village of Eldergrove for her kind heart and her curious spirit. Elara’s hair shimmered like spun gold, and her eyes held the deep blue of twilight skies. But what set her apart most was her gift—she could hear the whispers of the forest, the secrets carried on the wind by the trees and the creatures within.",
    image: detail1,
  },
  {
    id: 2,
    title: "The Curious Detective",
    description:
      "One crisp autumn day, as the leaves turned to shades of amber and crimson, a shadow fell over Eldergrove. The village well, which had provided sweet, clear water for generations, ran dry. The elders murmured of a curse, while the children whispered of a beast that had stolen the water’s spirit. Desperate, the villagers turned to Elara, for they believed her connection to the forest might hold the key to their salvation.",
    image: detail2,
  },
  {
    id: 3,
    title: "The Land of Cheese",
    description:
      "With a woven basket of bread and a small silver flute her grandmother had given her, Elara set off into the heart of the Whispering Woods. The trees greeted her with rustling sighs, guiding her deeper until the sunlight faded into a soft, emerald glow. After hours of walking, she came upon a glade where a towering willow stood, its branches drooping as if in sorrow. Beneath it sat a creature unlike any she had seen—a dragon, small as a pony, with scales of mossy green and eyes like polished river stones.",
    image: detail3,
  },
  {
    id: 4,
    title: "Magical Forest",
    description:
      "Once upon a time, in a land where the mountains kissed the sky and the rivers sang lullabies, there lived a young girl named Elara. She was known throughout the village of Eldergrove for her kind heart and her curious spirit. Elara’s hair shimmered like spun gold, and her eyes held the deep blue of twilight skies. But what set her apart most was her gift—she could hear the whispers of the forest, the secrets carried on the wind by the trees and the creatures within.",
    image: detail4,
  },
  {
    id: 5,
    title: "The Curious Detective",
    description:
      "One crisp autumn day, as the leaves turned to shades of amber and crimson, a shadow fell over Eldergrove. The village well, which had provided sweet, clear water for generations, ran dry. The elders murmured of a curse, while the children whispered of a beast that had stolen the water’s spirit. Desperate, the villagers turned to Elara, for they believed her connection to the forest might hold the key to their salvation.",
    image: detail5,
  },
  {
    id: 6,
    title: "The Land of Cheese",
    description:
      "With a woven basket of bread and a small silver flute her grandmother had given her, Elara set off into the heart of the Whispering Woods. The trees greeted her with rustling sighs, guiding her deeper until the sunlight faded into a soft, emerald glow. After hours of walking, she came upon a glade where a towering willow stood, its branches drooping as if in sorrow. Beneath it sat a creature unlike any she had seen—a dragon, small as a pony, with scales of mossy green and eyes like polished river stones.",
    image: detail6,
  },
];

const StoryDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const story = stories.find((s) => String(s.id) === id);

  if (!story) {
    return <p className="text-center text-red-500">Story not found</p>;
  }

  return (
    <div className="flex flex-col mt-30 min-h-screen">
      <div className="max-w-2xl mx-auto flex-grow p-4 text-gray-800">
        <h1 className="text-center text-2xl font-bold mb-2">Story Detail</h1>
        <div className="flex justify-center items-center gap-2 text-pink-600 font-semibold">
          <p>1:28 minutes</p>
          <Heart className="w-5 h-5 cursor-pointer" />
        </div>
        <div className="flex justify-center mt-4">
          <audio controls className="w-full max-w-md">
            <source src="/path-to-audio.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <img
          className="w-full rounded-lg mt-4"
          src={story.image}
          alt={story.title}
        />
        <p className="mt-4">{story.description}</p>
        <img
          className="w-full rounded-lg mt-4"
          src={detail2}
          alt="Additional scene"
        />
        <p className="mt-4">{story.description}</p>
        <img
          className="w-full rounded-lg mt-4"
          src={detail3}
          alt="Another scene"
        />
      </div>
      <Footer />
    </div>
  );
};

export default StoryDetail;
