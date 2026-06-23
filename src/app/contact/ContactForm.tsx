"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

type RoleOption = "Clinic Administrator" | "Individual Clinician" | "Other";

const roleOptions: RoleOption[] = ["Clinic Administrator", "Individual Clinician", "Other"];

export default function ContactForm() {
  const searchParams = useSearchParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [role, setRole] = useState<RoleOption>("Clinic Administrator");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const type = searchParams.get("type");
    if (type === "clinic") {
      setRole("Clinic Administrator");
    } else if (type === "individual") {
      setRole("Individual Clinician");
    }
  }, [searchParams]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-[#E8F5F3] border border-[#0A7C6E] rounded-2xl p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-[#0A7C6E] flex items-center justify-center mx-auto mb-5">
          <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-[#111827] mb-3 font-[family-name:var(--font-jakarta)]">
          Message Received
        </h3>
        <p className="text-[#4B5563] leading-relaxed">
          Thank you. Our team will be in touch to schedule a time to talk.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-white border border-[#E5E3DC] rounded-xl px-4 py-3 text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#0A7C6E] focus:border-transparent transition-all";
  const labelClass = "block text-sm font-semibold text-[#111827] mb-1.5";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-[#E5E3DC] rounded-2xl p-8 shadow-sm space-y-6"
    >
      <div>
        <label htmlFor="name" className={labelClass}>
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          placeholder="Your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="org" className={labelClass}>
          Organization / Practice Name
        </label>
        <input
          id="org"
          type="text"
          placeholder="Your practice or organization"
          value={org}
          onChange={(e) => setOrg(e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="role" className={labelClass}>
          I am a:
        </label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value as RoleOption)}
          className={`${inputClass} cursor-pointer`}
        >
          {roleOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Brief message / what you&apos;d like to discuss
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us about your practice and what you're looking to solve..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#0A7C6E] text-white font-semibold py-4 rounded-full hover:bg-[#085f54] transition-colors text-base"
      >
        Request a Meeting
      </button>
    </form>
  );
}
