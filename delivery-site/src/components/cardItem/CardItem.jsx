import React from "react";
import classes from "./cardItem.module.css";
import {MyButton2} from "../UI/button/MyButton.jsx";

const CardItem = (props) => {
    const { title,warehouse, massa, size, body, price, price_now} = props;

    return (
        <div className={classes.cardProduct}>
            <div className={classes.media}>
                <img src="./images/card.png" alt="" />
            </div>
            <div className={classes.textCard}>
                <div className={`${classes.description} text-1`}>
                    <h4 className="title-4">
                        {title}
                    </h4>
                        <p className="size">
                            Размер: {size}
                        </p>
                        <p className="massa">
                            Масса: {massa} кг
                        </p>
                        <p className="Warehouse">
                            Склад: {warehouse}
                        </p>
                        <p className="about-product">
                            Описание:{body}
                        </p>
                    </div>
                    <div className={classes.priceBlock}>
                        <p className={classes.price}>
                            Цена: <span className={classes.numberPrice}>
                                {price_now} ₽
                            </span>
                            <span className={classes.salePrice}>{price} ₽</span>
                        </p>
                        <MyButton2>
                            Купить
                        </MyButton2>

                        <a href="/edit" className={classes.linkEdit}>
                            Изменить
                        </a>

                        <MyButton2>
                            Удалить
                        </MyButton2>

                    </div>
                </div>
            </div>
    )
};

export default CardItem;