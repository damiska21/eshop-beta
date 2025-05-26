import { useLocalization } from "../../contexts/LocalizationContext";
import "./HomeC.css";
import { Link } from "react-router-dom";

function HomeC() {
  const { strings } = useLocalization();
  const benefits = strings.home.benefits.items;

  return (
    <div className="home-container">
      <h1>{strings.home.h1}</h1>
      <h2>{strings.home.h2}</h2>
      <p>{strings.home.text1}</p>
      <p>{strings.home.text2}</p>

      <h2>{strings.home.benefits.title}</h2>
      <div className="articles-wrapper">
        {benefits.map((item, index) => (
          <article key={index}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>

      <Link to="/products" className="custom-link">
        Jdeme nakupovat!!!
      </Link>
    </div>
  );
}

export default HomeC;
