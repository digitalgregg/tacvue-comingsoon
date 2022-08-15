import { Modal } from "@mui/material";
import React, { useState } from "react";
import cx from "classnames";
import { GradientText } from "../Marketplace/Components/CommonStyles";
import { IoCloseOutline } from "react-icons/io5";
import Input from "../Input";
import { whiteGlovesServices } from "../../config/constants";
import { RegisterModalFooter } from "../RegisterModalLayout";

type ApplyToLaunchpadModalProps = {
  open: boolean;
  onClose: () => void;
};

const ApplyToLaunchpadModal = ({
  open,
  onClose,
}: ApplyToLaunchpadModalProps) => {
  const [selectedCard, setSelectedCard] = useState<any[]>([]);

  const selectCardHandler = (card) => {
    setSelectedCard((prev) => {
      if (prev.find((e) => e?.value === card.value)) {
        return prev.filter((e) => e?.value !== card.value);
      } else {
        return [...prev, card];
      }
    });
  };
  return (
    <Modal onClose={onClose} open={open}>
      <div className="px-5 lg:px-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[95vh] overflow-y-auto scrollbar_thin">
        <div className="w-[100vw] lg:max-w-[550px] bg-[#15192B] rounded-[20px] px-5 py-8 lg:px-[30px] lg:py-10">
          <div id="vbtEFWrapper-76529">
            <div
              className="vboutEmbedFormBox"
              id="vboutEmbedFormBox-76529"
              data-vbtfc="a0f74b93062bee3c055f9a112dca7ee9"
            ></div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ApplyToLaunchpadModal;

const CheckIcon = () => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22.0002C6.477 22.0002 2 17.5232 2 12.0002C2 6.47724 6.477 2.00024 12 2.00024C17.523 2.00024 22 6.47724 22 12.0002C22 17.5232 17.523 22.0002 12 22.0002ZM11.003 16.0002L18.073 8.92924L16.659 7.51524L11.003 13.1722L8.174 10.3432L6.76 11.7572L11.003 16.0002Z"
        fill="#576993"
      />
      <path
        d="M12 22.0002C6.477 22.0002 2 17.5232 2 12.0002C2 6.47724 6.477 2.00024 12 2.00024C17.523 2.00024 22 6.47724 22 12.0002C22 17.5232 17.523 22.0002 12 22.0002ZM11.003 16.0002L18.073 8.92924L16.659 7.51524L11.003 13.1722L8.174 10.3432L6.76 11.7572L11.003 16.0002Z"
        fill="url(#paint0_linear_4171_8640)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4171_8640"
          x1="-0.5"
          y1="9.53648"
          x2="25.4133"
          y2="10.223"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.411458" stopColor="#6396F9" />
          <stop offset={1} stopColor="#00D1FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};
