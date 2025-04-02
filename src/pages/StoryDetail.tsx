import React, { useRef } from "react";
import detail1 from "../assets/detail1.png";
import detail2 from "../assets/detail2.png";
import detail3 from "../assets/detail3.png";

const StoryDetail: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 text-gray-800">
      <h1 className="text-center text-2xl font-bold mb-2">Story Detail</h1>
      <p className="text-center text-pink-600 font-semibold">1:28 minutes</p>

      <div className="flex justify-center items-center mt-2">
        <button
          className="bg-gray-200 p-2 rounded-full mr-2"
          onClick={handlePlayAudio}
        >
          ▶
        </button>
        <audio ref={audioRef} className="w-full" controls>
          <source src="" type="audio/mp3" />
        </audio>
      </div>

      <img className="w-full rounded-lg mt-4" src={detail1} alt="Story Cover" />

      <p className="mt-4">
        In the heart of the Verdant Expanse, where trees whispered secrets older
        than time, lived a young cartographer. Her days were spent mapping
        uncharted trails, her ink-stained fingers tracing paths no one dared to
        tread. She carried a peculiar heirloom—a brass compass etched with
        runes, passed down from her grandmother, who swore it pointed not to the
        north, but to destiny.
      </p>

      <img className="w-full rounded-lg mt-4" src={detail2} alt="Story Scene" />

      <p className="mt-4">
        In the heart of the Verdant Expanse, where trees whispered secrets older
        than time, lived a young cartographer. Her days were spent mapping
        uncharted trails, her ink-stained fingers tracing paths no one dared to
        tread. She carried a peculiar heirloom—a brass compass etched with
        runes, passed down from her grandmother, who swore it pointed not to the
        north, but to destiny.
      </p>
      <img className="w-full rounded-lg mt-4" src={detail3} alt="Story Scene" />

      <p className="mt-4">
        In the heart of the Verdant Expanse, where trees whispered secrets older
        than time, lived a young cartographer. Her days were spent mapping
        uncharted trails, her ink-stained fingers tracing paths no one dared to
        tread. She carried a peculiar heirloom—a brass compass etched with
        runes, passed down from her grandmother, who swore it pointed not to the
        north, but to destiny.
      </p>
    </div>
  );
};

export default StoryDetail;
