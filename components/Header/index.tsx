import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { SocialIcons } from "../../pages";

function Header() {
  const router = useRouter();
  return (
    <header>
      <nav
        className={
          "flex justify-between w-full py-4 md:py-8 fixed top-0 left-0 z-50 backdrop-blur-sm px-5 xl:px-16 2xl:px-20"
        }
      >
        <div className="flex items-center cursor-pointer w-[140px] md:w-auto">
          <Image
            alt="Tacvue Logo"
            className="mr-2"
            src="/images/tacvue-whitegradient-logo.svg"
            width={180}
            height={55}
            onClick={() => router.push("/")}
          />
        </div>
        <SocialIcons />
      </nav>
    </header>
  );
}

export default Header;
