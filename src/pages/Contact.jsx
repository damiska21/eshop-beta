import Form from "../components/forms/Form";
import ProfileStrip from "../components/common/contact/ProfileStrip";
import { useLocalization } from "../contexts/LocalizationContext";
import PageWrapper from "../components/common/ui-effects/PageWrapper";
import "./Contact.css";

export default function Contact() {
  const { strings } = useLocalization();
  return (
    <PageWrapper>
      <h1 className="c-h1">{strings.contact.title}</h1>
      <h2>{strings.contact.coworkers}</h2>
      <ProfileStrip />

      <div className="contact-info">
        <div className="contact-section">
          <h3>{strings.contact.basicinfo}</h3>
          <p>{strings.contact.companyname}</p>
          <p>{strings.contact.adress}</p>
          <p>{strings.contact.email}</p>
          <p>{strings.contact.phone}</p>
        </div>

        <div className="contact-section">
          <h3>{strings.contact.opening}</h3>
          <ul>
            <li>{strings.contact.monfri}: 9:00–17:00</li>
            <li>{strings.contact.saturday}: 10:00–14:00</li>
            <li>
              {strings.contact.sunday}: {strings.contact.closed}
            </li>
          </ul>
        </div>

        <div className="contact-section">
          <h3>{strings.contact.socials}</h3>
          <div className="social-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      <h3>{strings.contact.formtitle}</h3>
      <Form />
    </PageWrapper>
  );
}
