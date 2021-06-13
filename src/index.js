import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "./Auth/auth-context";

ReactDOM.render(
  <AuthContextProvider>
    <Router>
      <App />
    </Router>
  </AuthContextProvider>,
  document.getElementById("root")
);
