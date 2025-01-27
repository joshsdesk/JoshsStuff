import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <motion.header
      className="header-nav"
      initial={{ y: -100, opacity: 0 }} // Start above the viewport
      animate={{ y: 0, opacity: 1 }} // Slide into position
      transition={{ type: "spring", stiffness: 80, duration: 0.8 }} // Smooth spring effect
    >
      <nav>
        {/* Replace with your logo from the old portfolio */}
        <img src="/assets/images/logo.png" className="logo" alt="Logo" />
        <motion.ul
          className="nav-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <li>
            <NavLink to="/" activeClassName="active">About Me</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/resume" activeClassName="active">Resume</NavLink>
          </li>
        </motion.ul>
      </nav>
    </motion.header>
  );
}

export default Header;
