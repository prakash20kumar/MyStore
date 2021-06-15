import { useEffect, useState } from "react";
import style from "./Categories.module.css";
import { useHistory } from "react-router-dom";
import MoonLoader from "react-spinners/MoonLoader";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let history = useHistory();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setCategories(data);
      });
  }, []);

  const handleClick = (evt) => {
    const res = evt.target.innerText.toLowerCase();
    history.push("/categories/" + res);
  };

  return (
    <>
      {isLoading && (
        <div className="spin">
          <MoonLoader color={"#4834d4"} loading={true} size={100} />
        </div>
      )}
      {!isLoading && (
        <div className={style.main}>
          <h1>All Categories</h1>
          <div className={style.container}>
            {categories.map((category) => {
              return (
                <div className={style.box} key={"c" + Math.random() * 10} onClick={handleClick}>
                  <h2>{category}</h2>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Categories;
