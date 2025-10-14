import React from "react";
import { motion } from "framer-motion";
import Service1 from "../../assets/images/service1.jpg"; 
import Service2 from "../../assets/images/service2.jpg"; 
import Service3 from "../../assets/images/service3.jpg"; 
import Service4 from "../../assets/images/service4.jpg"; 
import Service5 from "../../assets/images/service5.jpg"; 
import Service6 from "../../assets/images/service6.jpg"; 


const services = [
  {
    title: "Podcast Production",
    description:
      "From recording to publishing, we handle every step of your podcast journey with perfection.",
    price: "$99 / Episode",
    img: Service1,
  },
  {
    title: "News & Editorial Content  ",
    description:
      "Daily/weekly news roundups, special reports, and expert discussions. ",
    price: "$199 / Month",
    img: Service2,
  },
  {
    title: "Video & Studio Production ",
    description:
      "Full-length video podcasts, interviews, short films, and promotional videos. ",
    price: "$49 / Project",
    img: Service3,
  },
  {
    title: " Advertising & Promotional Campaigns ",
    description:
      "Creative ad production, Meta ads, and influencer campaigns. ",
    price: "$49 / Project",
    img: Service4,
  },
  {
    title: "Events & Live Coverage  ",
    description:
      "We cover and stream events, conferences, and workshops.",
    price: "$49 / Project",
    img: Service5,
  },
  {
    title: "Training & Workshops  ",
    description:
      "For podcasters, creators, and media professionals. ",
    price: "$49 / Project",
    img: Service6,
  },
  
];

const Services = () => {
  return (
    <section className="bg-[#1B1B1B] text-white py-24 px-6 md:px-20">
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-red-600 hover:text-red-500 mb-3"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h2>
        <motion.p
          className="text-gray-300 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          We offer creative and technical solutions to help your stories shine.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-[#2A2A2A] rounded-2xl overflow-hidden shadow-lg hover:shadow-[#ff4d00]/40 transition-all duration-500"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3 }}
          >
            <img
              src={service.img}
              alt={service.title}
              className="h-60 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-red-600 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-red-600 font-semibold">
                  {service.price}
                </span>
                <button className="bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-500 transition">
                  Read More
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
