import React from "react";

const VideoWedding = () => {
  return (
    <>
      <div className="w-full h-full">
        <video loop autoPlay muted>
          <source type="video/mp4" src="/video/video.mp4" />
        </video>
      </div>
    </>
  );
};

export default VideoWedding;
