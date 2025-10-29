import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { IoChatbubbleSharp, IoCloseSharp } from "react-icons/io5"; // Added Close icon
import { motion, AnimatePresence } from "framer-motion"; // Import motion and AnimatePresence

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  // Add a default welcome message
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Welcome to DhasuTalks AI! How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Add loading state
  const messagesEndRef = useRef(null); // Ref for scrolling

  // Function to scroll to the bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll to bottom whenever messages update
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle sending a message
  const sendMessage = async () => {
    // Trim input and check if empty or already loading
    const trimmedInput = input.trim();
    if (!trimmedInput || isLoading) return;

    const newMessage = { sender: "user", text: trimmedInput };
    // Use functional update to ensure state consistency
    setMessages((prev) => [...prev, newMessage]);
    setInput(""); // Clear input immediately
    setIsLoading(true); // Set loading state

    try {
      // Use environment variable for API endpoint (recommended)
      const apiUrl = process.env.REACT_APP_CHATBOT_API_URL || "http://localhost:5000/api/chat";
      const res = await axios.post(apiUrl, { message: trimmedInput });
      const botMessage = { sender: "bot", text: res.data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Chatbot API error:", error); // Log the actual error
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Oops! I couldn't connect. Please try again later." }, // More specific error
      ]);
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  // Handle Enter key press in input
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) { // Allow Shift+Enter for new lines if needed
      e.preventDefault(); // Prevent default form submission/new line
      sendMessage();
    }
  };

  return (
    <div>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 bg-yellow-400 hover:bg-yellow-500 text-black p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 z-50"
        aria-label={isOpen ? "Close Chat" : "Open Chat"}
      >
        {/* Change icon based on state */}
        {isOpen ? <IoCloseSharp size={24} /> : <IoChatbubbleSharp size={24} />}
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-20 right-5 w-80 max-w-[calc(100vw-40px)] bg-white rounded-xl shadow-xl border border-gray-200 flex flex-col z-40" // Ensure width doesn't exceed viewport
          >
            {/* Header */}
            <div className="flex justify-between items-center p-3 bg-yellow-400 text-black font-bold rounded-t-xl">
              <span>DhasuTalks AI</span>
              {/* Optional: Add explicit close button in header too */}
               <button onClick={() => setIsOpen(false)} className="text-black hover:text-gray-700" aria-label="Close Chat">
                   <IoCloseSharp size={20} />
               </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 h-80 overflow-y-auto p-3 text-sm space-y-3">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[75%] p-2 rounded-lg break-words ${ // Added break-words
                      msg.sender === "user"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {/* Loading Indicator */}
              {isLoading && (
                 <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex justify-start"
                 >
                   <div className="p-2 rounded-lg bg-gray-200 text-gray-500 italic">
                      Typing...
                   </div>
                 </motion.div>
              )}
              {/* Invisible div to target for scrolling */}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-2 border-t border-gray-200 flex items-center text-gray-600">
              <input
                className="flex-1 border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-400 disabled:bg-gray-100" // Added focus styles and disabled style
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                onKeyDown={handleKeyDown}
                disabled={isLoading} // Disable input while loading
                aria-label="Chat message input"
              />
              <button
                onClick={sendMessage}
                className="ml-2 bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed" // Added focus styles and disabled style
                disabled={isLoading || !input.trim()} // Disable button while loading or if input is empty
                aria-label="Send message"
              >
                ➤
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}