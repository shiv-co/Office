import React from "react";
import { motion } from "framer-motion";
import AboutImg1 from "../../assets/images/about1.jpg"; // Top main image
import AboutImg2 from "../../assets/images/about2.jpg"; // Bottom image

const About = () => {
  return (
    <section className="bg-[#1B1B1B] text-white py-24 px-6 md:px-20 flex flex-col md:flex-row items-center gap-16 overflow-hidden">
      {/* ---------- LEFT SIDE IMAGES ---------- */}
      <div className="relative w-full md:w-1/2 flex justify-center">
        {/* Orange outline box */}
        {/* <div className="absolute border-4 border-[#F97316] top-8 left-8 w-[320px] h-[400px] rounded-lg hidden md:block"></div> */}

        {/* Main top image */}
        <motion.img
          src={AboutImg1}
          alt="Podcast Host"
          className="rounded-lg w-[400px] h-[520px] object-cover relative z-10 shadow-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />

        {/* Overlapping image (bottom right) */}
        <motion.img
          src={AboutImg2}
          alt="Recording Studio"
          className="rounded-lg w-[320px] h-[350px] object-cover absolute bottom-[-40px] right-[50px] z-20 shadow-xl border-4 border-[#F97316]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </div>

      {/* ---------- RIGHT SIDE CONTENT ---------- */}
      <div className="w-full md:w-1/2">
        <motion.p
          className="text-[#F97316] uppercase font-semibold mb-2 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          
        </motion.p>

        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Get to know About <br /> <span className="text-[#F97316]">Dhaasu Talks</span>
        </motion.h2>

        <motion.p
          className="text-gray-300 leading-relaxed mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Dhaasu Talks is a collaborative media venture founded by{" "}
          <span className="text-[#F97316] font-semibold">
            Syed Abbas Raza Rizvi, Syed Ali Saif Hussain, and Haider Ali.
          </span>{" "}
          We specialize in podcasting, video interviews, social media content creation, event
          coverage, and storytelling that inspires and informs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-[#F97316] mb-2">Mission</h3>
          <p className="text-gray-300 mb-6">
            To empower voices and stories that spark thought, entertain audiences, and create social
            value through creative and digital media.
          </p>

          <h3 className="text-2xl font-semibold text-[#F97316] mb-2">Vision</h3>
          <p className="text-gray-300 mb-6">
            To become one of India’s leading digital media networks known for authentic
            storytelling, quality production, and impact-driven communication.
          </p>

          <h3 className="text-2xl font-semibold text-[#F97316] mb-3">Core Values</h3>
          <ul className="text-gray-300 space-y-2">
            <li>• Creativity with Purpose</li>
            <li>• Authentic Storytelling</li>
            <li>• Collaboration & Inclusion</li>
            <li>• Professionalism & Integrity</li>
            <li>• Social Impact</li>
          </ul>
        </motion.div>

        <motion.button
          className="mt-8 bg-[#F97316] hover:bg-[#fb923c] text-white font-semibold px-8 py-3 rounded-full transition"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          Discover More
        </motion.button>
      </div>
    </section>
  );
};

export default About;
