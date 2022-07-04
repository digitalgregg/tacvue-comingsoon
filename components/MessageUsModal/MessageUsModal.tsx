import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Checkbox from "../Checkbox";
import Input from "../Input";
import RegisterModalLayout, {
  RegisterModalFooter,
} from "../RegisterModalLayout";
import Select from "../Select";

type MessageUsModalProps = {
  open: boolean;
  onClose: () => void;
};
const MessageUsModal = ({ onClose, open }: MessageUsModalProps) => {
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectValue, setsSlectValue] = useState<any>(null);

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
    <RegisterModalLayout open={open} onClose={onClose} title={"Message Us"}>
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
                {...register("companyOrBrandOrProject")}
                label="Company/Brand/Project"
                placeholder="Your Company/Brand/Project name here"
              />
              <ErrorMessage name="companyOrBrandOrProject" />
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
          <div>
            <p className="text-base lg:text-xl font-semibold text-[#9EBBFF] mb-4">
              I’m interested in:
            </p>
            <div className="space-y-2">
              <Checkbox label="Specific Questions" />
              <Checkbox label="Investment Opportunities" />
              <Checkbox label="Careers " />
              <Checkbox label="White-Glove Services" />
              <Checkbox label="The Platform" />
            </div>
          </div>

          <div className="form_grid_2">
            <div>
              <Input
                {...register("country", {
                  required: {
                    value: true,
                    message: "Country is required",
                  },
                })}
                label="Country*"
                type={"country"}
                placeholder="Your Country here"
              />
              <ErrorMessage name="country" />
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
            <Select
              label="Would you like to schedule a call with a team member?"
              value={selectValue}
              onChange={(opt) => setsSlectValue(opt)}
              options={[
                {
                  value: "yes",
                  label: "Yes",
                },
                {
                  value: "no",
                  label: "No",
                },
              ]}
            />
          </div>
          <div>
            <label className="w-full">
              <p className="text-base lg:text-xl font-semibold text-[#9EBBFF] mb-5">
                Please let us know what you’re reaching out in regards to so
                that we can connect you with the right team members.
              </p>
              <textarea
                {...register("message")}
                placeholder="Type your message here"
                className="__input resize-none"
                rows={4}
              ></textarea>
            </label>
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
    </RegisterModalLayout>
  );
};

export default MessageUsModal;
