import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Import the WhatsApp icon

// Define your phone number and pre-filled message
const WHATSAPP_NUMBER = "919932012125"; // Replace with your number (include country code, no '+')
const PREFILLED_MESSAGE = "Hi there! I would like to know more about Dhaasu Talks!";

// Encode the message for the URL
const encodedMessage = encodeURIComponent(PREFILLED_MESSAGE);

// Construct the WhatsApp link
const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

const WhatsAppButton = () => {
  return (
    <a
      href={whatsappLink}
      target="_blank" // Opens WhatsApp in a new tab/app
      rel="noopener noreferrer" // Security best practice for target="_blank"
      className="fixed bottom-5 right-22 bg-yellow-400 hover:bg-yellow-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 z-50" // Adjusted color and position (right-20)
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={24} color='black'/>
    </a>
  );
};

export default WhatsAppButton;