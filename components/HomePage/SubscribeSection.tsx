import React, { useState } from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { CircularProgress } from "@mui/material";

const SubscribeSection = () => {
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
    <div className="mt-10 lg:mt-[110px]">
      <div className="landing_page_container">
        <div
          style={{
            backgroundImage: 'url("/images/subscribe_bg.jpg")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom center",
          }}
          className="py-[30px] lg:py-[100px] rounded-[20px] overflow-hidden px-5"
        >
          <h2 className="text-center font-spaced text-[24px] leading-[22px] lg:text-[30px] lg:leading-[35px] lg:w-[45%] mx-auto">
            Don’t be like the guy that missed out Apple…
          </h2>
          {/* <p className="text-xl mt-5 text-center text-[#838CA3] capitalize">
            Don&apos;t miss out on the tips and strategies we offer to community
          </p> */}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-[700px] mx-auto mt-12 lg:mt-[70px]"
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
                className="w-full block rounded-full text-xl px-9 py-7 lg:pr-[230px] border-none outline-none placeholder:text-[#576993]"
                placeholder="Enter Your Email"
              />

              <div className="lg:absolute lg:top-0 lg:h-full lg:right-0 lg:p-2.5 lg:pl-0">
                <button
                  type="submit"
                  disabled={isSubmiting}
                  style={{
                    background:
                      "linear-gradient(91.52deg, #6396F9 40.77%, #00D1FF 115.11%), #576993",
                  }}
                  className="text-xl font-medium py-7 w-full lg:w-auto lg:py-0 mt-[14px] lg:mt-0 px-[30px] h-full rounded-full relative"
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
