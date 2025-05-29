import { Link } from "react-router-dom";
import { useLocalization } from "../../../contexts/LocalizationContext";
import "./Footer.css";

function Footer() {
  const { strings } = useLocalization();
  return (
    <footer className="page-footer">
      <div className=" footer container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <iframe
              title="Mapa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2316.889483122326!2d14.405351576037416!3d50.081676813848446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94fb3b68cc1f%3A0xe4969e96af63265d!2zTWFsb3N0cmFuc2vDqSBuw6FixZkuIDEsIDExOCAwMCBNYWzDoSBTdHJhbmE!5e1!3m2!1scs!2scz!4v1747918476585!5m2!1scs!2scz"
              width="280"
              height="180"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">{strings.footer.contact}</h5>
            <ul className="list-unstyled">
              <li>{strings.footer.email}</li>
              <li>{strings.footer.phone}</li>
              <li>{strings.footer.adress}</li>
            </ul>
          </div>

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">{strings.footer.links}</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/contact-us" className="footer-text-link">
                  {strings.footer.aboutus}
                </Link>
              </li>
              <li>
                <Link to="/termsconditions" className="footer-text-link">
                  {strings.footer.termsconditions}
                </Link>
              </li>
              <li>
                <Link to="/privacypolicy" className="footer-text-link">
                  {strings.footer.privacypolicy}
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center py-3">
            <ul className="list-inline d-flex justify-content-center gap-3">
              <li className="list-inline-item">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
