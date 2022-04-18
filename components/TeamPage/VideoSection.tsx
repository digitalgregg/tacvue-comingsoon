import { Box, Modal } from "@mui/material";
import React, { useState } from "react";
import { modalStyle } from "../../pages";

const VideoSection = () => {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const modalHandleClose = () => setmodalIsOpen(false);
  return (
    <section className="mt-[125px]">
      <div className="rounded-[30px] overflow-hidden relative w-[94%] mx-auto">
        <img src="/images/video_bg.jpg" alt="video_bg" />

        <button
          onClick={() => setmodalIsOpen(true)}
          className="w-[100px] md:w-[140px] h-[100px] md:h-[140px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
        >
          <img
            src="/images/play_icon.svg"
            alt="Play"
            className="w-full h-full object-cover"
          />
        </button>
        <Modal
          open={modalIsOpen}
          onClose={modalHandleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            <video
              src="/video/TacVue-Bkgd-header.webm"
              controls
              className="w-full h-full object-cover"
            ></video>
          </Box>
        </Modal>
      </div>
    </section>
  );
};

export default VideoSection;
