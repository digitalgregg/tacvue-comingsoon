import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../Input";
import { RegisterModalFooter } from "../../RegisterModalLayout";

type MintingWebsiteModalProps = {
  onClose: () => void;
};
const MintingWebsiteModal = ({ onClose }: MintingWebsiteModalProps) => {
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
      g: "TWwkUJ",
      $fields: "firstName,lastName,message",
      ...data,
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
            onClose();
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

  const ErrorMessage = ({ name }: { name: string }) => {
    if (!errors[name]) return null;
    return (
      <>
        {!isSuccess && errors.email && (
          <p className="text-red-600 mt-2.5 text-base">
            {errors[name].message}
          </p>
        )}
      </>
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-10 grid  grid-cols-1 gap-6">
        <div className="form_grid_2">
          <div>
            <Input
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
              label="Name*"
              placeholder="Your name here"
            />
            <ErrorMessage name="name" />
          </div>
          <div>
            <Input
              {...register("brandOrProject")}
              label="Brand/Project"
              placeholder="Your Brand/Project name here"
            />
            <ErrorMessage name="brandOrProject" />
          </div>
        </div>
        <div>
          <Input
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
            })}
            label="Email*"
            type={"email"}
            placeholder="Your email here"
          />
          <ErrorMessage name="email" />
        </div>
        <div className="form_grid_2">
          <div>
            <Input
              {...register("domainName")}
              label="Domain Name"
              type={"email"}
              placeholder="Your domain name here"
            />
            <ErrorMessage name="domainName" />
          </div>
          <div>
            <Input
              {...register("telegramDiscordPhone", {
                required: {
                  value: true,
                  message: "Telegram/Discord/Phone is required",
                },
              })}
              label="Telegram/Discord/Phone*"
              type={"telegramDiscordPhone"}
              placeholder="Your Telegram/Discord/Phone here"
            />
            <ErrorMessage name="telegramDiscordPhone" />
          </div>
        </div>
        <div>
          <label className="w-full">
            <p className="text-base lg:text-xl font-semibold text-[#9EBBFF] mb-5">
              Please tell us more about what you???re looking for in a minting
              website*
            </p>
            <textarea
              {...register("message", {
                required: {
                  value: true,
                  message: "Message is required",
                },
              })}
              placeholder="Type your message here"
              className="__input resize-none"
              rows={4}
            ></textarea>
          </label>
          <ErrorMessage name="message" />
        </div>
      </div>
      <div>
        {isSuccess && (
          <p className="text-green-600 mt-6 text-center text-base">
            Email submitted successfully
          </p>
        )}
      </div>

      <RegisterModalFooter onClose={onClose} isSubmiting={isSubmiting} />
    </form>
  );
};

export default MintingWebsiteModal;
