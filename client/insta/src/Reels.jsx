import React, { useRef, useEffect, useState } from "react";
import "./Reels.css";

const reelsData = [
  { id: 1, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", likes: 120, caption: "Amazing video! 😍" },
  { id: 2, videoUrl: "https://www.w3schools.com/html/movie.mp4", likes: 95, caption: "Check this out! 🔥" },
  { id: 3, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", likes: 200, caption: "Full screen vibes!" },
];

const Reel = ({ video, likes, caption, isActive, onLike }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isActive) videoRef.current.play();
    else videoRef.current.pause();
  }, [isActive]);

  return (
    <div className="reel">
      <video ref={videoRef} src={video} loop muted className="reel-video" />
      <div className="reel-overlay">
        <div className="reel-caption">{caption}</div>
        <div className="reel-actions">
          <button onClick={onLike}>❤️ {likes}</button>
          <button>💬 Comment</button>
        </div>
      </div>
    </div>
  );
};

const Reels = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [likes, setLikes] = useState(reelsData.map(r => r.likes));

  // Handle scroll to change active video
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const index = Math.round(scrollTop / window.innerHeight);
    setActiveIndex(Math.min(Math.max(index, 0), reelsData.length - 1));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index] += 1;
    setLikes(newLikes);
  };

  return (
    <div className="reels-page">
      {reelsData.map((reel, index) => (
        <div key={reel.id} className="reel-container">
          <Reel
            video={reel.videoUrl}
            caption={reel.caption}
            likes={likes[index]}
            isActive={index === activeIndex}
            onLike={() => handleLike(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default Reels;
