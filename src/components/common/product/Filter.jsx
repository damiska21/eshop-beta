import React from "react";
import "./Filter.css";
import { useLocalization } from "../../../contexts/LocalizationContext";

function Filter({
  categories,
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceChange,
  sort,
  onSortChange,
  onReset,
  onClose,
}) {
  const { strings } = useLocalization();
  return (
    <div className="filter">
      <div className="filter-header">
        <h3>{strings.products.filter.title}</h3>
        <button
          className="filter-close-button"
          onClick={onClose}
          aria-label="Zavřít filtr"
        >
          ×
        </button>
      </div>

      <label>
        {strings.products.filter.category}
        <select
          className="filter-select"
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <option value="">{strings.products.filter.all}</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>

      <label>
        {strings.products.filter.pricefrom}
        <input
          type="number"
          className="filter-input"
          value={priceRange.min}
          onChange={(e) =>
            onPriceChange({ ...priceRange, min: e.target.value })
          }
          min="0"
        />
      </label>

      <label>
        {strings.products.filter.priceto}
        <input
          type="number"
          className="filter-input"
          value={priceRange.max}
          onChange={(e) =>
            onPriceChange({ ...priceRange, max: e.target.value })
          }
          min="0"
        />
      </label>

      <label>
        {strings.products.filter.sorting}
        <select
          className="filter-select"
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="">{strings.products.filter.none}</option>
          <option value="price-asc">{strings.products.filter.priceasc}</option>
          <option value="price-desc">{strings.products.filter.pricedes}</option>
          <option value="name-asc">{strings.products.filter.az}</option>
          <option value="name-desc">{strings.products.filter.za}</option>
        </select>
      </label>

      <button className="reset-button" onClick={onReset}>
        {strings.products.filter.reset}
      </button>
    </div>
  );
}

export default Filter;
