"use client";
import { CornerRightDown, BadgeCheck } from "lucide-react";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { isStep1Valid } from "@/components/validateContactForm";

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [showForm, setShowForm] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showForm) setFormVisible(true);
    else {
      const timeout = setTimeout(() => setFormVisible(false), 200);
      return () => clearTimeout(timeout);
    }
  }, [showForm]);

  useEffect(() => {
    if (!showForm) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setShowForm(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showForm]);

  useEffect(() => {
    if (!showPopup) return;
    const handle = () => setShowPopup(false);
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [showPopup]);

  const handleShowForm = () => {
    setShowForm(true);
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowPopup(true);
    setForm({ name: "", email: "", message: "" });
    setStep(1);
    setShowForm(false);
  };

  const isStep1ValidResult = isStep1Valid(form.name, form.email);

  return (
    <div
      ref={formRef}
      className={`flex flex-col gap-2 sm:gap-3 md:gap-4 w-full max-w-[90%] sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto px-3   ${
        showForm ? "py-4 " : "py-2 hover:bg-accent cursor-pointer"
      } border-border border rounded-2xl p-4 bg-background transition-all duration-800 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]`}
      onClick={handleShowForm}
    >
      <div className="flex items-center text-xl sm:text-2xl md:text-3xl font-bold justify-center gap-1 w-full">
        <span className="text-sm">contact here</span>
        <CornerRightDown width={16} height={16} className="" />
      </div>
      {formVisible && (
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className={`flex flex-col gap-4 max-w-lg transition-transform duration-350 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] ${
            showForm
              ? "translate-y-0 pointer-events-auto"
              : "-translate-y-8 pointer-events-none"
          }`}
          onSubmit={handleSubmit}
        >
          <Input
            className="input-wrapper"
            type="hidden"
            name="access_key"
            value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY!}
          />
          <Input
            className="input-wrapper"
            type="hidden"
            name="subject"
            value="New message from tranvu.dev"
          />
          <Input type="hidden" name="from_name" value="tranvu.dev" />

          {step === 1 && (
            <>
              <Input
                className="input-wrapper text-sm"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="tranvu"
                required
              />
              <Input
                className="input-wrapper text-sm"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="hi@tranvu.dev"
                required
              />
              <Button
                onClick={handleNext}
                className="cursor-pointer"
                disabled={!isStep1ValidResult}
              >
                Next
              </Button>
            </>
          )}

          {step === 2 && (
            <>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message"
                required
                className="input-wrapper text-sm"
              />
              <Input type="hidden" name="from_name" value="tranvu.dev" />
              <Button
                type="submit"
                variant="secondary"
                className="cursor-pointer"
              >
                Send Message
              </Button>
            </>
          )}
        </form>
      )}
      {showPopup && (
        <div
          role="alert"
          tabIndex={-1}
          className="w-full gap-1 flex items-center justify-center text-sm font-semibold p-2 pl-8 pr-8"
        >
          <BadgeCheck className="w-4 h-4 text-green-400" />
          thanks for reaching out!
        </div>
      )}
    </div>
  );
}
