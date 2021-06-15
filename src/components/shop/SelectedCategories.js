import { useState, useEffect } from "react";
import style from "./SelectedCategories.module.css";
import { useParams } from "react-router-dom";
import MoonLoader from "react-spinners/MoonLoader";
import Card from "../Layouts/Card";

const SelectCategories = () => {
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setSelectedCategory(data);
        console.log(data);
      });
  }, [category]);

  return (
    <>
      {isLoading && (
        <div className="spin">
          <MoonLoader color={"#4834d4"} loading={true} size={100} />
        </div>
      )}

      <div className={style.container}>
        {selectedCategory.map((product) => {
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

export default SelectCategories;
