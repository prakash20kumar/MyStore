import { useEffect, useState } from "react";
const Home = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, []);

  return (
    <>
      <h1>HomePage</h1>
    </>
  );
};
export default Home;
