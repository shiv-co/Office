import React from "react";
import { motion } from "framer-motion";
import AboutImg1 from "../../assets/images/about1.jpg"; // Top main image
import AboutImg2 from "../../assets/images/about2.jpg"; // Bottom image

const About = () => {
  // Define variants for consistent card animation
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

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
          className="rounded-lg w-[320px] h-[350px] object-cover absolute bottom-[-40px] right-[50px] z-20 shadow-xl border-4 border-[#fec713]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </div>

      {/* ---------- RIGHT SIDE CONTENT ---------- */}
      <div className="w-full md:w-1/2">
        

        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          About <br /> <span className="text-[#fec713]">Dhaasu Talks</span>
        </motion.h2>

        <motion.p
          className="text-gray-300 leading-relaxed mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Dhaasu Talks is a collaborative media venture {" "}
          {/* <span className="text-[#fec713] font-semibold">
            Syed Abbas Raza Rizvi, Syed Ali Saif Hussain, and Haider Ali.
          </span>{" "} */}
          We specialize in podcasting, video interviews, social media content creation, event
          coverage, and storytelling that inspires and informs.
        </motion.p>

        {/* ---------- Mission and Vision Cards in a Row ---------- */}
        <motion.div
          className="flex flex-col md:flex-row gap-6 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, staggerChildren: 0.2 }} // Stagger children for sequential animation
        >
          {/* Mission Card */}
          <motion.div
            className="flex-1 bg-[#2C2C2C] p-6 rounded-lg overflow-hidden shadow-lg hover:shadow-[#ff4d00]/40 transition-all duration-500 "
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <h3 className="text-xl font-semibold text-[#fec713] mb-2 text-center">Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To empower voices and stories that spark thought, entertain audiences, and create social
              value through creative and digital media.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            className="flex-1 bg-[#2C2C2C] p-6 rounded-lg overflow-hidden shadow-lg hover:shadow-[#ff4d00]/40 transition-all duration-500 "
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          > 
            <h3 className="text-xl font-semibold text-[#fec713] mb-2 text-center">Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              To become one of India’s leading digital media networks known for authentic
              storytelling, quality production, and impact-driven communication.
            </p>
            
          </motion.div>
        </motion.div>

        {/* ---------- Core Values Section ---------- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
        >
          <h3 className="text-2xl font-semibold text-[#fec713] mb-3">Core Values</h3>
          <ul className="text-gray-300 space-y-2">
            <li>• Creativity with Purpose</li>
            <li>• Authentic Storytelling</li>
            <li>• Collaboration & Inclusion</li>
            <li>• Professionalism & Integrity</li>
            <li>• Social Impact</li>
          </ul>
        </motion.div>

        {/* <motion.button
          className="mt-8 bg-[#fec713] hover:bg-[#fed242] text-white font-semibold px-8 py-3 rounded-full transition"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          Discover More
        </motion.button> */}
      </div>
    </section>
  );
};

export default About;
