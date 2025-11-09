import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  const linkClass = ({ isActive }) => isActive ? "active-navbar" : ""
  return (
    <nav id="nav">
        <Logo />
        <ul className="nav-links">
          <li>
            <NavLink to="/" className={linkClass} >Home</NavLink>
          </li>
          <li>
            <NavLink to="/tech-specs" className={linkClass} >Tech Specs</NavLink>
          </li>
          <li>
            <NavLink to="/compare" className={linkClass} >Compare</NavLink>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar