import { Link } from "react-router-dom"
import Logo from "./Logo"
import discord from '../assets/images/DiscordLogo.svg'
import meta from '../assets/images/MetaLogo.svg'
import x from '../assets/images/XLogo.svg'

const Footer = () => {
  return (
    <footer>
      <div className="footer-feature">
        <div className="footer-feature-text">
          <h3>Sound. Presence. Purpose</h3>
          <p>Focused on crafting immersive audio experiences.<br /> We believe sound should not just be heard—it should move you.</p>
        </div>
        <div className="footer-nav">
          <Link to="/tech-specs" className="button">Aura Pro II</Link>
          <Link to="/tech-specs" className="button">Flow II</Link>
        </div>
      </div>
      <div className="footer">
        <Logo />
        <div className="footer-socials">
          <p>© 2025 Resonance. All rights reserved.</p>
          <div className="socials">
            <img src={discord} style={{width: "26px"}} alt="discord icon" />
            <img src={meta} style={{width: "26px"}} alt="meta icon" />
            <img src={x} style={{width: "26px"}} alt="x.com icon" />
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer