"use client"
import React, { useState } from "react";

export default function Home() {
  const [showOverlay, setShowOverlay] = useState(true);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const handleStartExperience = () => {
    setShowOverlay(false);
    if (audioRef.current) {
      audioRef.current.volume = 0.1;
      audioRef.current.play();
    }
  };

  return (
    <div className="relative">
      <audio ref={audioRef} src={"/music/music.mp3"} loop />

      {showOverlay && (
        <div
          onClick={handleStartExperience}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black cursor-pointer"
        >
          <div className="text-center text-white px-8">
            <h1 className="text-4xl font-bold mb-4">Space Apps Challenge 2025 Submission</h1>
            <p className="text-xl mb-2">By Celian</p>
            <p className="mb-4">This website is an interactive website with music. Use a desktop for a better experience.</p>
            <p className="text-lg animate-pulse">Press anywhere to continue</p>
          </div>
        </div>
      )}

      <iframe
        className="min-w-full h-[100vh]"
        src="https://embed.figma.com/proto/9TcoKksbz0sIbF4zcIMAYC/Aurealis-Prototype?node-id=4-20&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&hotspot-hints=0&embed-host=share&hide-ui=1"
        allowFullScreen
      />
    </div>
  );
}