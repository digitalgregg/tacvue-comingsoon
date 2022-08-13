import cx from "classnames";
import { GradientText } from "../../../../../../components/Marketplace/Components/CommonStyles";

type NavDot = {
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
  isActive: boolean;
  title: string;
  onClick: () => void;
};

const NavDot = ({
  isActive,
  title,
  bottom = "auto",
  left = "auto",
  right = "auto",
  top = "auto",
  onClick,
}: NavDot) => {
  return (
    <div
      style={{ top, bottom, right, left }}
      className="absolute group cursor-pointer z-[2]"
      onClick={onClick}
    >
      <div
        className={cx(
          "w-2.5 h-2.5 bg-[#576993] rounded-full relative duration-150",
          !isActive && "group-hover:scale-[1.3]",
        )}
      >
        <div
          className={cx(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-150",
            isActive
              ? "scale-100 pointer-events-auto delay-[400ms]"
              : "scale-0 pointer-events-none",
          )}
        >
          <GradientDot />
        </div>
      </div>
      <p
        className={cx(
          "font-spaced absolute left-1/2 -translate-x-1/2 bottom-0 duration-150",
          isActive
            ? `${GradientText} text-[32px] leading-[32px] pb-[40px] delay-[400ms]`
            : "text-[24px] leading-[24px] pb-7",
        )}
      >
        {title}
      </p>
    </div>
  );
};

export default NavDot;

const GradientDot = () => {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={16} cy={16} r={12} fill="#576993" />
      <circle cx={16} cy={16} r={12} fill="url(#paint0_linear_4313_9137)" />
      <circle cx={16} cy={16} r="15.5" stroke="#576993" />
      <circle cx={16} cy={16} r="15.5" stroke="url(#paint1_linear_4313_9137)" />
      <defs>
        <linearGradient
          id="paint0_linear_4313_9137"
          x1={1}
          y1="13.0435"
          x2="32.096"
          y2="13.8673"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.411458" stopColor="#6396F9" />
          <stop offset={1} stopColor="#00D1FF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4313_9137"
          x1={-4}
          y1="12.058"
          x2="37.4613"
          y2="13.1564"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.411458" stopColor="#6396F9" />
          <stop offset={1} stopColor="#00D1FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};
