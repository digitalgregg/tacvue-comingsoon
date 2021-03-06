import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { SocialIcons } from "../../pages";
import GradientSwitch from "../GradientSwitch";

function Header() {
  const router = useRouter();

  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const getTheme = localStorage.getItem("theme");

    if (getTheme === "dark") {
      setDarkTheme();
    } else {
      if (getTheme === "light") {
        setLightTheme();
      } else {
        setDarkTheme();
      }
    }

    setTimeout(() => {
      document.body.style.opacity = "1";
      document.body.style.pointerEvents = "auto";
    }, 150);
  }, []);

  const setDarkTheme = () => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    setTheme("dark");
  };

  const setLightTheme = () => {
    document.documentElement.classList.remove("dark");
    localStorage.removeItem("theme");
    setTheme("light");
  };

  const themeHandlerChange = () => {
    setTheme((currentTheme) => {
      if (currentTheme === "light") {
        setDarkTheme();
        return "dark";
      } else {
        setLightTheme();
        return "light";
      }
    });
  };

  return (
    <header>
      <nav
        className={
          "flex justify-between w-full py-4 pb-2 md:py-8 md:pb-3 fixed top-0 left-0 z-50 px-5 xl:px-16 2xl:px-20"
        }
      >
        <div className="items-center cursor-pointer w-[140px] md:w-auto h-[55px]">
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

        <div className="translate-y-1.5">
          <Link
            href={"https://t.co/JSCz7YdhnD"}
            // onClick={modalHandleOpen}
          >
            <a className="btn_gradient !px-5 lg:!px-10">APPLY TO LAUNCHPAD</a>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
