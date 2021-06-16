import React, { useState } from "react";
import firebase from "./firebase";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  profile: (profileDetails) => {},
});

export const AuthContextProvider = (props) => {
  const tokenData = localStorage.getItem("token");
  const [token, setToken] = useState(tokenData);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [img, setImg] = useState();

  const loginHandler = (token) => {
    setIsLoggedIn(true);
    setToken(token);
    localStorage.setItem("token", token);
  };
  const logoutHandler = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setToken("");
        setIsLoggedIn(false);
        localStorage.removeItem("token");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.error(error);
      });
  };

  const userHandler = (profileDetails) => {
    setName(profileDetails.name);
    setEmail(profileDetails.email);
    setImg(profileDetails.img);
  };

  firebase.auth().onAuthStateChanged((user) => {
    if (user !== null) {
      const token = user.refreshToken;
      if (token === tokenData && !isLoggedIn) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setIsLoggedIn(true);
        setToken(token);
        const profileDetails = {
          name: user.displayName,
          email: user.email,
          img: user.photoURL,
        };
        userHandler(profileDetails);
        localStorage.setItem("token", token);
      }
    } else {
      // User is signed out
      // ...
      firebase
        .auth()
        .signOut()
        .then(() => {
          setToken("");
          setIsLoggedIn(false);
          localStorage.removeItem("token");
          // Sign-out successful.
        })
        .catch((error) => {
          // An error happened.
          console.error(error);
        });
    }
  });

  const contextValue = {
    token: token,
    isLoggedIn: isLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    profile: userHandler,
    name: name,
    email: email,
    img: img,
  };

  return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
};

export default AuthContext;
