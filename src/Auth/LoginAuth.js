import { useContext, useState } from "react";
import firebase from "./firebase";
import style from "./LoginBtn.module.css";
import AuthContext from "./auth-context";

const LoginBtn = (props) => {
  const authCtx = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoPath, setPhotoPath] = useState("");
  //   const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = () => {
    if (!authCtx.isLoggedIn) {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
      firebase.auth().useDeviceLanguage();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          const credential = result.credential;
          // This gives you a Google Access Token. You can use it to access the Google API.
          const token = credential.accessToken;
          if (token) {
            authCtx.login(token);
            // setIsLoggedIn(true);
          }
          // The signed-in user info.
          const user = result.user;
          //console.log(user);
          setName(user.displayName);
          setEmail(user.email);
          setPhotoPath(user.photoURL);
          console.log(result);
          //   console.log(isLoggedIn);
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          console.log(error);
        });
    } else {
      firebase
        .auth()
        .signOut()
        .then(() => {
          authCtx.logout();
          console.log("Logout successful");
          //   setIsLoggedIn(false);
          //   console.log(isLoggedIn);

          // Sign-out successful.
        })
        .catch((error) => {
          // An error happened.
        });
    }
  };

  return (
    <button className={style.btn} onClick={handleClick}>
      {props.children}
    </button>
  );
};

export default LoginBtn;
