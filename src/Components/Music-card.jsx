import React, { useRef } from "react";

// Import your songs
import song1 from "../assets/song/song3.mp3";
import song2 from "../assets/song/song2.mp3";
import song3 from "../assets/song/song1.mp3";

const MusicCard = () => {
  const audioRefs = useRef([]);

  const data = [
    {
      name: "Nasha",
      image: "https://i.ytimg.com/vi/tBrjqcKiyUk/maxresdefault.jpg",
      song: song1,
    },
    {
      name: "Aaj ki RAAT",
      image: "https://i.ytimg.com/vi/hxMNYkLN7tI/maxresdefault.jpg",
      song: song2,
    },
    {
      name: "Uyi Amma",
      image: "https://www.lyricsbogie.com/wp-content/uploads/2025/01/uyi-amma-lyrics.jpg",
      song: song3,
    },
  ];

  const handlePlay = (index) => {
    audioRefs.current.forEach((audio, i) => {
      if (audio) {
        if (i === index) {
          audio.play();
        } else {
          audio.pause();
          audio.currentTime = 0;
        }
      }
    });
  };

  const handlePause = (index) => {
    const audio = audioRefs.current[index];
    if (audio) {
      audio.pause();
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#151515] flex flex-wrap justify-center items-center gap-6 p-4">
      {data.map((item, index) => (
        <div
          key={index}
          className="w-full sm:w-[300px] md:w-[280px] bg-[rgba(57,57,58)] rounded-xl flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-300 p-4"
        >
          <img
            className="rounded-md w-full h-40 object-cover"
            src={item.image}
            alt={item.name}
          />
          <h3 className="text-white text-xl font-semibold font-Poppins mt-3 text-center">
            {item.name}
          </h3>
          <audio
            ref={(el) => (audioRefs.current[index] = el)}
            src={item.song}
          />
          <div className="flex justify-between gap-4 mt-4">
            <button
              className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 cursor-pointer"
              onClick={() => handlePlay(index)}
            >
              Play
            </button>
            <button
              className="px-4 py-2 bg-red-700 text-white rounded hover:bg-red-800 cursor-pointer"
              onClick={() => handlePause(index)}
            >
              Pause
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MusicCard;
