import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Loader from "../components/common/ui-effects/Loader.jsx";
import "./ProductDetail.css";
import { useCart } from "../contexts/CartContext.jsx";
import { RatingContext } from "../contexts/RatingContext";
import { useLocalization } from "../contexts/LocalizationContext.jsx";
import PageWrapper from "../components/common/ui-effects/PageWrapper.jsx";
import { showCartToast } from "../components/common/ui-effects/AddToCartPopup.jsx";

export default function ProductDetail() {
  const { strings } = useLocalization();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();
  const { ratings, updateRating } = useContext(RatingContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + id)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product.id);
  };

  const rating = ratings[id] || {
    rate: product?.rating?.rate || 0,
    count: product?.rating?.count || 0,
  };

  const renderStars = () => {
    const fullStars = Math.floor(rating.rate);
    const hasHalfStar = rating.rate % 1 >= 0.5;
    const totalStars = 5;

    return (
      <PageWrapper>
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
                onClick={() => updateRating(id, starValue)}
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
      </PageWrapper>
    );
  };

  if (!product) return <Loader />;

  return (
    <PageWrapper>
      <div className="product-detail">
        <h1>{product.title}</h1>
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
        <p>{product.description}</p>

        {renderStars()}

        <div className="price-cart-row">
          <p className="product-price">{product.price} Kč</p>
          <button
            className="add-to-cart-btn"
            onClick={() => {
              handleAddToCart();
              showCartToast();
            }}
          >
            {strings.products.addtocart}
          </button>
        </div>
      </div>
    </PageWrapper>
  );
}
