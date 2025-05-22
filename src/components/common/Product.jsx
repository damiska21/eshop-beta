import "./Product.css";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";

function Product({ id, title, description, image, price }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <Link to={`/product/${id}`} className="card-link">
        <img src={image} alt={title} className="card-img" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-description">{description}</p>
          <p className="card-price">{price} Kč</p>
        </div>
      </Link>
      <button
        className="card-button"
        onClick={(e) => {
          e.preventDefault(); //zabrání přesměrování
          addToCart(id);
        }}
      >
        Přidat do košíku
      </button>
    </div>
  );
}

export default Product;
