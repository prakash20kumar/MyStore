import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import Menu from "./components/Layouts/Menu";
import Home from "./components/Layouts/Home";
import Products from "./components/shop/Products";
import Profile from "./components/Layouts/Profile";
import Msg from "./Msg";
import AuthContext from "./Auth/auth-context";
import Categories from "./components/shop/Categories";
import SelectedCategories from "./components/shop/SelectedCategories";
import ProductDetails from "./components/shop/ProductDetails";

const App = () => {
  const authCtx = useContext(AuthContext);

  return (
    <>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        {authCtx.isLoggedIn && <Route exact path="/categories" component={Categories} />}
        {authCtx.isLoggedIn && <Route path="/categories/:category" component={SelectedCategories} />}
        {authCtx.isLoggedIn && <Route exact path="/products" component={Products} />}
        {authCtx.isLoggedIn && <Route path="/product/:id" component={ProductDetails} />}
        {authCtx.isLoggedIn && <Route path="/profile" component={Profile} />}
        {!authCtx.isLoggedIn && <Redirect to="/" />}
        {!authCtx.isLoggedIn && <Msg />}
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </>
  );
};

export default App;
