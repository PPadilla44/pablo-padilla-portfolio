import React, { useState } from "react";
import { send } from "@emailjs/browser";
import Section from "../../components/Section";
import SendButton from "../../components/SendButton";
import HeroIcons from "../../components/HeroIcons";

const EMAIL_REGEX = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/;
const SERVICE_ID = process.env.REACT_APP_EMAIL_SERVICE_ID ?? "";
const TEMPLATE_ID = process.env.REACT_APP_EMAIL_TEMPLATE_ID ?? "";
const PUBLIC_KEY = process.env.REACT_APP_EMAIL_PUBLIC_KEY ?? "";

type FormState = {
  user_name: string;
  user_email: string;
  message: string;
  /** Honeypot — real users never fill this. */
  website: string;
};

type Errors = Partial<Record<"name" | "email" | "message" | "api", string>>;

const Contact = () => {
  const [form, setForm] = useState<FormState>({
    user_name: "",
    user_email: "",
    message: "",
    website: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSuccess(false);
    setErrors((prev) => ({ ...prev, api: undefined }));
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const validateForm = (): boolean => {
    const nextErrors: Errors = {};
    if (form.user_name.trim().length < 2) {
      nextErrors.name = "Name must be longer than 1 character";
    }
    if (
      form.user_email.trim().length < 3 ||
      !EMAIL_REGEX.test(form.user_email.trim())
    ) {
      nextErrors.email = "Please enter a valid email address";
    }
    if (form.message.trim().length < 3) {
      nextErrors.message = "Message must be longer than 2 characters";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm() || success) return;

    // Honeypot: silently succeed without sending if filled.
    if (form.website.trim() !== "") {
      setSuccess(true);
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setErrors({ api: "Email service is not configured. Please email me directly." });
      return;
    }

    setLoading(true);
    try {
      await send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          user_name: form.user_name,
          user_email: form.user_email,
          message: form.message,
        },
        { publicKey: PUBLIC_KEY }
      );
      setForm({ user_name: "", user_email: "", message: "", website: "" });
      setSuccess(true);
    } catch {
      setErrors({ api: "Something went wrong. Please try again or email me directly." });
    } finally {
      setLoading(false);
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("padilla.pablo1998@gmail.com");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* no-op: clipboard unavailable */
    }
  };

  return (
    <Section name="contact" className="pt-20 pb-6 flex bg-blue-300">
      <h2 className="text-center mb-20">Contact</h2>

      <div className="flex items-center justify-center w-full flex-col">
        <form
          onSubmit={sendEmail}
          className="flex flex-col gap-3 md:max-w-lg w-full items-center"
          noValidate
          aria-describedby={errors.api ? "contact-api-error" : undefined}
        >
          {/* Honeypot field: hidden from users, bots will fill it */}
          <label className="sr-only" aria-hidden="true">
            Website
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={form.website}
              onChange={handleChange}
              style={{ position: "absolute", left: "-9999px", width: 1, height: 1 }}
            />
          </label>

          <div className="w-full">
            <label htmlFor="user_name" className="sr-only">
              Your name
            </label>
            <input
              id="user_name"
              name="user_name"
              type="text"
              placeholder="Name"
              value={form.user_name}
              onChange={handleChange}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={`${errors.name ? "border-2 border-red-600" : ""} w-full rounded-md p-2 text-lg`}
            />
            {errors.name && (
              <p id="name-error" className="text-red-600 text-sm text-center font-normal mt-1">
                {errors.name}
              </p>
            )}
          </div>

          <div className="w-full">
            <label htmlFor="user_email" className="sr-only">
              Your email address
            </label>
            <input
              id="user_email"
              name="user_email"
              type="email"
              placeholder="Email"
              value={form.user_email}
              onChange={handleChange}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={`${errors.email ? "border-2 border-red-600" : ""} w-full rounded-md p-2 text-lg`}
            />
            {errors.email && (
              <p id="email-error" className="text-red-600 text-sm text-center font-normal mt-1">
                {errors.email}
              </p>
            )}
          </div>

          <div className="w-full">
            <label htmlFor="message" className="sr-only">
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              className={`${errors.message ? "border-2 border-red-600" : ""} w-full rounded-md p-2 text-lg resize-none`}
            />
            {errors.message && (
              <p id="message-error" className="text-red-600 text-sm text-center font-normal mt-1">
                {errors.message}
              </p>
            )}
          </div>

          {errors.api && (
            <p
              id="contact-api-error"
              role="alert"
              className="text-red-700 bg-white/70 rounded-md px-3 py-1 text-sm font-normal"
            >
              {errors.api}
            </p>
          )}

          <SendButton isLoading={isLoading} isSuccess={success} />
        </form>
      </div>

      <div className="flex flex-col gap-2 items-center mt-20">
        <HeroIcons />
        <button
          type="button"
          onClick={copyEmail}
          className="font-light text-lg hover:text-accent active:text-blue-700 focus-visible:ring-2 focus-visible:ring-accent rounded-md px-1"
          aria-live="polite"
        >
          {copied ? "Copied!" : "padilla.pablo1998@gmail.com"}
        </button>
      </div>
    </Section>
  );
};

export default Contact;
