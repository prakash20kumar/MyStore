import { useState, useEffect } from "react";
import style from "./SelectedCategories.module.css";
import { useParams } from "react-router-dom";

const SelectCategories = () => {
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setSelectedCategory(data);
      });
  }, [category]);
  return (
    <>
      <div className={style.container}>
        {selectedCategory.map((product) => {
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

export default SelectCategories;
