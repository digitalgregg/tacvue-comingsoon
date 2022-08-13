import React, { useEffect, useRef } from "react";
import cx from "classnames";

type BigText = {
  title: string;
  outlinedText?: boolean;
  onClick: () => void;
};
const outlinedTextStyle: any = {
  "-webkit-text-stroke-width": "1px",
  "-webkit-text-stroke-color": "white",
};

const BigText = ({ title, outlinedText = false, onClick }: BigText) => {
  const floatingBoxRef = useRef<HTMLDivElement>(null!);
  const floatingBoxWrapperRef = useRef<HTMLDivElement>(null!);

  // useEffect(() => {
  //   floatingBoxWrapperRef.current.addEventListener("mouseenter", (e) => {
  //     // console.log(floatingBoxWrapperRef.current.offsetLeft);
  //     window.addEventListener("mousemove", (e) => {
  //       console.log({
  //         x: e.clientX,
  //         y: e.clientY,
  //       });
  //     });
  //   });
  // }, []);

  return (
    <div
      className="max-w-[1120px] mx-auto group cursor-pointer relative"
      ref={floatingBoxWrapperRef}
      onClick={onClick}
    >
      {/* {dddd && (
        <div
          ref={floatingBoxRef}
          className="absolute top-1/2 -translate-y-1/2 left-5 w-[332px] h-[461px] bg-slate-800 rounded-[20px] pointer-events-none"
        ></div>
      )} */}
      <h2
        style={outlinedText ? outlinedTextStyle : {}}
        className={cx(
          "home_title_md text-center py-6 xl:py-[100px] group-hover:gradient_text z-[5] relative",
          outlinedText && "text-transparent hover:text_stroke_transparent"
        )}
      >
        {title}
      </h2>
      <div className="w-full h-0.5 bg-[#576993] group-hover:home_big_text_gradient_border"></div>
    </div>
  );
};

export default BigText;
