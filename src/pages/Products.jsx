import React, { useState, useEffect } from "react";
import Product from "../components/common/Product.jsx";
import Loader from "../components/common/Loader.jsx";
import Filter from "../components/common/Filter.jsx";
import "./Products.css";

export default function Products() {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [categories, setCategories] = useState([]);

  // Stav filtru a filtrace
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [sort, setSort] = useState("");
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  // Načtení produktů z API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        setCategories([...new Set(data.map((item) => item.category))]);
        setFilteredProducts(data);
      });
  }, []);

  // Reset filtrů
  const resetFilters = () => {
    setSelectedCategory("");
    setPriceRange({ min: "", max: "" });
    setSort("");
  };

  // Přepínání viditelnosti filtru
  const toggleFilter = () => setIsFilterVisible((prev) => !prev);

  // Filtrování a řazení produktů
  useEffect(() => {
    let filtered = [...allProducts];

    if (selectedCategory) {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (priceRange.min) {
      filtered = filtered.filter((p) => p.price >= parseFloat(priceRange.min));
    }

    if (priceRange.max) {
      filtered = filtered.filter((p) => p.price <= parseFloat(priceRange.max));
    }

    if (sort === "price-asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sort === "price-desc") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sort === "name-asc") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort === "name-desc") {
      filtered.sort((a, b) => b.title.localeCompare(a.title));
    }

    setFilteredProducts(filtered);
  }, [allProducts, selectedCategory, priceRange, sort]);

  if (!filteredProducts) return <Loader />;

  return (
     <>
    <h1>Produkty</h1>
    {!isFilterVisible && (
  <div className="filter-toggle-container">
    <button className="filter-show-button" onClick={toggleFilter}>
      Zobrazit filtr
    </button>
  </div>
)}


    <div className={`products-page ${isFilterVisible ? "filter-visible" : "filter-hidden"}`}>
      {isFilterVisible && (
        <Filter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          priceRange={priceRange}
          onPriceChange={setPriceRange}
          sort={sort}
          onSortChange={setSort}
          onReset={resetFilters}
          onClose={toggleFilter}
        />
      )}

      <div className={`products ${isFilterVisible ? "with-filter" : "full-width"}`}>
        {filteredProducts.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  </>
  );
}
