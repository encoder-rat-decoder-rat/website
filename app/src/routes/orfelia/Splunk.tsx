import React from 'react';
import VideoBackground from "../../components/VideoBackground";

const Splunk: React.FC = () => {
  return (
    <>
      <VideoBackground
        src={["https://player.vimeo.com/video/1038435815"]} 
        aspectRatio={16 / 9}
      >
        <h1>Splunk</h1>
      </VideoBackground>
    </>
  );
}

export default Splunk