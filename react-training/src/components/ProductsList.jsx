import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    const response = await fetch(
      "https://api.freeapi.app/api/v1/public/randomproducts"
    );
    const data = await response.json();
    setProducts(data.data.data);
    console.log(data.data.data);
    setLoading(false);
  };

  useEffect(() => {
    // setTimeout(async () => {
    fetchProducts();
    // }, 3000);
  }, []);

  if (loading) {
    return <div> something is loading</div>;
  } else {
    return (
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}

        {/* <button onClick={fetchProducts}>fetch products</button> */}
      </div>
    );
  }
};

export default ProductsList;
