import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="icons">
        <h2 className="footer-heading">
          <span><center>Follow us on:</center></span>
        </h2>
        <div className="icon-grid">
          <a href="https://github.com" className="icon-link">
            <i className="fa-brands fa-github"></i> GitHub
          </a>
          <a href="https://www.linkedin.com" className="icon-link">
            <i className="fa-brands fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://www.facebook.com" className="icon-link">
            <i className="fa-brands fa-facebook"></i> Facebook
          </a>
          <a href="https://www.instagram.com" className="icon-link">
            <i className="fa-brands fa-instagram"></i> Instagram
          </a>
          <a href="https://www.youtube.com" className="icon-link">
            <i className="fa-brands fa-youtube"></i> YouTube
          </a>
          <a href="https://twitter.com" className="icon-link">
            <i className="fa-brands fa-twitter"></i> Twitter
          </a>
          <a href="https://www.gmail.com" className="icon-link">
          <i className="fa-solid fa-envelope"></i> Email
          </a>
          <a href="https://www.whatsapp.com" className="icon-link">
          <i class="fa-brands fa-whatsapp"></i>Whatsapp
           </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;