import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import classNames from "classnames";
import React, { ReactNode } from "react";
import { modalStyle } from "../../pages";
import { GradientText } from "../Marketplace/Components/CommonStyles";
import { IoCloseOutline } from "react-icons/io5";

type RegisterModalProps = {
  open: boolean;
  onClose: () => void;
};
const RegisterModal = ({ open, onClose }: RegisterModalProps) => {
  return (
    <Modal onClose={onClose} open={open}>
      <div className="px-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[95vh] overflow-y-auto">
        <div className="w-[88vw] max-w-[850px] bg-[#15192B] rounded-[20px] px-5 lg:px-14 pb-14">
          <div className="flex items-center justify-between py-[30px] border-b border-[#2E3C5E]">
            <h4
              className={classNames(
                GradientText,
                "text-[30px] leading-[36px] lg:text-[48px] lg:leading-[50px] font-spaced",
              )}
            >
              GET STARTED
            </h4>

            <div
              className="w-12 h-12 rounded-full flex items-center justify-center bg-[#2E3C5E] text-white cursor-pointer"
              onClick={onClose}
            >
              <IoCloseOutline size={25} />
            </div>
          </div>

          <div className="mt-10 grid  grid-cols-1 gap-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Input label="First Name" placeholder="Your first name here" />
              <Input label="Last Name" placeholder="Your last name here" />
            </div>
            <Input label="Email" type={"email"} placeholder="Your email here" />
            <label className="w-full">
              <p className="text-base lg:text-xl font-semibold text-[#9EBBFF] mb-5">
                Message
              </p>
              <textarea
                placeholder="Type your message here"
                className="__input resize-none"
                rows={4}
              ></textarea>
            </label>
          </div>
          <div className="mt-8 flex flex-col md:flex-row w-full justify-center gap-5 lg:gap-7">
            <button
              onClick={onClose}
              className="text-base lg:text-xl font-medium  py-4 shrink-0 px-[80px] rounded-full text-[#576993] hover:text-[#6679a5] border-[3px] border-[#576993] hover:border-[#6679a5]"
            >
              Cancel
            </button>
            <button
              style={{
                background:
                  "linear-gradient(91.52deg, #6396F9 40.77%, #00D1FF 115.11%), #576993",
              }}
              className="text-base lg:text-xl font-medium py-4 shrink-0 px-[80px] rounded-full"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default RegisterModal;

type InputProps = {
  label: ReactNode;
} & React.ComponentProps<"input">;
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, type = "text", ...props }, ref) => {
    return (
      <label className="w-full">
        <div className="text-base lg:text-xl font-semibold text-[#9EBBFF] mb-5">
          {label}
        </div>
        <input ref={ref} {...props} type={type} className="__input" />
      </label>
    );
  },
);
Input.displayName = "Input";
