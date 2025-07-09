import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./relatedProducts.css";
import { HiOutlineShoppingBag } from "react-icons/hi2";


const RelatedProducts = ({ products, currentProductId }) => {

  const details = [
    { "Meilleur prix au Maroc": "✓" },
    { "12 mois de garantie": "✓" },
    { "Livraison 24h": "✓" }
  ];

  // Find the current product and filter related products
  const currentProduct = products.find((product) => product._id === currentProductId);
  const currentCategory = currentProduct ? currentProduct.category : null;
  const relatedProducts = products.filter(
    (product) => product.category === currentCategory && product._id !== currentProductId
  );

  // Debugging logs
  console.log("Current Product:", currentProduct);
  console.log("Current Category:", currentCategory);
  console.log("Related Products:", relatedProducts);

  // State for the current slide index
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  // Auto-slide every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % relatedProducts.length);
    }, 30000); // 30 seconds

    return () => clearInterval(interval);
  }, [relatedProducts.length]);

  // Scroll to the current product
  useEffect(() => {
    if (sliderRef.current && relatedProducts.length > 0) {
      const productWidth = sliderRef.current.children[0].offsetWidth;
      console.log("Product Width:", productWidth);
      sliderRef.current.scrollTo({
        left: currentIndex * productWidth,
        behavior: "smooth",
      });
    }
  }, [currentIndex, relatedProducts.length]);

  // Handle manual navigation
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? relatedProducts.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % relatedProducts.length);
  };

  // Don't render if no related products are found
  if (relatedProducts.length === 0) {
    console.log("No related products found.");
    return null;
  }

  return (
    <div className="related-products-container">
      <h2 className="related-products-title">Related Products</h2>
      <div className="related-products-slider" ref={sliderRef}>
        {relatedProducts.map((product, index) => (
          <div key={index} className="related-product-card">
            <Link
              to={`/product/${product.category}/${product.title.replace(/\s+/g, "-")}`}
              state={{ id: product._id }}
            >
              <img
                className="related-product-img"
                src={product.img}
                alt={product.title}
              />
              <div className="related-product-content">
                <h4 className="related-product-title">{product.title}</h4>
                <div className="related-product-prices">
                  {product.oldPrice > product.price && (
                    <p className="related-product-old-price">
                      {product.oldPrice}.د.م
                    </p>
                  )}
                  <p className="related-product-price">{product.price}.د.م</p>
                </div>
                {product.availability ? (
                  <p className="related-product-available">In Stock</p>
                ) : (
                  <p className="related-product-out-of-stock">Out of stock</p>
                )}
                <ul className="related-product-details">
                {details.map((detail, index) => (
                                    <li key={index} className="Cp-detail-item">
                                        <span className="Cp-checkmark">✓</span>
                                        {Object.keys(detail)[0]}
                                    </li>
                                ))}
                </ul>
              </div>
            </Link>
            <button className="flex related-product-add-to-cart">
              <span className="related-product-add-text">Lire la suite</span>
              <span className="related-product-add-icon"><HiOutlineShoppingBag /></span>
            </button>
          </div>
        ))}
      </div>
      <button className="slider-nav prev" onClick={handlePrev}>
        &lt;
      </button>
      <button className="slider-nav next" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default RelatedProducts;