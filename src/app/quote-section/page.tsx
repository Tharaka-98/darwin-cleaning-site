"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function QuoteSection() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    comments: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Use mailto to trigger email client directly since no backend is used
    const subject = encodeURIComponent("New Quote Request");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nComments: ${formData.comments}`
    );
    window.location.href = `mailto:admin@cleanspace.com?subject=${subject}&body=${body}`;
    setShowForm(false);
  };

  return (
    <section className="relative w-full mt-12 md:mt-28 py-20 px-6 bg-white text-center">
      <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded shadow relative">
        <h2 className="text-2xl font-bold mb-6">Get a Free Quote</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name*"
            required
            className="w-full border px-4 py-2 rounded"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email*"
            required
            className="w-full border px-4 py-2 rounded"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <input
            type="tel"
            placeholder="Phone*"
            required
            className="w-full border px-4 py-2 rounded"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
          <select
            required
            className="w-full border px-4 py-2 rounded"
            value={formData.service}
            onChange={(e) =>
              setFormData({ ...formData, service: e.target.value })
            }
          >
            <option value="">Select a Service</option>
            <option value="Commercial Cleaning">Commercial Cleaning</option>
            <option value="Industrial Cleaning">Industrial Cleaning</option>
            <option value="Office Cleaning">Office Cleaning</option>
            <option value="Medical Centre Cleaning">
              Medical Centre Cleaning
            </option>
          </select>
          <textarea
            placeholder="Comments"
            className="w-full border px-4 py-2 rounded"
            value={formData.comments}
            onChange={(e) =>
              setFormData({ ...formData, comments: e.target.value })
            }
          ></textarea>
          <button
            type="submit"
            className="bg-primary text-black border px-6 py-2 rounded w-full hover:bg-darkGreen transition"
          >
            Request a Quote
          </button>
        </form>
      </div>
    </section>
  );
}
