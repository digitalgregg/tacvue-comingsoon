import React from "react";

const VideoSection = () => {
  return (
    <section className="mt-[125px]">
      <div className="rounded-[30px] overflow-hidden relative w-[94%] mx-auto">
        <img src="/images/video_bg.jpg" alt="video_bg" />

        <button className="w-[140px] h-[140px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <img
            src="/images/play_icon.svg"
            alt="Play"
            className="w-full h-full object-cover"
          />
        </button>
      </div>
    </section>
  );
};

export default VideoSection;
