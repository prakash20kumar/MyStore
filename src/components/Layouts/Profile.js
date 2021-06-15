import style from "./Profile.module.css";
import AuthContext from "../../Auth/auth-context";
import { useContext } from "react";
const Profile = () => {
  const authCtx = useContext(AuthContext);
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.heading_container}>
          <h1>Profile</h1>
        </div>
        <div className={style.img_container}>
          <img src={authCtx.img} alt={authCtx.name} className={style.img} />
        </div>
        <div className={style.name_container}>
          <h2>{authCtx.name}</h2>
        </div>
        <div className={style.email_container}>
          <h3>{authCtx.email}</h3>
        </div>
      </div>
    </div>
  );
};
export default Profile;
