import classNames from "classnames";
import React from "react";
function GradientSwitch(props: any) {
  const { className = "" } = props;
  return (
    <label>
      <input
        type="checkbox"
        className={classNames(
          "gradient_checkbox_input sr-only opacity-0 pointer-events-none",
          className,
        )}
        {...props}
      />
      <div className="gradient_checkbox_wrapper bg-[#576993] cursor-pointer px-0.5 py-[1.5px] rounded-full overflow-hidden w-[65px] h-[33px]">
        <div
          className={classNames(
            "gradient_checkbox_inner_wrapper bg-[#1E2942] flex items-center px-1 w-full h-full rounded-full",
          )}
        >
          <div className="greadient_checkbox_circle duration-200 w-[21px] h-[21px] rounded-full bg-[#576993]"></div>
        </div>
      </div>
    </label>
  );
}

export default GradientSwitch;
