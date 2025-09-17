import React, { useContext } from "react";
import "./ProductCard.css";
import { themeContext } from "../contexts/themeContext";

const ProductCard = ({ product }) => {
  const { theme, toggleTheme } = useContext(themeContext);
  console.log(theme);
  // console.log(product);
  return (
    <div className={`product-card ${theme}`}>
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-image"
      />
      <div className="product-content">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">${product.price}</span>
          <span className="product-brand">{product.brand}</span>
        </div>
        <button onClick={toggleTheme}>Change Theme</button>
      </div>
    </div>
  );
};

export default ProductCard;
