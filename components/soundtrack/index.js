import React, { useState, useEffect, useRef } from "react";
import { HiPause, HiPlay } from "react-icons/hi";

const SoundTrack = () => {
  const [latestScrollY, setLatestScrollY] = useState(false);
  const [showAudio, setShowAudio] = useState(true);
  const [isPlay, setIsPlay] = useState(false);
  const audioEl = useRef();

  const playSong = () => {
    setIsPlay(true);
    audioEl.current.play();
  };
  const pauseSong = () => {
    setIsPlay(false);
    audioEl.current.pause();
  };

  useEffect(() => {
    const hideAudio = () => {
      const scrollY = window.scrollY;
      if (typeof window !== "undefined") {
        if (scrollY > latestScrollY) {
          setShowAudio(false);
        } else {
          setShowAudio(true);
        }
      }
      setLatestScrollY(scrollY);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", hideAudio);

      return () => {
        window.removeEventListener("scroll", hideAudio);
      };
    }
  }, [latestScrollY]);

  return (
    <>
      <audio
        ref={audioEl}
        autoPlay
        controls
        loop
        className={`z-50 shadow-xl delay-200 rounded-full fixed top-0 left-0 right-0 backdrop-blur transition-all duration-300  w-0 ${
          showAudio
            ? "w-44"
            : "z-50 fixed shadow-xl delay-300 rounded-full top-0 left-0 right-0 backdrop-blur transition-all duration-300  w-0 "
        }`}
      >
        <source src="/audio/audio.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
};

export default SoundTrack;

//  <button
//    onClick={!isPlay ? playSong : pauseSong}
//    className={` z-50 fixed top-0 left-0 right-0 backdrop-blur  w-0 shadow-lg shadow-black/40  transition-all duration-500 delay-75  p-2 bg-gradient-to-tr from-orange-800/70 to-amber-200
//           ${
//             showAudio
//               ? "w-32"
//               : "z-50 fixed top-0 left-0 right-0 backdrop-blur  w-0  shadow-lg shadow-black/40   opacity-0 transition-all duration-500  delay-100  p-2  bg-gradient-to-tr to-amber-200 from-orange-800/70 "
//           }`}
//  >
//    <audio ref={audioEl} controls autoplay loop>
//      <source src="/audio/audio.mp3" type="audio/mp3" />
//    </audio>
//  </button>;
