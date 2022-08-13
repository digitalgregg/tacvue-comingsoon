import Link from "next/link";
import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";

const socialIcons = [
  {
    icon: <BsTwitter size={24} />,
    url: "https://twitter.com/tacvue",
  },
  {
    icon: <BsInstagram size={24} />,
    url: "https://www.instagram.com/tacvue/",
  },
];

const Footer = () => {
  return (
    <footer className="mt-[60px] xl:mt-[150px] pb-[30px]" id="footer">
      <div className="home_container grid grid-cols-1 xl:grid-cols-[760px,400px] gap-[60px]">
        <div>
          <h4 className="font-spaced text-[32px] leading-[35px] xl:text-[64px] xl:leading-[64px] max-w-[507px]">
            we BUILT <br /> FOR THE PEOPLE, <br /> BY THE PEOPLE
          </h4>

          <div className="flex flex-col md:flex-row max-w-[398px] gap-5 xl:gap-[60px] mt-8 xl:mt-[75px]">
            <div>
              <a
                href="mailto:sales@tacvue.io"
                className="pb-1.5 border-b xl:inline-block border-[#838CA3] text-[#838CA3] text-sm"
              >
                sales@tacvue.io
              </a>
            </div>

            <ul className="flex gap-[30px]">
              {socialIcons.map(({ icon, url }, i) => (
                <li key={i} className="shrink-0">
                  <a href={url} target="_blank" rel="noreferrer" className="block text-[#838CA3]">
                    {icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h5 className="home_title_sm text-[24px] leading-[24px] xl:text-[32px] xl:leading-[35px]">
            Subscribe for updates
          </h5>

          <form className="relative mt-8 xl:mt-[65px] w-full">
            <input
              type="text"
              className="border-b border-[#576993] pr-[65px] pl-5 pt-[13px] pb-[25px] w-full block placeholder:text-[#838CA3] bg-transparent outline-none"
              placeholder="Enter your email"
            />

            <button type="submit" className="absolute top-0 right-0 outline-none">
              <EmailSendIcon />
            </button>
          </form>

          <div className="mt-[60px] xl:mt-[100px]">
            <p className="home_body_text">More Info:</p>
            <ul className="mt-[30px] space-y-5 text-[#9EBBFF] font-medium">
              <li>
                <a href="https://tacvue.gitbook.io/tacvue/" target="_blank" rel="noreferrer">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#">Message Us</a>
              </li>
              <li>
                <Link href="/blueprint">
                  <a>About Us</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom --Start-- */}
      <div className="home_container">
        <div className="mt-10 xl:mt-16 max-w-[783px] home_body_text flex flex-col-reverse items-center xl:items-start gap-y-5 xl:flex-row justify-between text-[#838CA3] text-sm">
          <p className="capitalize">copyright © 2022 TacVue, Inc. All Rights Reserved.</p>

          <div className="flex gap-[100px]">
            <Link href="/terms-of-use">
              <a className="pb-1.5 border-b inline-block border-[#838CA3]">Terms of Use</a>
            </Link>
            <Link href="/privacy-policy">
              <a className="pb-1.5 border-b inline-block border-[#838CA3]">Privacy Policy</a>
            </Link>
          </div>
        </div>
      </div>
      {/* Footer Bottom --End-- */}
    </footer>
  );
};

export default Footer;

const EmailSendIcon = () => {
  return (
    <svg width={48} height={48} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.75 17C18.75 16.5858 18.4142 16.25 18 16.25C17.5858 16.25 17.25 16.5858 17.25 17H18.75ZM34 27L26.5 22.6699V31.3301L34 27ZM17.25 17V26H18.75V17H17.25ZM19 27.75H27.25V26.25H19V27.75ZM17.25 26C17.25 26.9665 18.0335 27.75 19 27.75V26.25C18.8619 26.25 18.75 26.1381 18.75 26H17.25Z"
        fill="#576993"
      />
      <path
        d="M18.75 17C18.75 16.5858 18.4142 16.25 18 16.25C17.5858 16.25 17.25 16.5858 17.25 17H18.75ZM34 27L26.5 22.6699V31.3301L34 27ZM17.25 17V26H18.75V17H17.25ZM19 27.75H27.25V26.25H19V27.75ZM17.25 26C17.25 26.9665 18.0335 27.75 19 27.75V26.25C18.8619 26.25 18.75 26.1381 18.75 26H17.25Z"
        fill="url(#paint0_linear_4275_9470)"
      />
      <rect
        x={1}
        y={1}
        width={46}
        height={46}
        rx={23}
        stroke="url(#paint1_linear_4275_9470)"
        strokeWidth={2}
      />
      <defs>
        <linearGradient
          id="paint0_linear_4275_9470"
          x1={16}
          y1="20.7681"
          x2="36.708"
          y2="21.6459"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.411458" stopColor="#6396F9" />
          <stop offset={1} stopColor="#00D1FF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4275_9470"
          x1={-6}
          y1="18.087"
          x2="56.192"
          y2="19.7345"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.411458" stopColor="#6396F9" />
          <stop offset={1} stopColor="#00D1FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};
