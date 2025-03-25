import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
import video4 from "../assets/video4.mp4";

const Header = () => {
  const [videoIndex, setVideoIndex] = useState(0);
  const [showNewVideo, setShowNewVideo] = useState(true);
  const videoRef = useRef(null);

  const videos = [video1, video2, video3, video4];

  // Function to play next video on click
  const handleVideoClick = () => {
    setShowNewVideo(false);
    setTimeout(() => {
      setVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
      setShowNewVideo(true);
    }, 0); // Smooth transition delay
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video (Click to Change) */}
      <video
        ref={videoRef}
        src={videos[videoIndex]}
        autoPlay
        loop={false}
        muted
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
          showNewVideo ? "opacity-100" : "opacity-0"
        }`}
        onEnded={handleVideoClick} // Auto-play next video when one ends
        onClick={handleVideoClick} // Click to change video
      />

      {/* Navbar (Appears After Video Starts) */}
      <Navbar />
    </div>
  );
};

export default Header;
