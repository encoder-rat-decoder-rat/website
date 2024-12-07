import React from 'react';
import './VideoBackground.css';

const VideoBackground = (props) => {
  const { src, children } = props;

  return (
    <div className="video-background">
      <video autoPlay loop muted>
        <>
        {
          src.map((src) => (
            <source
              src={src}
              type="video/mp4"
              key={src}
            />
          ))
        }
          Your browser does not support the video tag.
          </>
      </video>
      <div className="section-container">
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;