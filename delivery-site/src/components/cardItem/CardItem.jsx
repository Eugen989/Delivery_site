import React from "react";
import "./cardItem.module.css";

const CardItem = (props) => {
    const { title } = props;

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
                            Размер
                        </p>
                        <p className="massa">
                            Масса
                        </p>
                        <p className="Warehouse">
                            Склад
                        </p>
                        <p className="about-product">
                            Описание. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ducimus laborum consectetur repellat quas porro, nobis tempora impedit facere. In corporis eaque magni? Pariatur optio nam laudantium! Possimus, sunt amet!
                        </p>
                    </div>
                    <div className="price-block">
                        <p className="price">
                            Цена: <span className="number-price">
                                899 ₽
                            </span>
                            <span className="sale-price">777 ₽</span>
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