// src/pages/Contact/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";

export default function Contact() {
  // simple form state (we use mailto on submit)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const BRAND_YELLOW = "#fec713";

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build a mailto link so user's default mail client opens with prefilled content
    const subject = encodeURIComponent(`Dhasu Talks - Contact from ${name || "Website Visitor"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:dhasutalksofficial@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="bg-[#0f0f0f] text-gray-100 py-16 px-6 md:px-16" id="contact">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ color: BRAND_YELLOW }}
        >
          Contact Us
        </motion.h2>

        <motion.p
          className="text-center text-gray-300 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          Got a collaboration, question or story idea? Reach out — we’d love to hear from you.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column: contact details */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#111111] rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4" style={{ color: BRAND_YELLOW }}>
                Direct Contact
              </h3>

              <div className="flex items-start gap-4 mb-4">
                <div className="text-[#fec713] mt-1"><FaEnvelope /></div>
                <div>
                  <p className="text-sm text-gray-300">Email</p>
                  <a href="mailto:dhasutalksofficial@gmail.com" className="font-medium hover:underline">
                    dhasutalksofficial@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-4">
                <div className="text-[#fec713] mt-1"><FaPhoneAlt /></div>
                <div>
                  <p className="text-sm text-gray-300">Phone</p>
                  <a href="tel:+918542820507" className="font-medium hover:underline">
                    +91 8542820507
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-4">
                <div className="text-[#fec713] mt-1"><FaMapMarkerAlt /></div>
                <div>
                  <p className="text-sm text-gray-300">Location</p>
                  <p className="font-medium">Lucknow, Uttar Pradesh, India</p>
                </div>
              </div>

              {/* <div className="mt-4">
                <p className="text-sm text-gray-400 mb-3">Office Hours</p>
                <p className="text-gray-300">Mon — Sat: 10:00 AM — 6:00 PM</p>
              </div> */}
            </div>

            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <a href="https://www.youtube.com/@Dhasutalksofficial/featured" target="_blank" rel="noreferrer" className="p-3 bg-[#111111] rounded-full hover:bg-[#262626]">
                <FaYoutube className="text-[#fec713]" />
              </a>
              <a href="https://www.instagram.com/dhasutalks" target="_blank" rel="noreferrer" className="p-3 bg-[#111111] rounded-full hover:bg-[#262626]">
                <FaInstagram className="text-[#fec713]" />
              </a>
              <a href="https://www.facebook.com/dhasutalks" target="_blank" rel="noreferrer" className="p-3 bg-[#111111] rounded-full hover:bg-[#262626]">
                <FaFacebook className="text-[#fec713]" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right column: contact form */}
          <motion.div
            className="bg-[#111111] rounded-2xl p-6 shadow-md"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-4" style={{ color: BRAND_YELLOW }}>
              Send us a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-300 mb-1">Your name</label>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#0b0b0b] border border-[#222] rounded-lg p-3 text-gray-100"
                  placeholder="e.g. Shivam "
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">Your email</label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#0b0b0b] border border-[#222] rounded-lg p-3 text-gray-100"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">Message</label>
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="5"
                  className="w-full bg-[#0b0b0b] border border-[#222] rounded-lg p-3 text-gray-100"
                  placeholder="Tell us about your idea or inquiry..."
                />
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  className="bg-[#fec713] text-black px-5 py-2 rounded-full font-semibold hover:bg-[#fed242] transition"
                >
                  Send message
                </button>

                <button
                  onClick={() => { setName(""); setEmail(""); setMessage(""); }}
                  type="button"
                  className="text-gray-300 px-4 py-2 rounded-full border border-[#222] hover:bg-[#0b0b0b] transition"
                >
                  Reset
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-2">
                We’ll respond within 1–2 business days. For urgent enquiries, call or WhatsApp us.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
