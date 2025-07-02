import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <div className="logo">
              <span className="logo-text">DA</span>
              <span className="logo-subtext">DIGITAL PROJECT</span>
            </div>
          </div>

          <div className="footer-section">
            <h3>Information</h3>
            <ul>
              <li>
                <a href="/">Main</a>
              </li>
              <li>
                <a href="/gallery">Gallery</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>
                <a href="#">Certifications</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contacts</h3>
            <div className="contact-info">
              <p><img src="/src/assets/image/Vector (1).png" alt="" srcset="" /> 1234 Sample Street</p>
              <p>Austin Texas 78704</p>
              <p><img src="/src/assets/image/Group.png" alt="" srcset="" /> 512.333.2222</p>
              <p>✉️ sampleemail@gmail.com</p>
            </div>
          </div>

          <div className="footer-section">
            <h3>Social Media</h3>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <img src="/src/assets/image/Shape (1).png" alt="" srcset="" />
              </a>
              <a href="#" aria-label="Twitter">
                <img src="/src/assets/image/Shape (2).png" alt="" srcset="" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <img src="/src/assets/image/Shape (3).png" alt="" srcset="" />
              </a>
              <a href="#" aria-label="Pinterest">
                <img src="/src/assets/image/Shape (4).png" alt="" srcset="" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2019 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
