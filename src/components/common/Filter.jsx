import React from "react";
import "./Filter.css"; // Pokud máš oddělený styl, jinak je vše v Products.css

function Filter({
  categories,
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceChange,
  sort,
  onSortChange,
  onReset,
  onClose
}) {
  return (
    <div className="filter">
      <div className="filter-header">
        <h3>Filtrovat produkty</h3>
        <button className="filter-close-button" onClick={onClose} aria-label="Zavřít filtr">
          ×
        </button>
      </div>

      <label>
        Kategorie
        <select
          className="filter-select"
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <option value="">Vše</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>

      <label>
        Cena od
        <input
          type="number"
          className="filter-input"
          value={priceRange.min}
          onChange={(e) => onPriceChange({ ...priceRange, min: e.target.value })}
          min="0"
        />
      </label>

      <label>
        Cena do
        <input
          type="number"
          className="filter-input"
          value={priceRange.max}
          onChange={(e) => onPriceChange({ ...priceRange, max: e.target.value })}
          min="0"
        />
      </label>

      <label>
        Řazení
        <select
          className="filter-select"
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="">Žádné</option>
          <option value="price-asc">Cena vzestupně</option>
          <option value="price-desc">Cena sestupně</option>
          <option value="name-asc">Název A-Z</option>
          <option value="name-desc">Název Z-A</option>
        </select>
      </label>

      <button className="reset-button" onClick={onReset}>
        Resetovat filtry
      </button>
    </div>
  );
}

export default Filter;
