import React from "react";
import { motion } from "framer-motion";

export default function Careers() {
  return (
    <section className="bg-[#111111] text-gray-200 py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-[#fec713] mb-6"
        >
          Join Our Team
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 mb-10"
        >
          We’re always looking for passionate individuals who love storytelling,
          creativity, and innovation. Whether you’re a creator, editor, designer,
          or strategist — there’s a place for you at <span className="text-[#fec713] font-semibold">Dhasu Talks</span>.
        </motion.p>

        <div className="grid md:grid-cols-4 gap-10 mt-10">
          {[
            {
              title: "Media & Production Intern",
              desc: "Craft engaging and visually stunning stories through video editing.",
            },
            {
              title: "Social Media ",
              desc: "Shape our brand voice and connect with our growing online community.",
            },
            {
              title: "Podcast/ News Team",
              desc: "Bring ideas to life by leading meaningful conversations on our platform.",
            },
             {
              title: "Content & Research ",
              desc: "Bring ideas to life by leading meaningful conversations on our platform.",
            },
          ].map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.8 }}
              className="bg-[#1B1B1B] p-6 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition transform duration-300"
            >
              <h3 className="text-2xl font-semibold text-[#fec713] mb-3">
                {role.title}
              </h3>
              <p className="text-gray-400 mb-5">{role.desc}</p>
              <a
                href="mailto:careers@dhasutalks.com"
                target="_blank"
                className="bg-[#fec713] text-black px-4 py-2 rounded-full font-semibold hover:bg-[#fed242] transition"
              >
                Apply Now
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-gray-400 mt-10 text-sm">
          Don’t see your role? Send your portfolio or resume to{" "}
          <a
            href="mailto:careers@dhasutalks.com"
            target="_blank"
            className="text-[#fec713] hover:underline"
          >
            careers@dhasutalks.com
          </a>
        </p>
      </div>
    </section>
  );
}
