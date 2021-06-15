import { useContext } from "react";
import { NavLink } from "react-router-dom";
import style from "./menu.module.css";
import LoginAuth from "../../Auth/LoginAuth";
import AuthContext from "../../Auth/auth-context";

const Menu = () => {
  const authCtx = useContext(AuthContext);
  return (
    <ul className={style.ul}>
      {!authCtx.isLoggedIn ? (
        <>
          <li>
            <NavLink activeClassName="active" exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <LoginAuth />
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/categories">
              Categories
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/products">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/profile">
              Profile
            </NavLink>
          </li>
          <li>
            <LoginAuth />
          </li>
        </>
      )}
    </ul>
  );
};

export default Menu;
