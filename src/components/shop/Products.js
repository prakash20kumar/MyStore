import { useState, useEffect } from "react";
import style from "./Product.module.css";
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  return (
    <>
      <div className={style.container}>
        {products.map((product) => {
          return (
            <div className={style.box} key={product.id}>
              <img className={style.img} src={product.image} alt={product.id} />
              <p>{product.category}</p>
              <p></p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
