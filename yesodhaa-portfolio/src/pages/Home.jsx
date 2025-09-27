

import { motion } from "framer-motion";
import "./Home.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 80 } },
};

const Home = () => {
  return (
    <motion.section
      className="home"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        variants={itemVariants}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/tech/vite.svg"
          alt="Profile"
        />
      </motion.div>
      <motion.h1 variants={itemVariants}>
        Hi, I'm <span style={{ color: "#38bdf8" }}>Yesodhaa</span>
      </motion.h1>
      <motion.div variants={itemVariants}>
        <motion.p
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          I'm a Full Stack Developer with a love for crafting beautiful, responsive, and high-performance web applications. My journey in tech started with curiosity and quickly grew into a passion for solving real-world problems through code. I enjoy working with modern JavaScript frameworks, bringing ideas to life with smooth animations, and collaborating with teams to deliver impactful solutions.<br /><br />
          When I'm not coding, you'll find me exploring new technologies, contributing to open source, or sharing knowledge with the developer community. Let's build something amazing together! 🚀
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default Home;
