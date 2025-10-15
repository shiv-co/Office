import React from "react";
import { FaFacebookF, FaInstagram, FaPinterestP, FaXTwitter } from "react-icons/fa6";

const teamMembers = [
  {
    name: "Syed Abbas Raza Rizvi",
    position: "Founder & Lead Host",
    role: "Manages guest relations, creative direction, and flagship interview shows.  ",
    img: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Syed Ali Saif Hussain",
    position: " Partner, Creative Head",
    role: "Handles production, social media, and promotional activities.",
    img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: " Haider Ali",
    position: "Partner & Studio Manager ",
    role: "Oversees studio operations, arrangements, and topic research. ",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=800&q=80",
  },
];

const Team = () => {
  return (
    <> 
    <div className="min-h-screen bg-[#111] text-white py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold">
          MEET OUR EXPERT <br />
          <span className="text-[#fec713]">TEAM MEMBER</span>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-20 px-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
          >
            <div className="relative group">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-80 object-cover"
              />
              {/* Social icons overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="#" className="bg-[#fec713] p-3 rounded-full text-black hover:scale-110 transition">
                  <FaFacebookF />
                </a>
                <a href="#" className="bg-[#fec713] p-3 rounded-full text-black hover:scale-110 transition">
                  <FaXTwitter />
                </a>
                <a href="#" className="bg-[#fec713] p-3 rounded-full text-black hover:scale-110 transition">
                  <FaInstagram />
                </a>
                <a href="#" className="bg-[#fec713] p-3 rounded-full text-black hover:scale-110 transition">
                  <FaPinterestP />
                </a>
              </div>
            </div>

            {/* Member Info */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-gray-400 text-sm">{member.position}</p>
              <p className="text-gray-100 text-lg p-2">{member.role}</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Team;
