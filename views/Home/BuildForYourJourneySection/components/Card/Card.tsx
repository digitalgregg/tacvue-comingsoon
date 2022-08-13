import Image from "next/image";
import Link from "next/link";
import React from "react";
import cx from "classnames";

type CardProps = {
  title: string;
  imgSrc: string;
  url: string;
  className?: string;
};
const Card = ({ imgSrc, title, url = "#", className = "" }: CardProps) => {
  return (
    <Link href={url}>
      <a
        className={cx(
          "w-full xl:w-[300px] h-[240px] xl:h-[420px] overflow-hidden rounded-[20px] relative block",
          className
        )}
      >
        <Image src={imgSrc} layout="fill" alt={title} />

        <div className="absolute bottom-4 xl:bottom-[30px] left-0 px-3 xl:px-[26px] w-full flex items-center justify-between gap-5">
          <p className="xl:text-[30px] shrink-0">{title}</p>
          {/* <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
          >
            <circle cx="15" cy="15" r="14.5" stroke="white" />
            <path
              d="M23.3536 15.3536C23.5488 15.1583 23.5488 14.8417 23.3536 14.6464L20.1716 11.4645C19.9763 11.2692 19.6597 11.2692 19.4645 11.4645C19.2692 11.6597 19.2692 11.9763 19.4645 12.1716L22.2929 15L19.4645 17.8284C19.2692 18.0237 19.2692 18.3403 19.4645 18.5355C19.6597 18.7308 19.9763 18.7308 20.1716 18.5355L23.3536 15.3536ZM7 15.5L23 15.5V14.5L7 14.5V15.5Z"
              fill="white"
            />
          </svg> */}
        </div>
      </a>
    </Link>
  );
};

export default Card;
