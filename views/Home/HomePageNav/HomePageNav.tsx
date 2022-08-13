import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import cx from "classnames";
import classNames from "classnames";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { GradientText } from "../../../components/Marketplace/Components/CommonStyles";

const navLinks = [
  {
    text: "FEATURES",
    url: "#features",
  },
  {
    text: "BLUEPRINT",
    url: "/blueprint",
  },
  {
    text: "SOLUTIONS",
    url: "#solutions",
  },
  {
    text: "SUBSCRIBE",
    url: "#footer",
  },
];

export default function HomePageNav() {
  const router = useRouter();

  return (
    <header
      className={classNames(
        "flex justify-between items-center w-full py-4 px-4",
        "xl:px-16 2xl:px-20 top-0 left-0 w-full z-[999] fixed bg-[rgb(14,18,37)]",
      )}
      style={{
        boxShadow: "rgb(4 17 29 / 45%) 0px 0px 8px 0px",
      }}
    >
      <Link href="/">
        <a className="block -mb-3  cursor-pointer max-w-[155px]">
          <Image
            alt="Tacvue Logo"
            src="/images/logo.svg"
            width={180}
            height={55}
          />
        </a>
      </Link>

      {/* Navbar --Start-- */}
      <nav className="hidden xl:flex items-center">
        <ul className="flex items-center gap-[60px]">
          {navLinks.map(({ text, url }, i) => {
            const isActive = router.pathname === url;
            return (
              <li key={i}>
                <Link href={url}>
                  <a
                    className={cx(
                      isActive
                        ? GradientText
                        : "text-[#9EBBFF] hover:gradient_text",
                      "text-[17px] font-medium",
                    )}
                  >
                    {text}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      {/* Navbar --End-- */}

      {/* Launch App Link --Start-- */}
      <Link href="/marketplace">
        <a
          className={
            "py-[10px] hidden xl:inline-block px-[34px] rounded-full enter_multiverse_btn_hover hover:enter_multiverse_btn border-2 border-transparent text-white outline-none opacity-40 pointer-events-none"
          }
        >
          LAUNCH APP
        </a>
      </Link>
      {/* Launch App Link --End-- */}

      <MobileHeader />
    </header>
  );
}

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="xl:hidden">
      <div
        className="text-white -translate-y-1 relative z-[9999]"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <IoMdClose size={22} /> : <FiMenu size={22} />}
      </div>

      {isOpen && (
        <div
          style={{ background: "rgba(21, 24, 43, 0.8)" }}
          className="fixed top-0 left-0 w-full h-screen backdrop-blur-[24px] flex flex-col justify-center items-center space-y-[50px]"
        >
          {navLinks.map(({ text, url }, i) => {
            const isActive = router.pathname === url;
            return (
              <div key={i}>
                <Link href={url}>
                  <a
                    className={cx(
                      isActive
                        ? GradientText
                        : "text-[#9EBBFF] hover:gradient_text",
                      "text-[32px] font-spaced font-medium",
                    )}
                  >
                    {text}
                  </a>
                </Link>
              </div>
            );
          })}

          <div>
            <Link href="/marketplace">
              <a
                className={
                  "py-[17px] block px-[34px] rounded-full enter_multiverse_btn_hover hover:enter_multiverse_btn border-2 border-transparent text-white outline-none"
                }
              >
                LAUNCH APP
              </a>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
