import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import Menu from "./components/Layouts/Menu";
import Home from "./components/Layouts/Home";
import About from "./components/shop/Products";
import Feedback from "./components/Layouts/Feedback";
import Msg from "./Msg";
import AuthContext from "./Auth/auth-context";
import Categories from "./components/shop/Categories";
import SelectedCategories from "./components/shop/SelectedCategories";

const App = () => {
  const authCtx = useContext(AuthContext);
  return (
    <>
      <div>
        <Menu />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        {authCtx.isLoggedIn && <Route exact path="/categories" component={Categories} />}
        {authCtx.isLoggedIn && <Route path="/categories/:category" component={SelectedCategories} />}
        {authCtx.isLoggedIn && <Route path="/products" component={About} />}
        {authCtx.isLoggedIn && <Route path="/feedback" component={Feedback} />}
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
