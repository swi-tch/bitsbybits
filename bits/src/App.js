import React, { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
  const [overlayVisible, setOverlayVisible] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    // Load the video
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, []);

  const startVideo = () => {
    if (videoRef.current) {
      videoRef.current.play(); // Attempt to play the video
      setOverlayVisible(false); // Hide overlay
    }
  };

  return (
    <div className="App" onClick={startVideo}>
      {overlayVisible && <div className="overlay">CLICK</div>}
      <div className="video-container">
        <video
          loop
          muted={false}
          autoPlay
          ref={videoRef}
          id="bitbybit"
          style={{ opacity: overlayVisible ? 0 : 1 }} // Control opacity directly
        >
          <source src="/build_stuff_break_stuff_long.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
    </div>
  );
}

export default App;
