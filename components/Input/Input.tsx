import React, { ReactNode } from "react";

type InputProps = {
  label: ReactNode;
} & React.ComponentProps<"input">;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, type = "text", ...props }, ref) => {
    return (
      <label className="w-full">
        <div className="text-base lg:text-xl font-semibold text-[#9EBBFF] mb-4">
          {label}
        </div>
        <input ref={ref} {...props} type={type} className="__input" />
      </label>
    );
  },
);
Input.displayName = "Input";
export default Input;
