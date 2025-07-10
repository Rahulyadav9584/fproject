import React, { useState } from 'react'
import api from "../api/axios";
import { toast } from "react-toastify";

const Form = () => {
  const [contact, setContact] = useState({ fullName: "", email: "", mobile: "", city: "" });

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/contact", contact);
      toast.success("Contact submitted successfully!");
      setContact({ fullName: "", email: "", mobile: "", city: "" });
    } catch (err) {
      toast.error("Submission failed. Please try again.");
    }
  };

  return (
    <div className="bg-blue-950/10 backdrop-blur-md rounded-lg p-8 text-left shadow-lg max-w-md w-full h-auto border border-white/20">
      <h2 className="text-white text-2xl font-semibold mb-4">Get a Free Consultation</h2>
      <form onSubmit={handleContactSubmit} className="grid gap-4">
        <input
          className="p-3 rounded bg-white text-black placeholder-gray-500 focus:outline-none"
          placeholder="Full Name"
          value={contact.fullName}
          onChange={(e) => setContact({ ...contact, fullName: e.target.value })}
        />
        <input
          className="p-3 rounded bg-white text-black placeholder-gray-500 focus:outline-none"
          placeholder="Enter Email Address"
          value={contact.email}
          onChange={(e) => setContact({ ...contact, email: e.target.value })}
        />
        <input
          className="p-3 rounded bg-white text-black placeholder-gray-500 focus:outline-none"
          placeholder="Mobile Number"
          value={contact.mobile}
          onChange={(e) => setContact({ ...contact, mobile: e.target.value })}
        />
        <input
          className="p-3 rounded bg-white text-black placeholder-gray-500 focus:outline-none"
          placeholder="Your City"
          value={contact.city}
          onChange={(e) => setContact({ ...contact, city: e.target.value })}
        />
        <button
          type="submit"
          className="bg-orange-500 text-white font-semibold py-3 my-6 rounded hover:bg-orange-600 transition"
        >
          Get Quote
        </button>
      </form>
    </div>
  );
};

export default Form;
