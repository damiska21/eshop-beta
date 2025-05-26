import { useLocalization } from "../../contexts/LocalizationContext";
import "./Profile.css";

function Profile({ name, location, imgUrl, bgUrl, links }) {
  const { strings } = useLocalization();
  return (
    <div className="flip-card">
      <div className="flip-inner">
        <div className="flip-front">
          <div
            className="flip-bg"
            style={{ backgroundImage: `url(${bgUrl})` }}
          ></div>
          <div
            className="flip-face"
            style={{ backgroundImage: `url(${imgUrl})` }}
          ></div>
          <div className="flip-text">
            <h3 className="flip-name">{name}</h3>
            <p className="flip-location">
              <i className="fas fa-map-marker-alt icon"></i> {location}
            </p>
            <span className="flip-hover-hint">{strings.contact.hover}</span>
          </div>
        </div>
        <div className="flip-back">
          <div className="socials">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="social-icon"
                style={{ transitionDelay: `${0.6 + index * 0.1}s` }}
              >
                <i className={`fab fa-${link.icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
