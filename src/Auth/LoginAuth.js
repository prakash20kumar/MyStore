import { useContext } from "react";
import firebase from "./firebase";
import style from "./LoginAuth.module.css";
import AuthContext from "./auth-context";
import * as Icon from "react-bootstrap-icons";
const LoginAuth = () => {
  const authCtx = useContext(AuthContext);

  const handleClick = () => {
    if (!authCtx.isLoggedIn) {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
      firebase.auth().useDeviceLanguage();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          // The signed-in user info.
          const user = result.user;
          const token = user.refreshToken;
          const profileDetails = {
            name: user.displayName,
            email: user.email,
            img: user.photoURL,
          };
          if (token) {
            authCtx.login(token);
            authCtx.profile(profileDetails);
          }
        })
        .catch((error) => {
          // Handle Errors here.
          console.log(error);
        });
    } else {
      authCtx.logout();
      console.log("Logout Successful");
    }
  };

  return (
    <>
      {authCtx.isLoggedIn && (
        <button className={style.btn} onClick={handleClick}>
          <Icon.Google className={style.icon} />
          Sign Out
        </button>
      )}
      {!authCtx.isLoggedIn && (
        <button className={style.btn} onClick={handleClick}>
          <Icon.Google className={style.icon} />
          Sign In
        </button>
      )}
    </>
  );
};

export default LoginAuth;
