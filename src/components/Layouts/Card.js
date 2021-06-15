import React from "react";
import style from "./Card.module.css";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <div className={style.card} key={props.id}>
      <NavLink to={`/product/${props.id}`}>
        <div className={style.img_container}>
          <img className={style.img} src={props.image} alt={props.id} />
        </div>
        <div className={style.category_container}>
          <p className={style.category}>{props.category}</p>
        </div>
        <div className={style.title_container}>
          <p className={style.title}>{props.title}</p>
        </div>
        <div className={style.price_container}>
          <p className={style.price}>₹{(props.price * 10).toFixed(2)}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default Card;
