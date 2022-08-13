import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import cx from "classnames";
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

const Header = () => {
  const router = useRouter();
  return (
    <header className="pt-[30px] pb-5 fixed top-0 left-0 w-full z-[9999] bg-[#15182B]">
      <div className="home_container flex justify-between items-center">
        {/* Logo --Start-- */}
        <Link href="/">
          <a className="max-w-[90px] xl:max-w-[141px] relative z-[99999]">
            <Image
              src={"/images/logo.svg"}
              width={184}
              height={52}
              alt="Tacvue"
            />
          </a>
        </Link>
        {/* Logo --End-- */}

        {/* Navbar --Start-- */}
        <nav className="hidden xl:block">
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
              "py-[14px] hidden xl:inline-block px-[34px] rounded-full enter_multiverse_btn_hover hover:enter_multiverse_btn border-2 border-transparent text-white outline-none"
            }
          >
            LAUNCH APP
          </a>
        </Link>
        {/* Launch App Link --End-- */}

        <MobileHeader />
      </div>
    </header>
  );
};

export default Header;

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="xl:hidden">
      <div
        className="text-white -translate-y-2 relative z-[9999]"
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
