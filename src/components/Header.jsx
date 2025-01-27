import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="header-nav">
        <img src="/assets/Images/joshslogo-white.png" className="logo" alt="Logo" />
        <ul>
          <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>About Me</NavLink></li>
          <li><NavLink to="/portfolio" className={({ isActive }) => isActive ? "active" : ""}>Portfolio</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
          <li><NavLink to="/resume" className={({ isActive }) => isActive ? "active" : ""}>Resume</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

