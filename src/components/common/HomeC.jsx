import "./HomeC.css";
import { Link } from "react-router-dom";

function HomeC() {
  return (
    <div className="home-container">
      <h1>Vítejte v E-shopu týmu Beta</h1>
      <h2>O nás</h2>

      <div className="articles-wrapper">
        <article>
          <h3>Naše mise</h3>
          <p>
            Naším cílem je vytvořit online prostor, kde bude nakupování
            jednoduché, bezpečné a zábavné. Nabízíme jen produkty, které bychom sami rádi používali.
          </p>
        </article>

        <article>
          <h3>Naše hodnoty</h3>
          <p>
            Zakládáme si na kvalitě, férovém přístupu k zákazníkovi a neustálém
            zlepšování našich služeb. Jsme tu pro vás — a díky vám.
          </p>
        </article>

        <article>
          <h3>Proč právě my?</h3>
          <p>
            Díky přehlednému rozhraní, moderním funkcím a přátelskému týmu získáte nejen produkty, ale i skvělý zážitek z nákupu.
          </p>
        </article>
      </div>

      <Link to="/products" className="custom-link">
        Jdeme nakupovat!!!
      </Link>
    </div>
  );
}

export default HomeC;
