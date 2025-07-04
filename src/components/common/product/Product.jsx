import React, { useContext } from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { useCart } from "../../../contexts/CartContext";
import { RatingContext } from "../../../contexts/RatingContext";
import { useLocalization } from "../../../contexts/LocalizationContext";
import { showCartToast } from "../ui-effects/AddToCartPopup";

function Product({ id, title, description, image, price }) {
  const { addToCart } = useCart();
  const { strings } = useLocalization();
  const { ratings, updateRating } = useContext(RatingContext);

  const rating = ratings[id] || { rate: 0, count: 0 };

  const renderStars = () => {
    const fullStars = Math.floor(rating.rate);
    const hasHalfStar = rating.rate % 1 >= 0.5;
    const totalStars = 5;

    return (
      <div className="star-rating interactive">
        {[...Array(totalStars)].map((_, i) => {
          const starValue = totalStars - i; // 5,4,3,2,1
          let starClass = "star";
          if (starValue <= fullStars) starClass += " filled";
          else if (starValue === fullStars + 1 && hasHalfStar)
            starClass += " half";

          return (
            <span
              key={starValue}
              className={starClass}
              onClick={(e) => {
                e.preventDefault();
                updateRating(id, starValue);
              }}
              style={{ cursor: "pointer" }}
              title={
                strings.products.rating.ratepopup1 +
                starValue +
                strings.products.rating.ratepopup2
              }
            >
              ★
            </span>
          );
        })}
        <span className="rating-number">
          ({rating.rate.toFixed(1)} {strings.products.rating.from}{" "}
          {rating.count} {strings.products.rating.votes})
        </span>
      </div>
    );
  };

  return (
    <div className="product-card">
      <Link to={`/product/${id}`} className="card-link">
        <img src={image} alt={title} className="card-img" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-description">{description}</p>
          <p className="card-price">{price} Kč</p>
          {renderStars()}
        </div>
      </Link>
      <button
        className="card-button"
        onClick={(e) => {
          e.preventDefault();
          addToCart(id);
          showCartToast();
        }}
      >
        {strings.products.addtocart}
      </button>
    </div>
  );
}

export default Product;
