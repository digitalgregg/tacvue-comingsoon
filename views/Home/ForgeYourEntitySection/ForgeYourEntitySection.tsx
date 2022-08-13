import cx from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GradientText } from "../../../components/Marketplace/Components/CommonStyles";

const ForgeYourEntitySection = () => {
  return (
    <section
      style={{
        background: "linear-gradient(237.69deg, #121831 2.21%, #000715 87.3%)",
      }}
      className="py-[30px] xl:py-[150px]"
    >
      <div className="home_container max-w-[1254px] grid grid-cols-1 xl:grid-cols-[418px,auto] xl:gap-[150px]">
        <div className="hidden xl:block">
          <Image
            width={461}
            height={615}
            src="/images/forge_your_entity_section_card.png"
            alt="forge_your_entity_section_card"
          />
        </div>
        <div>
          <h2 className="home_title_md">
            Forge
            <p className="ml-10 xl:ml-[94px]">
              <span className={GradientText}>your</span> entity
            </p>
          </h2>
          <div className="flex justify-center xl:hidden mt-[30px]">
            <Image
              width={461}
              height={615}
              src="/images/forge_your_entity_section_card.png"
              alt="forge_your_entity_section_card"
            />
          </div>
          <div className="mt-[30px] xl:mt-[70px] xl:ml-[94px] flex items-start xl:items-center gap-4 xl:gap-10">
            <div className="relative max-w-[90px] shrink-0 xl:max-w-[160px]">
              <CircleProgress />

              <p
                className={cx(
                  "absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-[20px] xl:text-[40px] font-semibold",
                  GradientText,
                )}
              >
                57%
              </p>
            </div>
            <p className="home_body_text">
              Join a selected community of the firsts entity holders on the
              tacvue Marketplace. With your entity you can earn $RXG, unlock
              exclusive access to content, events, and more!
            </p>
          </div>

          <div className="xl:ml-[26px] mt-[30px] xl:mt-[82px] flex flex-col xl:flex-row gap-4 xl:gap-[30px]">
            {/* <button className="inline-block py-[17px] text-center px-9 rounded-full border-2 border-transparent home_learn_more_btn hover:enter_multiverse_btn_hover group">
              <span
                className={cx(
                  GradientText,
                  "capitalize font-medium group-hover:!text-white",
                )}
              >
                Mint Genesis Entity
              </span>
            </button> */}
            <Link href="/blueprint">
              <a className="inline-block py-[17px] text-center px-9 rounded-full border-2 border-transparent home_learn_more_btn hover:enter_multiverse_btn_hover group">
                <span
                  className={cx(
                    GradientText,
                    "capitalize font-medium group-hover:!text-white",
                  )}
                >
                  Learn More
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgeYourEntitySection;

const CircleProgress = () => {
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M57.348 76.776C58.404 76.776 59.4013 76.9813 60.34 77.392C61.2787 77.7733 62.1 78.316 62.804 79.02C63.508 79.6947 64.0653 80.5013 64.476 81.44C64.8867 82.3493 65.092 83.332 65.092 84.388C65.092 85.444 64.8867 86.4413 64.476 87.38C64.0947 88.3187 63.552 89.14 62.848 89.844C62.144 90.548 61.3227 91.1053 60.384 91.516C59.4453 91.8973 58.448 92.088 57.392 92.088L44.28 92.088C43.7813 92.088 43.3707 91.9267 43.048 91.604C42.7253 91.2813 42.564 90.8707 42.564 90.372C42.564 89.9027 42.7253 89.5067 43.048 89.184C43.3707 88.832 43.7813 88.656 44.28 88.656L57.392 88.656C58.5653 88.656 59.5627 88.2453 60.384 87.424C61.2053 86.6027 61.616 85.5907 61.616 84.388C61.5867 83.2147 61.1467 82.232 60.296 81.44C59.4747 80.6187 58.4773 80.208 57.304 80.208L41.42 80.208L41.42 67.404L62.232 67.404C62.7307 67.404 63.1413 67.5653 63.464 67.888C63.7867 68.2107 63.948 68.6213 63.948 69.12C63.948 69.6187 63.7867 70.0293 63.464 70.352C63.1413 70.6747 62.7307 70.836 62.232 70.836L44.896 70.836L44.896 76.776L57.26 76.776H57.348ZM82.6899 75.588C84.9486 75.588 86.8846 76.3947 88.4979 78.008C90.0819 79.592 90.8739 81.5133 90.8739 83.772C90.8739 84.916 90.6539 85.9867 90.2139 86.984C89.8033 87.9813 89.2166 88.8613 88.4539 89.624C87.6913 90.3573 86.8113 90.944 85.8139 91.384C84.8166 91.824 83.7459 92.044 82.6019 92.044L78.6419 92.044C77.3219 92.044 76.0753 91.7947 74.9019 91.296C73.7286 90.768 72.7019 90.0787 71.8219 89.228C70.9713 88.348 70.2819 87.3213 69.7539 86.148C69.2553 84.9747 69.0059 83.728 69.0059 82.408L69.0059 75.896C69.0059 74.752 69.2113 73.6813 69.6219 72.684C70.0619 71.6867 70.6486 70.8213 71.3819 70.088C72.1446 69.3253 73.0246 68.7387 74.0219 68.328C75.0193 67.888 76.0899 67.668 77.2339 67.668L86.5619 67.668C87.0313 67.668 87.4273 67.844 87.7499 68.196C88.1019 68.5187 88.2779 68.9147 88.2779 69.384C88.2779 69.8827 88.1019 70.308 87.7499 70.66C87.4273 70.9827 87.0313 71.144 86.5619 71.144L77.2339 71.144C75.9139 71.144 74.7993 71.584 73.8899 72.464C73.0099 73.344 72.5406 74.4293 72.4819 75.72L82.6899 75.676V75.588ZM82.7339 88.568C83.3793 88.568 83.9806 88.4507 84.5379 88.216C85.1246 87.952 85.6379 87.6 86.0779 87.16C86.5179 86.72 86.8553 86.2213 87.0899 85.664C87.3539 85.0773 87.4859 84.4613 87.4859 83.816C87.4859 82.496 87.0166 81.3667 86.0779 80.428C85.1099 79.5187 83.9806 79.064 82.6899 79.064L72.4819 79.064V82.364C72.4819 83.2147 72.6433 84.0213 72.9659 84.784C73.2886 85.5173 73.7286 86.1773 74.2859 86.764C74.8726 87.3213 75.5326 87.7613 76.2659 88.084C77.0286 88.4067 77.8353 88.568 78.6859 88.568L82.6899 88.568H82.7339ZM97.2378 92.836L94.6858 90.504L116.73 66.788L119.238 69.164L97.2378 92.836ZM100.45 79.24C99.8044 79.24 99.2031 79.1227 98.6458 78.888C98.0884 78.6533 97.5898 78.3307 97.1498 77.92C96.7391 77.48 96.4164 76.9813 96.1818 76.424C95.9471 75.8667 95.8298 75.2653 95.8298 74.62C95.8298 73.9747 95.9471 73.3733 96.1818 72.816C96.4164 72.2293 96.7391 71.7307 97.1498 71.32C97.5898 70.9093 98.0884 70.5867 98.6458 70.352C99.2031 70.088 99.8044 69.956 100.45 69.956C101.77 69.956 102.87 70.4107 103.75 71.32C104.659 72.2 105.114 73.3 105.114 74.62C105.114 75.2653 104.982 75.8667 104.718 76.424C104.483 76.9813 104.16 77.48 103.75 77.92C103.339 78.3307 102.84 78.6533 102.254 78.888C101.696 79.1227 101.095 79.24 100.45 79.24ZM100.45 73.432C100.127 73.432 99.8484 73.5493 99.6138 73.784C99.3791 74.0187 99.2618 74.2973 99.2618 74.62C99.2618 74.9427 99.3791 75.2213 99.6138 75.456C99.8484 75.6907 100.127 75.808 100.45 75.808C100.772 75.808 101.051 75.6907 101.286 75.456C101.52 75.2213 101.638 74.9427 101.638 74.62C101.638 74.2973 101.52 74.0187 101.286 73.784C101.051 73.5493 100.772 73.432 100.45 73.432ZM110.79 81.176C111.435 81.176 112.036 81.308 112.594 81.572C113.18 81.8067 113.679 82.144 114.09 82.584C114.5 82.9947 114.823 83.4787 115.058 84.036C115.322 84.5933 115.454 85.1947 115.454 85.84C115.454 86.4853 115.322 87.0867 115.058 87.644C114.823 88.2013 114.5 88.7 114.09 89.14C113.679 89.5507 113.18 89.888 112.594 90.152C112.036 90.3867 111.435 90.504 110.79 90.504C110.144 90.504 109.543 90.3867 108.986 90.152C108.428 89.888 107.93 89.5507 107.49 89.14C107.079 88.7 106.756 88.2013 106.522 87.644C106.287 87.0867 106.17 86.4853 106.17 85.84C106.17 85.1947 106.287 84.5933 106.522 84.036C106.756 83.4787 107.079 82.9947 107.49 82.584C107.93 82.144 108.428 81.8067 108.986 81.572C109.543 81.308 110.144 81.176 110.79 81.176ZM110.79 87.028C111.142 87.028 111.435 86.9107 111.67 86.676C111.904 86.4413 112.022 86.1627 112.022 85.84C112.022 85.5173 111.904 85.2387 111.67 85.004C111.435 84.7693 111.142 84.652 110.79 84.652C110.467 84.652 110.188 84.7693 109.954 85.004C109.719 85.2387 109.602 85.5173 109.602 85.84C109.602 86.1627 109.719 86.4413 109.954 86.676C110.188 86.9107 110.467 87.028 110.79 87.028Z"
        fill="#121521"
      />
      <path
        d="M57.348 76.776C58.404 76.776 59.4013 76.9813 60.34 77.392C61.2787 77.7733 62.1 78.316 62.804 79.02C63.508 79.6947 64.0653 80.5013 64.476 81.44C64.8867 82.3493 65.092 83.332 65.092 84.388C65.092 85.444 64.8867 86.4413 64.476 87.38C64.0947 88.3187 63.552 89.14 62.848 89.844C62.144 90.548 61.3227 91.1053 60.384 91.516C59.4453 91.8973 58.448 92.088 57.392 92.088L44.28 92.088C43.7813 92.088 43.3707 91.9267 43.048 91.604C42.7253 91.2813 42.564 90.8707 42.564 90.372C42.564 89.9027 42.7253 89.5067 43.048 89.184C43.3707 88.832 43.7813 88.656 44.28 88.656L57.392 88.656C58.5653 88.656 59.5627 88.2453 60.384 87.424C61.2053 86.6027 61.616 85.5907 61.616 84.388C61.5867 83.2147 61.1467 82.232 60.296 81.44C59.4747 80.6187 58.4773 80.208 57.304 80.208L41.42 80.208L41.42 67.404L62.232 67.404C62.7307 67.404 63.1413 67.5653 63.464 67.888C63.7867 68.2107 63.948 68.6213 63.948 69.12C63.948 69.6187 63.7867 70.0293 63.464 70.352C63.1413 70.6747 62.7307 70.836 62.232 70.836L44.896 70.836L44.896 76.776L57.26 76.776H57.348ZM82.6899 75.588C84.9486 75.588 86.8846 76.3947 88.4979 78.008C90.0819 79.592 90.8739 81.5133 90.8739 83.772C90.8739 84.916 90.6539 85.9867 90.2139 86.984C89.8033 87.9813 89.2166 88.8613 88.4539 89.624C87.6913 90.3573 86.8113 90.944 85.8139 91.384C84.8166 91.824 83.7459 92.044 82.6019 92.044L78.6419 92.044C77.3219 92.044 76.0753 91.7947 74.9019 91.296C73.7286 90.768 72.7019 90.0787 71.8219 89.228C70.9713 88.348 70.2819 87.3213 69.7539 86.148C69.2553 84.9747 69.0059 83.728 69.0059 82.408L69.0059 75.896C69.0059 74.752 69.2113 73.6813 69.6219 72.684C70.0619 71.6867 70.6486 70.8213 71.3819 70.088C72.1446 69.3253 73.0246 68.7387 74.0219 68.328C75.0193 67.888 76.0899 67.668 77.2339 67.668L86.5619 67.668C87.0313 67.668 87.4273 67.844 87.7499 68.196C88.1019 68.5187 88.2779 68.9147 88.2779 69.384C88.2779 69.8827 88.1019 70.308 87.7499 70.66C87.4273 70.9827 87.0313 71.144 86.5619 71.144L77.2339 71.144C75.9139 71.144 74.7993 71.584 73.8899 72.464C73.0099 73.344 72.5406 74.4293 72.4819 75.72L82.6899 75.676V75.588ZM82.7339 88.568C83.3793 88.568 83.9806 88.4507 84.5379 88.216C85.1246 87.952 85.6379 87.6 86.0779 87.16C86.5179 86.72 86.8553 86.2213 87.0899 85.664C87.3539 85.0773 87.4859 84.4613 87.4859 83.816C87.4859 82.496 87.0166 81.3667 86.0779 80.428C85.1099 79.5187 83.9806 79.064 82.6899 79.064L72.4819 79.064V82.364C72.4819 83.2147 72.6433 84.0213 72.9659 84.784C73.2886 85.5173 73.7286 86.1773 74.2859 86.764C74.8726 87.3213 75.5326 87.7613 76.2659 88.084C77.0286 88.4067 77.8353 88.568 78.6859 88.568L82.6899 88.568H82.7339ZM97.2378 92.836L94.6858 90.504L116.73 66.788L119.238 69.164L97.2378 92.836ZM100.45 79.24C99.8044 79.24 99.2031 79.1227 98.6458 78.888C98.0884 78.6533 97.5898 78.3307 97.1498 77.92C96.7391 77.48 96.4164 76.9813 96.1818 76.424C95.9471 75.8667 95.8298 75.2653 95.8298 74.62C95.8298 73.9747 95.9471 73.3733 96.1818 72.816C96.4164 72.2293 96.7391 71.7307 97.1498 71.32C97.5898 70.9093 98.0884 70.5867 98.6458 70.352C99.2031 70.088 99.8044 69.956 100.45 69.956C101.77 69.956 102.87 70.4107 103.75 71.32C104.659 72.2 105.114 73.3 105.114 74.62C105.114 75.2653 104.982 75.8667 104.718 76.424C104.483 76.9813 104.16 77.48 103.75 77.92C103.339 78.3307 102.84 78.6533 102.254 78.888C101.696 79.1227 101.095 79.24 100.45 79.24ZM100.45 73.432C100.127 73.432 99.8484 73.5493 99.6138 73.784C99.3791 74.0187 99.2618 74.2973 99.2618 74.62C99.2618 74.9427 99.3791 75.2213 99.6138 75.456C99.8484 75.6907 100.127 75.808 100.45 75.808C100.772 75.808 101.051 75.6907 101.286 75.456C101.52 75.2213 101.638 74.9427 101.638 74.62C101.638 74.2973 101.52 74.0187 101.286 73.784C101.051 73.5493 100.772 73.432 100.45 73.432ZM110.79 81.176C111.435 81.176 112.036 81.308 112.594 81.572C113.18 81.8067 113.679 82.144 114.09 82.584C114.5 82.9947 114.823 83.4787 115.058 84.036C115.322 84.5933 115.454 85.1947 115.454 85.84C115.454 86.4853 115.322 87.0867 115.058 87.644C114.823 88.2013 114.5 88.7 114.09 89.14C113.679 89.5507 113.18 89.888 112.594 90.152C112.036 90.3867 111.435 90.504 110.79 90.504C110.144 90.504 109.543 90.3867 108.986 90.152C108.428 89.888 107.93 89.5507 107.49 89.14C107.079 88.7 106.756 88.2013 106.522 87.644C106.287 87.0867 106.17 86.4853 106.17 85.84C106.17 85.1947 106.287 84.5933 106.522 84.036C106.756 83.4787 107.079 82.9947 107.49 82.584C107.93 82.144 108.428 81.8067 108.986 81.572C109.543 81.308 110.144 81.176 110.79 81.176ZM110.79 87.028C111.142 87.028 111.435 86.9107 111.67 86.676C111.904 86.4413 112.022 86.1627 112.022 85.84C112.022 85.5173 111.904 85.2387 111.67 85.004C111.435 84.7693 111.142 84.652 110.79 84.652C110.467 84.652 110.188 84.7693 109.954 85.004C109.719 85.2387 109.602 85.5173 109.602 85.84C109.602 86.1627 109.719 86.4413 109.954 86.676C110.188 86.9107 110.467 87.028 110.79 87.028Z"
        fill="black"
        fillOpacity="0.2"
      />
      <g opacity="0.2">
        <path
          d="M160 80C160 124.183 124.183 160 80 160C35.8172 160 0 124.183 0 80C0 35.8172 35.8172 0 80 0C124.183 0 160 35.8172 160 80ZM11.2 80C11.2 117.997 42.0028 148.8 80 148.8C117.997 148.8 148.8 117.997 148.8 80C148.8 42.0028 117.997 11.2 80 11.2C42.0028 11.2 11.2 42.0028 11.2 80Z"
          fill="#576993"
        />
        <path
          d="M160 80C160 124.183 124.183 160 80 160C35.8172 160 0 124.183 0 80C0 35.8172 35.8172 0 80 0C124.183 0 160 35.8172 160 80ZM11.2 80C11.2 117.997 42.0028 148.8 80 148.8C117.997 148.8 148.8 117.997 148.8 80C148.8 42.0028 117.997 11.2 80 11.2C42.0028 11.2 11.2 42.0028 11.2 80Z"
          fill="url(#paint0_linear_4275_9324)"
        />
      </g>
      <path
        d="M109.257 11.594C110.473 8.75033 109.159 5.43922 106.237 4.42488C96.7928 1.14598 86.8008 -0.33905 76.7783 0.0648976C64.8873 0.544151 53.2531 3.67027 42.7234 9.21545C32.1936 14.7606 23.0337 22.5852 15.911 32.1189C8.78833 41.6526 3.88238 52.6553 1.55064 64.3253C-0.781098 75.9952 -0.47987 88.0383 2.43237 99.5771C5.34461 111.116 10.7945 121.86 18.3849 131.025C25.9753 140.191 35.515 147.548 46.3088 152.56C55.4065 156.784 65.202 159.253 75.1814 159.855C78.2686 160.041 80.7542 157.489 80.7241 154.396C80.694 151.304 78.1586 148.845 75.0737 148.623C66.762 148.027 58.6117 145.924 51.0255 142.401C41.7429 138.091 33.5387 131.764 27.011 123.882C20.4833 115.999 15.7964 106.76 13.2918 96.8363C10.7873 86.913 10.5283 76.5559 12.5335 66.5197C14.5388 56.4836 18.758 47.0212 24.8835 38.8222C31.009 30.6232 38.8865 23.8941 47.9421 19.1253C56.9977 14.3564 67.0031 11.668 77.2293 11.2558C85.5866 10.919 93.9193 12.1094 101.822 14.7525C104.755 15.7335 108.041 14.4376 109.257 11.594Z"
        fill="#576993"
      />
      <path
        d="M109.257 11.594C110.473 8.75033 109.159 5.43922 106.237 4.42488C96.7928 1.14598 86.8008 -0.33905 76.7783 0.0648976C64.8873 0.544151 53.2531 3.67027 42.7234 9.21545C32.1936 14.7606 23.0337 22.5852 15.911 32.1189C8.78833 41.6526 3.88238 52.6553 1.55064 64.3253C-0.781098 75.9952 -0.47987 88.0383 2.43237 99.5771C5.34461 111.116 10.7945 121.86 18.3849 131.025C25.9753 140.191 35.515 147.548 46.3088 152.56C55.4065 156.784 65.202 159.253 75.1814 159.855C78.2686 160.041 80.7542 157.489 80.7241 154.396C80.694 151.304 78.1586 148.845 75.0737 148.623C66.762 148.027 58.6117 145.924 51.0255 142.401C41.7429 138.091 33.5387 131.764 27.011 123.882C20.4833 115.999 15.7964 106.76 13.2918 96.8363C10.7873 86.913 10.5283 76.5559 12.5335 66.5197C14.5388 56.4836 18.758 47.0212 24.8835 38.8222C31.009 30.6232 38.8865 23.8941 47.9421 19.1253C56.9977 14.3564 67.0031 11.668 77.2293 11.2558C85.5866 10.919 93.9193 12.1094 101.822 14.7525C104.755 15.7335 108.041 14.4376 109.257 11.594Z"
        fill="url(#paint1_linear_4275_9324)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4275_9324"
          x1={-20}
          y1="60.2899"
          x2="187.307"
          y2="65.7818"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.411458" stopColor="#6396F9" />
          <stop offset={1} stopColor="#00D1FF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4275_9324"
          x1={-20}
          y1="60.2899"
          x2="187.307"
          y2="65.7818"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.411458" stopColor="#6396F9" />
          <stop offset={1} stopColor="#00D1FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};
