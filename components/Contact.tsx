import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGithub, FaLinkedin, FaMailBulk, FaTwitter } from "react-icons/fa";

import Button from "./Button";
import Double from "./elements/Double";
import Simple from "./elements/Simple";

const Social: React.FC = () => {
  const links = [
    {
      name: "Twitter",
      url: "https://twitter.com/scidroid",
      icon: <FaTwitter />,
      handle: "  @scidroid"
    },
    {
      name: "GitHub",
      url: "https://github.com/scidroid",
      icon: <FaGithub />,
      handle: "  @scidroid"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/scidroid/",
      icon: <FaLinkedin />,
      handle: "  @scidroid"
    },
    {
      name: "Email",
      url: "mailto:hi@scidroid.co?subject=Hi%20Juan!",
      icon: <FaMailBulk />,
      handle: "  hi@scidroid.co"
    }
  ];

  return (
    <Simple>
      <div className="flex flex-col items-center justify-center h-full pb-6 large:pb-0">
        <h2 className="text-center w-full mb-4 font-bold text-2xl">
          Follow me
        </h2>
        <div className="flex flex-col justify-between min-h-full w-full">
          {links.map(({ name, url, icon, handle }) => (
            <a
              target="_blank"
              rel="noreferrer"
              href={url}
              key={name}
              className="border text-xl font-medium rounded-xl text-center p-2 m-1 w-full hover:bg-slate-100 flex items-center justify-center"
            >
              {icon}
              <p className="ml-2">{handle}</p>
            </a>
          ))}
        </div>
      </div>
    </Simple>
  );
};

const ContactForm: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "submitting" | "success"
  >("idle");

  const onSubmit = async (data: any) => {
    setSubmitStatus("submitting");
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    if (response.ok) {
      setSubmitStatus("success");
    }
  };

  return (
    <Double>
      <div className="flex flex-col items-center justify-center h-full pb-6 large:pb-0">
        <h2 className="text-center w-full mb-4 font-bold text-2xl">
          Contact Me
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-between min-h-full w-full"
        >
          <div className="flex flex-col large:flex-row large:justify-between">
            <label htmlFor="name" className="text-xl font-medium large:w-[48%]">
              Name
              <input
                type="text"
                id="name"
                required
                placeholder="Your name"
                className="border border-slate-200 ring-0 focus:ring-0 text-xl font-medium rounded-xl p-2 my-1 w-full"
                {...register("name", { required: true })}
              />
            </label>
            <label
              htmlFor="email"
              className="text-xl font-medium large:w-[48%]"
            >
              Email
              <input
                type="email"
                id="email"
                required
                placeholder="Your email"
                className="border border-slate-200 ring-0 focus:ring-0 text-xl font-medium rounded-xl p-2 my-1 w-full"
                {...register("email", { required: true })}
              />
            </label>
          </div>
          <label htmlFor="message" className="text-xl font-medium -mt-6">
            Message
            <textarea
              id="message"
              required
              placeholder="Your message"
              className="border border-slate-200 ring-0 focus:ring-0 text-xl font-medium rounded-xl py-2 my-1 w-full"
              {...register("message", { required: true })}
            />
          </label>
          <Button
            className="-mt-4"
            type="submit"
            disabled={submitStatus != "idle"}
          >
            {submitStatus === "submitting"
              ? "Submitting..."
              : submitStatus === "success"
              ? "Success!"
              : "Submit"}
          </Button>
        </form>
      </div>
    </Double>
  );
};

const ContactSection: React.FC = () => {
  return (
    <>
      <ContactForm />
      <Social />
    </>
  );
};

export default ContactSection;
