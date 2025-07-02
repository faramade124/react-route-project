import { Link, useLocation } from "react-router-dom"
import "./Header.css"

const Header = () => {
  const location = useLocation()

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src="/src/assets/image/Group 8.png" alt="" srcset="" />
            <span className="logo-subtext">DIGITAL PROJECT</span>
          </Link>
        </div>
        <nav className="nav">
          <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
            MAIN
          </Link>
          <Link to="/gallery" className={location.pathname === "/gallery" ? "nav-link active" : "nav-link"}>
            GALLERY
          </Link>
          <Link to="/projects" className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}>
            PROJECTS
          </Link>
          <a href="#" className="nav-link">
            CERTIFICATIONS
          </a>
          <a href="#" className="nav-link">
            CONTACTS
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
