import React, { ReactNode, useEffect, useState } from "react";
import cx from "classnames";
import { v4 as uuid } from "uuid";

export type OptionType = {
  label: ReactNode;
  value: string;
};

type SelectProps = {
  label: ReactNode;
  isRequired?: boolean;
  options: OptionType[];
  value: OptionType | null;
  onChange: (option: OptionType) => void;
};

const Select = ({
  label,
  isRequired,
  options,
  value,
  onChange,
}: SelectProps) => {
  const uniqId = uuid();
  const [isOpen, setIsOpen] = useState(false);

  const onSelectHandler = (selectedOption: OptionType) => {
    onChange(selectedOption);
    setTimeout(() => {
      setIsOpen(false);
    });
  };

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode === 32 && document.activeElement?.id === uniqId) {
        setIsOpen(true);
      }
    });
  }, []);

  return (
    <div>
      <div className="__label">
        {label}{" "}
        {isRequired && <span className="__support_requred_star">*</span>}
      </div>

      <div className="relative select-none">
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          tabIndex={0}
          id={uniqId}
          className="__input flex items-center justify-between cursor-pointer"
        >
          <p className="text-[#576993] text-xl">
            {value ? (
              <span className="text-white">{value.label}</span>
            ) : (
              "Select"
            )}
          </p>
          <span className={cx(isOpen && "rotate-180", "duration-150")}>
            <ArrowDown />
          </span>
        </div>

        <div
          className={cx(
            "absolute top-[calc(100%+4px)] left-0 bg-[#1C233D] w-full z-[15] border border-[#8FA9E7]/50 rounded-[10px] overflow-hidden py-1.5 duration-150",
            isOpen
              ? "translate-y-0 opacity-100 pointer-events-auto"
              : "translate-y-5 opacity-0 pointer-events-none",
          )}
        >
          {options.map((option, i) => {
            const isActive = value?.value === option.value;
            return (
              <div
                onClick={() => onSelectHandler(option)}
                key={i}
                className={cx(
                  "px-5 py-2.5 text-lg text-[#9EBBFF] hover:bg-[#262D47] duration-100 rounded-[10px] cursor-pointer",
                  isActive && "bg-[#262D47] font-medium  !text-white",
                )}
              >
                {option.label}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Select;

const ArrowDown = () => {
  return (
    <svg
      width="20"
      height="12"
      viewBox="0 0 20 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.3122 0.845509L10.33 8.1495L18.3478 0.845511L20 2.35066L10.33 11.1602L0.660035 2.35066L2.3122 0.845509Z"
        fill="#576993"
      />
      <path
        d="M2.3122 0.845509L10.33 8.1495L18.3478 0.845511L20 2.35066L10.33 11.1602L0.660035 2.35066L2.3122 0.845509Z"
        fill="url(#paint0_linear_3710_5694)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3710_5694"
          x1="22.4175"
          y1="7.27348"
          x2="-2.59651"
          y2="6.03098"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.411458" stopColor="#6396F9" />
          <stop offset="1" stopColor="#00D1FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};
