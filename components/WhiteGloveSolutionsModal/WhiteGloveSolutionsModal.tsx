import { Modal } from "@mui/material";
import React, { useState } from "react";
import cx from "classnames";
import { GradientText } from "../Marketplace/Components/CommonStyles";
import { IoCloseOutline } from "react-icons/io5";
import Input from "../Input";
import { whiteGlovesServices } from "../../config/constants";
import { RegisterModalFooter } from "../RegisterModalLayout";

type WhiteGloveSolutionsModalProps = {
  open: boolean;
  onClose: () => void;
};

const WhiteGloveSolutionsModal = ({
  open,
  onClose,
}: WhiteGloveSolutionsModalProps) => {
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
        <div className="w-[100vw] lg:max-w-[1040px] bg-[#15192B] rounded-[20px] px-5 py-8 lg:px-[30px] lg:py-10">
          <div className="flex items-center justify-between pb-[30px] lg:pb-[60px] border-b border-[#2E3C5E]">
            <h4
              className={cx(
                GradientText,
                "text-[30px] leading-[36px] lg:text-[48px] lg:leading-[50px] font-spaced",
              )}
            >
              White Glove Solutions
            </h4>

            <div
              className="w-12 h-12 rounded-full flex items-center justify-center bg-[#2E3C5E] text-white cursor-pointer"
              onClick={onClose}
            >
              <IoCloseOutline size={25} />
            </div>
          </div>

          <div className="mt-[30px] lg:mt-[60px]">
            <form>
              <div className="space-y-[30px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-[30px]">
                  <Input label="First Name" placeholder="First name here" />
                  <Input label="Last Name" placeholder="Last name here" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-[30px]">
                  <Input label="Email" placeholder="Email here" />
                  <Input label="Website" placeholder="https://" />
                </div>

                <label className="w-full block">
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

              <div className="mt-[30px] lg:mt-[60px]">
                <p className="text-base lg:text-xl font-semibold text-[#9EBBFF] mb-5">
                  White glove solutions{" "}
                  <span className="font-normal italic">
                    (Select all that apply)
                  </span>
                </p>

                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-[30px]">
                  {whiteGlovesServices.map((card, i) => {
                    const isSelected = selectedCard.find(
                      (e) => e?.value === card.value,
                    );
                    return (
                      <div
                        onClick={() => selectCardHandler(card)}
                        key={i}
                        className={cx(
                          "px-4 py-[15px] lg:pt-[25px] lg:py-[30px] lg:px-5 lg:pr-14 flex gap-2.5 lg:gap-4 items-center border border-transparent rounded-[10px] relative cursor-pointer duration-150 select-none",
                          isSelected
                            ? "white_glove_card_gradient_border"
                            : "white_glove_card_solid_border",
                        )}
                      >
                        <div className="w-6 h-6 lg:w-11 lg:h-11 lg:translate-y-1 shrink-0">
                          {card.icon}
                        </div>
                        <h6
                          className={cx(
                            isSelected ? GradientText : "text-[#9EBBFF]",
                            "text-sm leading-[16px] lg:text-[24px] font-spaced lg:leading-[26px]",
                          )}
                        >
                          {card.label}
                        </h6>

                        <div
                          className={cx(
                            "absolute top-1/2 -translate-y-1/2 lg:translate-y-0 lg:top-3 right-3 duration-150",
                            isSelected
                              ? "scale-100 pointer-events-auto"
                              : "scale-0 pointer-events-none",
                          )}
                        >
                          <CheckIcon />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <RegisterModalFooter
                  onClose={onClose}
                  isSubmiting={false}
                  className="!justify-end !mt-[60px] !flex-row"
                  btnClassName="!grow px-7 lg:!grow-0 lg:!px-[80px] !py-5"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default WhiteGloveSolutionsModal;

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
