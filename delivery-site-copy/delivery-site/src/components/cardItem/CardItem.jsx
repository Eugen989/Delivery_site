import React from "react";
import "./cardItem.module.css";

const CardItem = (props) => {
    const { title,warehouse,massa,size,body,price,price_now} = props;

    return (
        <div className="card-product">
            <div className="media">
                <img src="./images/card.png" alt="" />
            </div>
            <div className="text-card">
                <div className="description text-1">
                    <h4 className="title-product title-4">
                        {title} {/* Отобразите переданный title */}
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
                    <div className="price-block">
                        <p className="price">
                            Цена: <span className="number-price">
                                {price_now} ₽
                            </span>
                            <span className="sale-price">{price} ₽</span>
                        </p>
                        <div className="buy-btn">
                            Купить
                        </div>
                    </div>
                </div>
            </div>
    )
};

export default CardItem;