import { useEffect, useState } from "react";
import style from "./Categories.module.css";
import { useHistory } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  let history = useHistory();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);
  const handleClick = (evt) => {
    const res = evt.target.innerText.toLowerCase();
    history.push("/categories/" + res);
  };

  return (
    <>
      <h1>All Categories</h1>
      <div className={style.container}>
        {categories.map((category) => {
          return (
            <div className={style.box} key={"c" + Math.random()} onClick={handleClick}>
              <h2>{category}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
