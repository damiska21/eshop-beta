import { Link } from "react-router-dom";

function Product({ id, title, description, image, price }) {
  return (
    <Link to={`/product/${id}`} className="no-decoration">
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p>{price} Kč</p>
          <button onClick={handleAddToCart} className="btn btn-primary">
            Přidat do košíku
          </button>
        </div>
      </div>
    </Link>
  );
}

export default Product;
