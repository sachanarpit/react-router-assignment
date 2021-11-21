import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const ProductPage = () => {
  const [product, setProduct] = useState("hello");
  useEffect(() => {
    axios.get("http://localhost:3005/products/").then((res) => {
      setProduct(res.data);
    });
  }, [product?.id]);
  return (
    <div>
      {product.map((val) => (
        <div>
          <Link key={product?.id} to={`/products/${val?.id}`}>
            {val?.name}
          </Link>
        </div>
      ))}
    </div>
  );
};
