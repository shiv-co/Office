import React, { useRef } from "react";
import { motion } from "framer-motion";

const newsItems = [
  {
    id: 1,
    title: "Global Employee Benefits: How to Attract & Retain Talent in 2025",
    date: "March 20, 2025",
    img: "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "What Are Employer Benefits Packages & How to Offer Them?",
    date: "March 19, 2025",
    img: "https://images.unsplash.com/photo-1524503033411-c9566986fc8f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Occupational Pension vs Auto Enrolment Ireland: Which Is Right for You?",
    date: "March 17, 2025",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "How to Prepare for Auto Enrolment Ireland: Employer Guide",
    date: "March 17, 2025",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
];

const News = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -332, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 332, behavior: "smooth" });
  };

  return (
    <div className="bg-[#1B1B1B] min-h-screen text-white px-4 md:px-20 py-16">
      <motion.h2
        className="text-4xl md:text-6xl font-extrabold text-center mb-14"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Latest <span className="text-[#fec713]">News</span>
      </motion.h2>

      {/* Top Featured Section */}
      <div className="flex flex-col md:flex-row gap-8 mb-16">
        <motion.div
          className="md:w-2/3 bg-[#222] rounded-2xl overflow-hidden shadow-lg hover:shadow-[#fec713]/40 transition"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1200&q=80"
            alt="Featured story"
            className="w-full h-80 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2">
              We’ve raised $14.5m to build the employee benefits infrastructure
              for the internet
            </h3>
            <p className="text-gray-400 text-sm">May 22, 2025</p>
          </div>
        </motion.div>

        <div className="md:w-1/3 flex flex-col gap-6">
          <motion.div
            className="bg-[#222] rounded-2xl overflow-hidden shadow-lg hover:shadow-[#fec713]/40 transition"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
              alt="Story 1"
              className="w-full h-36 object-cover"
            />
            <div className="p-4">
              <h4 className="text-lg font-semibold">
                Employee Benefits UK: What to Offer in 2025 (20+ Examples)
              </h4>
              <p className="text-gray-400 text-sm">April 17, 2025</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-[#222] rounded-2xl overflow-hidden shadow-lg hover:shadow-[#fec713]/40 transition"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1618005198919-d3d4b5a86b99?auto=format&fit=crop&w=800&q=80"
              alt="Story 2"
              className="w-full h-36 object-cover"
            />
            <div className="p-4">
              <h4 className="text-lg font-semibold">
                Helios Launches Local Health Benefits powered by Kota Embed
              </h4>
              <p className="text-gray-400 text-sm">April 17, 2025</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Buttons (visible only on mobile) */}
      
      {/* Grid (desktop) / Horizontal Scroll (mobile) */}
      <motion.div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-5 scrollbar-hide md:grid md:grid-cols-3 md:gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        {newsItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-80 md:w-auto bg-[#222] rounded-2xl overflow-hidden shadow-lg hover:shadow-[#fec713]/40 transition"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.date}</p>
            </div>
          </div>
        ))}
      </motion.div>
      <p className="text-sm text-gray-300 text-center p-1 md:hidden">  Swipe</p>
      <div className="relative mt-5 md:hidden ">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2  text-black p-2 rounded-full shadow-lg"
        >
          ◀
        </button>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-black p-2 rounded-full shadow-lg"
        >
          ▶ 
        </button>
      </div>

    </div>
  );
};

export default News;
