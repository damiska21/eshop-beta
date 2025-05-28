import { Link } from "react-router-dom";
import ImageGrid from "../components/common/home/ImageGrid";
import { useLocalization } from "../contexts/LocalizationContext";
import "./Home.css";
export default function Home() {
  const { strings } = useLocalization();

  return (
    <>
      <div className="home-container">
        <header className="home-header">
          <h1>{strings.home.h1}</h1>
          <h2>{strings.home.h2}</h2>
          <p>{strings.home.text1}</p>
          <p>{strings.home.text2}</p>
        </header>

        <section className="benefits-section">
          <h2>{strings.home.benefits.title}</h2>
          <div className="articles-wrapper">
            {strings.home.benefits.items.map((item, index) => (
              <article key={index}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <Link to="/products" className="custom-link cta-link">
          {strings.home.cta || "Jdeme nakupovat!"}
        </Link>
      </div>

      <ImageGrid />
    </>
  );
}
