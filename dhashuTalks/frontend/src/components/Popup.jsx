import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import promoImage from "../assets/images/podcast_ep1.webp"; // replace with your image path

export default function Popup() {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenPopup");

    if (!hasSeenPopup) {
      // Show popup for first-time visitors
      setTimeout(() => setShowPopup(true), 800); // small delay after page load
      localStorage.setItem("hasSeenPopup", "true");
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          className="fixed inset-0 bg-black/70 flex justify-center items-center z-[999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative bg-[#1B1B1B] rounded-2xl shadow-lg overflow-hidden max-w-md w-[90%]"
          >
            <img
              src={promoImage}
              alt="Welcome"
              className="w-full h-auto object-cover"
            />

            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-white bg-black/60 p-2 rounded-full hover:bg-black/80 transition"
            >
              <FaTimes size={20} />
            </button>

            <div className="p-4 text-center text-gray-200">
              <h2 className="text-2xl font-bold text-[#fec713] mb-2">
                Welcome to Dhasu Talks!
              </h2>
              <p className="text-sm text-gray-400 mb-3">
                Where conversations create impact 🎙️  
              </p>
              <button
                onClick={handleClose}
                className="bg-[#fec713] text-black px-5 py-2 rounded-full font-semibold hover:bg-[#fed242] transition"
              >
                Let’s Go
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
