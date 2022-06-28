import classNames from "classnames";
import React, { ReactNode } from "react";
import { GradientText } from "../Marketplace/Components/CommonStyles";
import { IoCloseOutline } from "react-icons/io5";
import { CircularProgress, Modal } from "@mui/material";

type RegisterModalLayoutProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  title: ReactNode;
};
const RegisterModalLayout = ({
  open,
  onClose,
  children,
  title,
}: RegisterModalLayoutProps) => {
  return (
    <Modal onClose={onClose} open={open}>
      <div className="px-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[95vh] overflow-y-auto">
        <div className="w-[88vw] max-w-[900px] bg-[#15192B] rounded-[20px] px-5 lg:px-14 pb-14">
          <div className="flex items-center justify-between py-[30px] border-b border-[#2E3C5E]">
            <h4
              className={classNames(
                GradientText,
                "text-[30px] leading-[36px] lg:text-[48px] lg:leading-[50px] font-spaced",
              )}
            >
              {title}
            </h4>

            <div
              className="w-12 h-12 rounded-full flex items-center justify-center bg-[#2E3C5E] text-white cursor-pointer"
              onClick={onClose}
            >
              <IoCloseOutline size={25} />
            </div>
          </div>
          {children}
        </div>
      </div>
    </Modal>
  );
};

export default RegisterModalLayout;

export const RegisterModalFooter = ({
  onClose,
  isSubmiting,
}: {
  onClose: () => void;
  isSubmiting: boolean;
}) => {
  return (
    <div className="mt-8 flex flex-col md:flex-row w-full justify-center gap-5 lg:gap-7">
      <button
        type="button"
        onClick={onClose}
        className="text-base lg:text-xl font-medium  py-4 shrink-0 px-[80px] rounded-full text-[#576993] hover:text-[#6679a5] border-[3px] border-[#576993] hover:border-[#6679a5]"
      >
        Cancel
      </button>
      <button
        disabled={isSubmiting}
        style={{
          background:
            "linear-gradient(91.52deg, #6396F9 40.77%, #00D1FF 115.11%), #576993",
        }}
        type="submit"
        className="text-base lg:text-xl font-medium py-4 shrink-0 px-[80px] rounded-full relative"
      >
        {isSubmiting && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[46%]">
            <CircularProgress size={25} sx={{ color: "#fff" }} />
          </div>
        )}
        <span
          className={classNames(isSubmiting && "opacity-0 pointer-events-none")}
        >
          Submit
        </span>
      </button>
    </div>
  );
};
