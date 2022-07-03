import React, { ReactNode } from "react";
import { BsCheck } from "react-icons/bs";

type CheckboxProps = {
  type?: "checkbox";
  label: ReactNode;
} & Omit<React.ComponentProps<"input">, "type">;

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, ...props }, ref) => {
    return (
      <label className="flex items-center gap-4 cursor-pointer select-none">
        <div className="relative w-[20px] h-[20px]">
          <input
            ref={ref}
            {...props}
            type="checkbox"
            className="peer sr-only"
          />
          <div className="border rounded border-[#465384] peer-checked:hidden w-full h-full"></div>
          <div
            style={{
              background:
                "linear-gradient(91.52deg, #6396F9 40.77%, #00D1FF 115.11%), #576993",
            }}
            className="w-full text-white h-full rounded items-center justify-center hidden peer-checked:flex"
          >
            <BsCheck size={20} />
          </div>
        </div>

        <p className="text-sm lg:text-base font-medium text-[#9EBBFF]">
          {label}
        </p>
      </label>
    );
  },
);

Checkbox.displayName = "Checkbox";
export default Checkbox;
