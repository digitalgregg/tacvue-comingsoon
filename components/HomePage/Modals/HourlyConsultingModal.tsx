import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../Input";
import { RegisterModalFooter } from "../../RegisterModalLayout";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimePicker } from "@mui/x-date-pickers";

type HourlyConsultingModalProps = {
  onClose: () => void;
};
const HourlyConsultingModal = ({ onClose }: HourlyConsultingModalProps) => {
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const handleChange = (newValue: Date | null) => {
    setValue("time_and_date", newValue);
    if (newValue) {
      setError("time_and_date", null);
    }
  };

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <Input
              {...register("firstName", {
                required: {
                  value: true,
                  message: "First name is required",
                },
              })}
              label="First Name"
              placeholder="Your first name here"
            />
            <ErrorMessage name="firstName" />
          </div>
          <div>
            <Input
              {...register("lastName", {
                required: {
                  value: true,
                  message: "Last name is required",
                },
              })}
              label="Last Name"
              placeholder="Your last name here"
            />
            <ErrorMessage name="lastName" />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <Input
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
              })}
              label="Email"
              type={"email"}
              placeholder="Your email here"
            />
            <ErrorMessage name="email" />
          </div>
          <div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                {...register("time_and_date", {
                  required: {
                    value: true,
                    message: "Date and Time is required",
                  },
                })}
                value={watch("time_and_date")}
                onChange={handleChange}
                renderInput={(params) => {
                  params.inputProps.placeholder = "Select Time And Date";
                  params.inputProps.readOnly = true;
                  return (
                    <div className="custom_date_input_wrapper translate-y-0.5">
                      <p className="__label">Time and date</p>
                      <TextField {...params} />
                    </div>
                  );
                }}
              />
            </LocalizationProvider>
            <ErrorMessage name="time_and_date" />
          </div>
        </div>
        <div>
          <label className="w-full">
            <p className="text-base lg:text-xl font-semibold text-[#9EBBFF] mb-5">
              Message
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

export default HourlyConsultingModal;
