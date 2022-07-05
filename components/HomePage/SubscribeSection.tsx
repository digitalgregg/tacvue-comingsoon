import React, { useState } from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { CircularProgress } from "@mui/material";

const SubscribeSection = ({
  title = "For the latest web2 FUD…",
}: {
  title?: string;
}) => {
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setIsSubmiting(true);
    setIsSuccess(false);

    const reqData = {
      g: "VbDGQY",
      email: data.email,
    };

    const urlData = new URLSearchParams(reqData);
    fetch(`https://manage.kmail-lists.com/ajax/subscriptions/subscribe`, {
      method: "POST",
      body: urlData,
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.errors?.length > 0) {
          setError(
            "email",
            {
              message: res.errors[0],
            },
            {
              shouldFocus: true,
            },
          );
        }
        if (res.success) {
          setIsSuccess(true);
          reset();
          setTimeout(() => {
            setIsSuccess(false);
          }, 4000);
        }
      })
      .catch((err) => {
        setError("email", {
          message: "Something went wrong. Please try again.",
        });
      })
      .finally(() => setIsSubmiting(false));
  };

  return (
    <div className="mt-20 lg:mt-[150px] pb-10 lg:pb-[75px]">
      <div className="landing_page_container">
        <div
          style={{
            backgroundImage: 'url("/images/subscribe_bg.jpg")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom center",
          }}
          className="py-[30px] ipad:py-[60px] lg:py-[96px] rounded-[20px] overflow-hidden px-5"
        >
          <h2 className="text-center font-hypers-techno text-[24px] leading-[120%] w-[70%] ipad:w-auto ipad:text-[32px] ipad:leading-[120%] lg:text-[36px] lg:leading-[120%] mx-auto">
            {title}
          </h2>
          {/* <p className="body_text mt-5 text-center capitalize">
            Don’t miss out on the tips and strategies we offer to community.
          </p> */}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-[700px] mx-auto mt-12 lg:mt-[60px]"
          >
            <div className="relative">
              <input
                style={{
                  background: "linear-gradient(0deg, #000715, #000715)",
                }}
                type="email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                })}
                className="w-full block rounded-full text-xl px-9 py-[26px] ipad:pr-[230px] border-none outline-none placeholder:text-[#576993]"
                placeholder="Enter Your Email"
              />

              <div className="ipad:absolute ipad:top-0 ipad:h-full ipad:right-0 ipad:p-2.5 ipad:pl-0">
                <button
                  type="submit"
                  disabled={isSubmiting}
                  style={{
                    background:
                      "linear-gradient(91.52deg, #6396F9 40.77%, #00D1FF 115.11%), #576993",
                  }}
                  className="text-xl font-medium py-5 w-full ipad:w-auto ipad:py-0 mt-4 ipad:mt-0 px-[30px] h-full rounded-full relative"
                >
                  {isSubmiting && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[46%]">
                      <CircularProgress size={25} sx={{ color: "#fff" }} />
                    </div>
                  )}
                  <span
                    className={classNames(
                      isSubmiting && "opacity-0 pointer-events-none",
                    )}
                  >
                    Subscribe Now
                  </span>
                </button>
              </div>
            </div>
            {!isSuccess && errors.email && (
              <p className="text-red-600 mt-3 ml-6 text-xl">
                {errors.email.message}
              </p>
            )}
            {!errors.email && isSuccess && (
              <p className="text-green-600 mt-3 ml-6 text-xl">
                Email submitted successfully
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
