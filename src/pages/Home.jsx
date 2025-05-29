import { Link } from "react-router-dom";
import ImageGrid from "../components/common/home/ImageGrid";
import { useLocalization } from "../contexts/LocalizationContext";
import "./Home.css";

export default function Home() {
  const { strings } = useLocalization();

  return (
    <>
      <div className="home-container">
        <header className="home-hero">
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
                <div className="benefit-icon">🌟</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="how-it-works">
          <h2>{strings.home.howItWorksTitle}</h2>
          <ol>
            {strings.home.howItWorksSteps.map((step, index) => (
              <li key={index}>{
                // Přidám emoji dle původního textu
                index === 0 ? "🛍️ " :
                index === 1 ? "🧺 " :
                index === 2 ? "💳 " :
                index === 3 ? "🚚 " : ""
              }{step}</li>
            ))}
          </ol>
        </section>

        <section className="reviews">
          <h2>{strings.home.reviewsTitle}</h2>
          {strings.home.reviews.map((review, index) => (
            <div key={index} className="review-card">
              „{review.text}“ <span>– {review.author}</span>
            </div>
          ))}
        </section>

        <Link to="/products" className="custom-link cta-link">
          {strings.home.cta}
        </Link>
      </div>

      <ImageGrid />
    </>
  );
}
