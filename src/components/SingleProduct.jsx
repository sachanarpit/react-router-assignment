import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3005/products/" + id)
      .then((res) => setProduct(res.data));
  }, [id]);
  console.log(product);
  if (product) {
    return (
      <div>
        <div>
          <h1>{product?.name}</h1>
          <p>{product?.price}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>page not found</h1>
      </div>
    );
  }
};
