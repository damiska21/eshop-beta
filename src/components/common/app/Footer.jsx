import { useLocalization } from "../../../contexts/LocalizationContext";
import "./Footer.css";

function Footer() {
  const { strings } = useLocalization();
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <iframe
            title="Mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2316.889483122326!2d14.405351576037416!3d50.081676813848446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94fb3b68cc1f%3A0xe4969e96af63265d!2zTWFsb3N0cmFuc2vDqSBuw6FixZkuIDEsIDExOCAwMCBNYWzDoSBTdHJhbmE!5e1!3m2!1scs!2scz!4v1747918476585!5m2!1scs!2scz"
            width="280"
            height="180"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="footer-center">
          <h3>{strings.footer.contact}</h3>
          <p>{strings.footer.email}</p>
          <p>{strings.footer.phone}</p>
          <p>{strings.footer.adress}</p>
        </div>

        <div className="footer-links">
          <h3>{strings.footer.links}</h3>
          <a href="#" className="footer-text-link">
            {strings.footer.aboutus}
          </a>
          <a href="#" className="footer-text-link">
            {strings.footer.termsconditions}
          </a>
          <a href="#" className="footer-text-link">
            {strings.footer.privacypolicy}
          </a>
        </div>

        <div className="footer-right">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
