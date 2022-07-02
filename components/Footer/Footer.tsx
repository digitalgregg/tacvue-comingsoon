import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { SocialIcons } from "../../pages";

const Footer = () => {
  const router = useRouter();
  return (
    <>
      {/* Footer Section --Start-- */}
      <footer>
        <div className="px-5 xl:px-16 2xl:px-20 pb-10 font-sans flex items-center flex-col gap-10 mt-24 lg:mt-36 mb-8">
          {/* <div className="flex items-center gap-8">
            <div className="flex items-center cursor-pointer w-[140px] h-[55px] md:w-auto">
              <span className="hidden dark:inline-block">
                <Image
                  alt="Tacvue Logo"
                  className="mr-2"
                  src="/images/tacvue-whitegradient-logo.svg"
                  width={180}
                  height={55}
                  onClick={() => router.push("/")}
                />
              </span>
              <span className="dark:hidden">
                <Image
                  alt="Tacvue Logo"
                  className="mr-2"
                  src="/images/logo_gradient.svg"
                  width={180}
                  height={55}
                  onClick={() => router.push("/")}
                />
              </span>
            </div>
          </div> */}

          <SocialIcons />
          <p className="text-center capitalize text-[#576993] font-medium">
            copyright © 2022 TacVue, Inc. All Rights Reserved.
          </p>
        </div>
      </footer>
      {/* Footer Section --End-- */}
    </>
  );
};

export default Footer;
