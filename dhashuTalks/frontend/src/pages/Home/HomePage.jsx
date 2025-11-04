import React, { useState, useEffect, useRef } from "react";
import DhashuLogo from "../../assets/icons/dhaasuTalk.svg";
import { FaYoutube, FaInstagram, FaFacebook, FaBars, FaTimes } from "react-icons/fa";
import Podcast_Img from "../../assets/images/podcast_Image.jpg";
import { motion } from "framer-motion";

import About from "../About/About.jsx";
import Services from "../Services/Services.jsx";
import Footer from "../Footer/Footer.jsx";
import Portfolio from "../Portfolio/Portfolio.jsx";
import News from "../News/News.jsx";
import Chatbot from "../../components/Chatbot.jsx";
import WhatsAppButton from "../../components/whatsappBtn.jsx";
import dhasu from "../../assets/icons/dhasu1.png";
import talks from "../../assets/icons/talks3.png";
import Careers from "../Careers/Careers.jsx";
import Popup from "../../components/Popup.jsx";
import Contact from "../contactUs/contactUs.jsx";


// TypingText Component
const TypingText = ({ text, speed = 70 }) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{displayed}</span>;
};

// Navbar Component
const Navbar = ({ scrolled, scrollToSection, aboutRef }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = (ref) => {
    scrollToSection(ref);
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-[#111111] shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="flex justify-between items-center px-5 md:px-10">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={DhashuLogo} alt="Dhaasu Talk Logo" className="h-14 md:h-16" />
          <h1 className="hidden lg:block text-2xl font-bold font-montserrat tracking-wide text-[#fec713]">
            Dhasu Talks
          </h1>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-gray-200">
          {[
            { name: "Home", ref: "home" },
            { name: "Services", ref: "services" },
            { name: "About Us", ref: "about" },
            { name: "Portfolio", ref: "portfolio" },
            { name: "Careers", ref: "careers" },
            { name: "News", ref: "news" },
          ].map((item) => (
            <li
              key={item.name}
              onClick={() => handleMenuClick(item.ref)}
              className="hover:text-[#fec713] cursor-pointer font-semibold md:text-lg"
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Contact & Mobile Menu Icon */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => scrollToSection("contact")}
            className="hidden md:inline bg-[#fec713] px-5 py-2 rounded-full font-semibold hover:bg-[#fed242] transition"
          >
            Contact Us
          </button>

          {/* Hamburger Icon */}
          <button
            className="md:hidden text-[#fec713] text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-[#111111] text-gray-200 text-center py-5 space-y-5"
        >
          {[
            { name: "Home", ref: "home" },
            { name: "Services", ref: "services" },
            { name: "About Us", ref: "about" },
            { name: "Portfolio", ref: "portfolio" },
            { name: "News", ref: "news" },
          ].map((item) => (
            <div
              key={item.name}
              onClick={() => handleMenuClick(item.ref)}
              className="hover:text-[#fec713] cursor-pointer font-semibold text-lg"
            >
              {item.name}
            </div>
          ))}

          <button
           onClick={() => scrollToSection("contact")}
            className="bg-[#fec713] px-6 py-2 rounded-full font-semibold hover:bg-[#fed242] transition inline-block"
          >
            Contact Us
          </button>
        </motion.div>
      )}
    </nav>
  );
};

// Hero Section
const HeroSection = React.forwardRef((props, ref) => (
  <section
    ref={ref}
    className="relative flex flex-col justify-center items-center text-center h-[100vh] bg-cover bg-center"
    style={{
      backgroundImage: `url(${Podcast_Img})`,
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#1B1B1B]/90"></div>

    <div className="relative z-10 px-4 mt-32 md:mt-44">
      <motion.h2
        className="text-3xl md:text-5xl font-bold leading-tight mb-2 text-white"
        initial={{ opacity: 0, x: -80, y: -50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Welcome to
      </motion.h2>

      <motion.h2
        className="text-[3rem] md:text-[8rem] font-extrabold leading-tight"
        initial={{ opacity: 0, x: 80, y: 80 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        <div className="flex justify-center items-center gap-x-2 md:gap-x-4">
          <img
            src={dhasu}
            alt="धासू"
            className="h-[1.3em] w-auto mt-2 md:mt-5 drop-shadow-[0_0_25px_rgba(196,12,17,0.5)]"
          />
          <img src={talks} alt="Talks" className="h-[1.3em] w-auto" />
        </div>
      </motion.h2>

      <motion.p
        className="text-sm md:text-base max-w-3xl mx-auto mb-8 mt-4 text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.0, delay: 1.2 }}
      >
        Where Conversations Create Impact. <br />
        Bringing voices, stories, and ideas to life through powerful{" "}
        <TypingText text="conversations and creative storytelling." />
      </motion.p>

      {/* Social Buttons */}
      <div className="grid grid-cols-2 sm:flex sm:flex-nowrap justify-center gap-4 mt-8">
        <a
          href="https://www.youtube.com/@Dhasutalksofficial/featured"
          target="_blank"
          className="flex items-center space-x-2 bg-[#fec713] px-5 py-3 rounded-full hover:bg-[#fed242] transition text-black font-semibold justify-center"
        >
          <FaYoutube /> <span>YouTube</span>
        </a>
        <a
          href="https://www.instagram.com/dhasutalks"
          target="_blank"
          className="flex items-center space-x-2 bg-[#fec713] px-5 py-3 rounded-full hover:bg-[#fed242] transition text-black font-semibold justify-center"
        >
          <FaInstagram /> <span>Instagram</span>
        </a>
        <a
          href="https://www.facebook.com/share/17fnZdrPRz/"
          target="_blank"
          className="flex items-center space-x-2 bg-[#fec713] px-5 py-3 rounded-full hover:bg-[#fed242] transition text-black font-semibold justify-center"
        >
          <FaFacebook /> <span>Facebook</span>
        </a>
      </div>
    </div>
  </section>
));

// HomePage Component
export default function HomePage() {
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const newsRef = useRef(null);
  const careersRef = useRef(null);
  const contactRef = useRef(null);


  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setIsFirstVisit(true);
      localStorage.setItem("hasVisited", "true");
      setTimeout(() => {
        if (newsRef.current) {
          newsRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    }
  }, []);

  const scrollToSection = (section) => {
    if (section === "home" && homeRef.current)
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    else if (section === "about" && aboutRef.current)
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    else if (section === "services" && servicesRef.current)
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    else if (section === "portfolio" && portfolioRef.current)
      portfolioRef.current.scrollIntoView({ behavior: "smooth" });
    else if (section === "news" && newsRef.current)
      newsRef.current.scrollIntoView({ behavior: "smooth" });
    else if (section === "careers" && careersRef.current)
      careersRef.current.scrollIntoView({ behavior: "smooth" });
    else if (section === "contact" && contactRef.current)
  contactRef.current.scrollIntoView({ behavior: "smooth" });

  };

  return (
    <div className="bg-[#1B1B1B] text-white font-sans min-h-screen overflow-x-hidden">
      <Navbar
        scrolled={scrolled}
        scrollToSection={scrollToSection}
        aboutRef={aboutRef}
      />
      <HeroSection ref={homeRef} />
      <div ref={servicesRef}>
        <Services />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={portfolioRef}>
        <Portfolio />
      </div>
      <div ref={careersRef}>
        <Careers />
      </div>
      <div ref={newsRef}>
        <News />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>

      <Footer />
      <WhatsAppButton />
      <Chatbot />
      <Popup />
    </div>
  );
}
