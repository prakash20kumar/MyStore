import { useState, useEffect } from "react";
import style from "./Product.module.css";
import MoonLoader from "react-spinners/MoonLoader";
import Card from "../Layouts/Card";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setProducts(data);
      });
  }, []);

  return (
    <>
      {isLoading && (
        <div className="spin">
          <MoonLoader color={"#4834d4"} loading={true} size={100} />
        </div>
      )}
      <div className={style.container}>
        {products.map((product) => {
          return (
            <Card
              key={product.id}
              image={product.image}
              id={product.id}
              category={product.category}
              title={product.title}
              price={product.price}
            />
          );
        })}
      </div>
    </>
  );
};

export default Products;
