import { useContext } from "react";
import { Link } from "react-router-dom";
import style from "./menu.module.css";
import LoginAuth from "../../Auth/LoginAuth";
import AuthContext from "../../Auth/auth-context";

const Products = () => {
  const authCtx = useContext(AuthContext);
  return (
    <ul className={style.ul}>
      {!authCtx.isLoggedIn ? (
        <>
          <li>
            <Link to="/">Home</Link>
          </li>
          <LoginAuth>Login</LoginAuth>
        </>
      ) : (
        <>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/feedback">Feedback</Link>
          </li>

          <LoginAuth>Logout</LoginAuth>
        </>
      )}
    </ul>
  );
};

export default Products;
