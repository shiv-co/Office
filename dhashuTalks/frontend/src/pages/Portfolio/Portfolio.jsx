import React from "react";
import { motion } from "framer-motion";
import { FaYoutube, FaPodcast, FaCameraRetro } from "react-icons/fa";

// Example image imports (replace with your actual assets)
import yt1 from "../../assets/images/yt1.jpg";
import yt2 from "../../assets/images/yt2.jpg";
import yt3 from "../../assets/images/yt3.jpg";
import pod1 from "../../assets/images/pod1.jpg";
// import pod2 from "../../assets/images/pod2.jpg";
// import pod3 from "../../assets/images/pod3.jpg";
import event1 from "../../assets/images/event1.jpg";
import event2 from "../../assets/images/event2.jpg";
import event3 from "../../assets/images/event3.jpg";

const categories = [
  {
    title: "YouTube Playlists",
    icon: <FaYoutube className="text-4xl text-[#fec713]" />,
    items: [
      { img: yt1, title: "Army Day 2025 celebrations", link: "https://www.youtube.com/watch?v=3e2ARI3oDsQ" },
      { img: yt2, title: "Motivational Talks", link: "https://www.youtube.com/watch?v=kOveEiMFESU" },
      { img: yt3, title: "Kaun Hai Hum", link: "https://www.youtube.com/watch?v=aP3gmEm3o5Y" },
    ],
  },
  {
    title: "Podcast Episodes",
    icon: <FaPodcast className="text-4xl text-[#fec713]" />,
    items: [
      { img: pod1, title: "The Hustler’s Mindset", link: "https://www.youtube.com/watch?v=fHBR1j1kJ1I&pp=ygUPcG9kY2FzdCBjaGFubmVs" },
      { img: pod1, title: "Creativity Unplugged", link: "https://www.youtube.com/watch?v=fHBR1j1kJ1I&pp=ygUPcG9kY2FzdCBjaGFubmVs" },
      { img: pod1, title: "Voices that Inspire", link: "https://www.youtube.com/watch?v=fHBR1j1kJ1I&pp=ygUPcG9kY2FzdCBjaGFubmVs" },
    ],
  },
  {
    title: "Event Gallery",
    icon: <FaCameraRetro className="text-4xl text-[#fec713]" />,
    items: [
      { img: event1, title: "Podcast Summit 2024", link: "#" },
      { img: event2, title: "Studio Sessions", link: "#" },
      { img: event3, title: "Live Dhaasu Nights", link: "#" },
    ],
  },
];

const Portfolio = () => {
  return (
    <div className="bg-[#1B1B1B] text-white min-h-screen py-10 px-6 md:px-16">
      <motion.h1
        className="text-center text-4xl md:text-5xl font-extrabold mb-10 font-montserrat text-[#fec713]"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Portfolio
      </motion.h1>

      <div className="space-y-20">
        {categories.map((category, index) => (
          <section key={index}>
            <motion.div
              className="flex items-center gap-3 mb-10"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {category.icon}
              <h2 className="text-3xl font-bold text-[#fec713] font-montserrat">
                {category.title}
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-10">
              {category.items.map((item, i) => (
                <motion.a
                  href={item.link}
                  key={i}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#111111] rounded-2xl overflow-hidden shadow-md hover:shadow-[#fec713]/40 hover:scale-105 transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-60 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-[#fec713]">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 mt-2 text-sm">
                      Click to explore
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
