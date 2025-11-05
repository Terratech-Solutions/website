"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import Image from "next/image";

const schema = z.object({
  name: z.string().trim().min(1, "Required"),
  email: z.string().trim().email("Invalid email").optional().or(z.literal("")),
  phone: z
    .string()
    .trim()
    .min(1, "Required")
    .regex(/^[\d\s()+-]{6,}$/, "Invalid phone"),
  source: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const PhoneForm = () => {
  const [send, setSend] = useState<null | "ok" | "err">(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    setSend(null);
    try {
      // TODO: Add api
      console.log("form data", data);
      setSend("ok");
      reset();
    } catch {
      setSend("err");
    }
  };

  const field =
    "w-full bg-[#1d1d1d] text-white placeholder-zinc-400 border border-white/30 focus:border-white/60 outline-none rounded-sm px-4 py-4 transition-colors";

  return (
      <div className="flex justify-around items-center py-20 px-30 max-md:px-3 max-lg:flex-col mx-auto max-w-[1440]">
        <div className="flex flex-col w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-6 space-y-5 w-full"
            noValidate
          >
              <input
                aria-label="Name"
                placeholder="Name *"
                className={field}
                {...register("name")}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.name.message}
                </p>
              )}

              <input
                aria-label="Email"
                placeholder="Email"
                className={field}
                type="email"
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.email.message}
                </p>
              )}

              <input
                aria-label="Phone number"
                placeholder="Phone number *"
                className={field}
                {...register("phone")}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.phone.message}
                </p>
              )}

            <div className="relative">
              <select
                aria-label="How did you find us?"
                className={`${field} appearance-none pr-10`}
                defaultValue=""
                {...register("source")}
              >
                <option value="" disabled>
                  How did you find us?
                </option>
                <option>Google</option>
                <option>Social media</option>
                <option>Friend/colleague</option>
                <option>Other</option>
              </select>

              <span
                aria-hidden
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400"
              >
                ▾
              </span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full uppercase tracking-wide font-semibold py-4 rounded-sm bg-[#c44237] hover:bg-[#b53a30] disabled:opacity-60"
            >
              {isSubmitting ? "SENDING…" : "SEND"}
            </button>

            {send === "ok" && (
              <p className="text-sm text-green-400">
                Thanks! We’ll get back to you.
              </p>
            )}
            {send === "err" && (
              <p className="text-sm text-red-400">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
          <div className="flex w-full px-6 justify-around max-md:flex-col">
            <div className="flex">
              <div className="flex relative">
                <Image
                  src="contact/phone.svg"
                  alt="phone"
                  width={23}
                  height={23}
                />
              </div>
              <div className="flex flex-col pl-3">
                <div>Phone</div>
                <div className="text-lemon-green">03 5432 1234</div>
              </div>
            </div>
            <div className="flex">
              <div className="flex relative">
                <Image
                  src="contact/fax.svg"
                  alt="phone"
                  width={23}
                  height={23}
                />
              </div>
              <div className="flex flex-col pl-3">
                <div>Fax</div>
                <div className="text-lemon-green">03 5432 1234</div>
              </div>
            </div>
            <div className="flex">
              <div className="flex relative">
                <Image
                  src="contact/email.svg"
                  alt="phone"
                  width={23}
                  height={23}
                />
              </div>
              <div className="flex flex-col pl-3">
                <div>EMAIL</div>
                <div className="text-lemon-green">info@marcc.com.au</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex relative w-full max-lg:justify-center max-lg:pt-10 max-sm:px-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.839081882669!2d23.9903228768101!3d49.83897927148411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add71114d9d9b%3A0x71de377be9b87c3e!2sWabi%20Sabi%20Cafe!5e0!3m2!1suk!2sua!4v1730659500000!5m2!1suk!2sua"
            width="545px"
            className="h-[700px] max-sm:h-[400px]"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
  );
};

export default PhoneForm;
