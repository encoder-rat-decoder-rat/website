import React from 'react';
import './VideoBackground.css';

const VideoBackground = (props) => {
  const { src, children, aspectRatio=1 } = props;

  if (src.some(url => url.includes('vimeo'))) {
    const vimeoUrlParameters = [
      'background=1',
      'title=0',
      'loop=1',
    ]
    return (
      <div className="video-background iframe-background">
        <iframe
          src={`${src[0]}?${vimeoUrlParameters.join('&amp;')}`}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          title='background video'
          style={{height: aspectRatio*100 + `vw`}}
        ></iframe>
        <div className="section-container">
          {children}
        </div>
      </div>
    )
  }

  return (
    <div className="video-background">
      <video autoPlay loop muted playsInline>
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