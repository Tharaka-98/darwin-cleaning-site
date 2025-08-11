"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiry: "",
  });
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("");

    // Basic validation
    if (!formData.name.trim()) {
      setError("Please enter your name.");
      setIsSending(false);
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setError("Please enter a valid email address.");
      setIsSending(false);
      return;
    }

    const phonePattern = /^[0-9+\s-]{6,15}$/;
    if (!phonePattern.test(formData.phone)) {
      setError("Please enter a valid phone number.");
      setIsSending(false);
      return;
    }

    if (!formData.inquiry.trim()) {
      setError("Please enter your inquiry.");
      setIsSending(false);
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("Missing EmailJS environment variables");
      setStatus("Configuration error. Please try again later.");
      setIsSending(false);
      return;
    }

    emailjs
      .send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          inquiry: formData.inquiry,
        },
        publicKey
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", phone: "", inquiry: "" });
          setIsSending(false);

          setTimeout(() => setStatus(""), 4000);
          setTimeout(() => setError(""), 4000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("Failed to send. Please try again later.");
          setIsSending(false);

          setTimeout(() => setStatus(""), 4000);
          setTimeout(() => setError(""), 4000);
        }
      );
  };

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setIsSending(true);
  //   setStatus("");

  //   try {
  //     const res = await fetch("/api/send-email", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(formData),
  //     });

  //     const data = await res.json();

  //     if (data.success) {
  //       setStatus("Message sent successfully!");
  //       setFormData({ name: "", email: "", phone: "", inquiry: "" });
  //     } else {
  //       setStatus("Failed to send. Please try again later.");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     setStatus("An error occurred. Please try again later.");
  //   } finally {
  //     setIsSending(false);
  //   }
  // };

  return (
    <section className="w-full pt-10 md:px-12 pb-8 md:pt-12 px-6 mt-18 lg:mt-32 bg-white">
      <div className="font-poppins text-[28px] md:text-[40px] md:hidden block xl:text-[52px] font-semibold ">Contact Us</div>
      <div className="max-w-8xl mx-auto pt-6  md:pt-4 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-24">
        {/* LEFT SIDE - CONTACT INFO */}

        <div className="">
          <div className="mb-3">
            <h3 className="font-medium text-lg font-poppins ">📞 Phone</h3>
            <p className="font-poppins">(08) 8297 5210</p>
          </div>

          <div className="mb-3">
            <h3 className="font-medium text-lg font-poppins  ">📧 Email</h3>
            <p className="font-poppins">admin@southernxcleaning.com.au</p>
          </div>

          <div className="mb-6">
            <div className="font-medium text-lg font-poppins ">
              📍 Head Office Address
            </div>
            <p className="font-poppins">
              14-18 Rosslyn Street, Mile End South SA 5031
            </p>
          </div>

          <div className="w-full h-64">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.408269582756!2d138.5599934!3d-34.9297176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0cf4f2f8d4c3f%3A0x123456789abcdef!2s14-18%20Rosslyn%20St%2C%20Mile%20End%20South%20SA%205031!5e0!3m2!1sen!2sau!4v1690000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl lg:text-[32px] font-semibold font-poppins mb-6 text-blue-900">
            SEND US A MESSAGE
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              required
              className="w-full border px-4 py-2 rounded"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full border px-4 py-2 rounded"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <input
              type="tel"
              placeholder="Phone"
              required
              className="w-full border px-4 py-2 rounded"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
            <textarea
              placeholder="Inquiry"
              required
              className="w-full border px-4 py-2 rounded h-28"
              value={formData.inquiry}
              onChange={(e) =>
                setFormData({ ...formData, inquiry: e.target.value })
              }
            ></textarea>
            <button
              type="submit"
              disabled={isSending}
              className={`${
                isSending
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-white text-blue-900 border-2 border-blue-900 hover:bg-blue-900 hover:text-white"
              } px-6 py-2 rounded transition`}
            >
              {isSending ? "Sending..." : "Submit"}
            </button>
          </form>
          {status && (
            <p className="mt-4 text-[16px] md:text-[18px] text-[#2cb658]">
              {status}
            </p>
          )}
          {error && (
            <p className="mt-4 text-[16px] md:text-[18px] text-[#a02945]">
              {error}
            </p>
          )}
        </div>
      </div>

      <div className="w-full h-64 mt-8 md:mt ">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.408269582756!2d138.5599934!3d-34.9297176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0cf4f2f8d4c3f%3A0x123456789abcdef!2s14-18%20Rosslyn%20St%2C%20Mile%20End%20South%20SA%205031!5e0!3m2!1sen!2sau!4v1690000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
