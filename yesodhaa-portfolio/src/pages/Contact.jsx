
import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const contacts = [
  {
    name: "WhatsApp",
    url: "https://wa.me/your-number",
    icon: "🟢",
    color: "#25D366",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/your-profile",
    icon: "🔵",
    color: "#0077b5",
  },
  {
    name: "GitHub",
    url: "https://github.com/your-username",
    icon: "⚫",
    color: "#333",
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/your-username",
    icon: "🟩",
    color: "#2EC866",
  },
  {
    name: "Email",
    url: "mailto:your@email.com",
    icon: "✉️",
    color: "#EA4335",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  return (
    <div className="contact-bg">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="contact-title"
      >
        Get in Touch
      </motion.h2>
      <div className="contact-cards">
        {contacts.map((c, i) => (
          <motion.a
            key={c.name}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
            style={{ borderColor: c.color }}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: i * 0.2, duration: 0.7 }}
          >
            <span className="contact-icon" style={{ color: c.color }}>
              {c.icon}
            </span>
            <span className="contact-name">{c.name}</span>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
