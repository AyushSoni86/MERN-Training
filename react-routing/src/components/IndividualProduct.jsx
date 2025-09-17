import { useParams } from "react-router-dom";

export default function IndividualProduct() {
  const { productId } = useParams();
  const productList = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Headphones" },
  ];

  return (
    <div className="page">
      <h2>Product Details</h2>
      <p>Showing details for product ID</p>
      <p>Product Id : {productId}</p>
      <h2>
        {productList
          .filter((currentProduct) => currentProduct.id === parseInt(productId))
          .map((currentProduct) => (
            <div>{currentProduct.name}</div>
          ))}
        {/* {productList} */}
      </h2>
    </div>
  );
}
