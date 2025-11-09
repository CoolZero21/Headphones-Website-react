import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Logo from "./Logo";
import list from '../assets/images/List.png'

const Navbar = () => {
    const [position, setPosition] = useState("100%")
    const scrollYRef = useRef(0);
    useEffect(() => {
        if (position === "0%") {
            scrollYRef.current = window.scrollY || window.pageYOffset || 0;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollYRef.current}px`;
            document.body.style.left = '0';
            document.body.style.right = '0';
        } else {
            const prevY = scrollYRef.current || 0;
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.left = '';
            document.body.style.right = '';
            window.scrollTo(0, prevY);
        }
        return () => {
            const prevY = scrollYRef.current || 0;
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.left = '';
            document.body.style.right = '';
            window.scrollTo(0, prevY);
        };
    }, [position]);
    const handleNavbar = () => {
        if (position === "0%") {
            setPosition("100%")
        } else {
            setPosition("0%")
        }
    }
    const linkClass = ({ isActive }) => isActive ? "active" : ""
    return (
    <nav id="nav" >
        <Logo />
        <img src={list} onClick={handleNavbar} />
        <ul className="nav-links-mobile" style={{ left: position }}  >
            <li>
            <NavLink to="/" className={linkClass} onClick={() => setPosition("100%")} >Home</NavLink>
            </li>
            <li>
            <NavLink to="/tech-specs" className={linkClass} onClick={() => setPosition("100%")} >Tech Specs</NavLink>
            </li>
            <li>
            <NavLink to="/compare" className={linkClass} onClick={() => setPosition("100%")} >Compare</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar