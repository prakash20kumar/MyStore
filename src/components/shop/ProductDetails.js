import { useState, useEffect } from "react";
import { useParams } from "react-router";
import style from "./ProductDetails.module.css";
import MoonLoader from "react-spinners/MoonLoader";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setIsLoading(false);
        setProduct(json);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  return (
    <>
      {isLoading && (
        <div className="spin">
          <MoonLoader color={"#4834d4"} loading={true} size={100} />
        </div>
      )}
      {product && !isLoading && (
        <>
          <div className={style.main}>
            <div className={style.container}>
              <div className={style.title_container}>
                <h2 className={style.title}>{product.title}</h2>
              </div>
              <div className={style.img_container}>
                <img src={product.image} alt={product.title} className={style.img} />
              </div>
              <div>
                <div className={style.category_container}>
                  <p className={style.category}>Category : {product.category}</p>
                </div>
                <div className={style.price_container}>
                  <p className={style.price}>Price : ₹{(product.price * 10).toFixed(2)}</p>
                </div>
                <div className={style.desc_container}>
                  <p className={style.description}>₹{product.description}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetails;
