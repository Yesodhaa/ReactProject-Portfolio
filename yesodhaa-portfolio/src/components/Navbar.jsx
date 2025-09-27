
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: "Education", path: "/education" },
    { name: "Projects", path: "/projects" },
    { name: "Certifications", path: "/certifications" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      className="navbar-glass"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
    >
      <ul>
        {navLinks.map(link => (
          <li key={link.name}>
            <Link
              to={link.path}
              className={location.pathname === link.path ? "active" : ""}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
