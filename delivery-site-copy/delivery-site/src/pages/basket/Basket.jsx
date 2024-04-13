import React, { useState } from 'react';
import classes from "./basket.module.css";
import CardItem from "../../components/cardItem/CardItem.jsx";


const Basket = () => {
    const [showMap, setShowMap] = useState(false);

    const handleBuildRoute = () => {
        setShowMap(true);
    };

    const handleCloseMap = () => {
        setShowMap(false);
    };

    const [flag, setFlag] = useState(true)

    function clearBasket () {
        setFlag(false)
    }

    return (
        <div className="basket mt-1">
            <div className="centring">
                <div className="basketWrapper">
                    <h2 className="title-2">
                        Корзина
                    </h2>
                    <div className={`${classes.basketFlex} mt-3`}>
                        <div className={classes.leftBasket}>
                            <p className={`${classes.finalPrice} text-3`}>
                                Итоговая цена: <span className="title-3">2000 ₽</span>
                            </p>
                            <a href="/making" className={`${classes.linkPay} title-4`}>
                                Оплатить
                            </a>
                        </div>

                        <div className={classes.basketBody}>
                            <button className={`${classes.clearButton} text-2`} onClick={clearBasket}>
                                Очистить корзину
                            </button>
                            {flag ?
                                <div className={classes.basketOrders}>
                                    <CardItem></CardItem>
                                    <CardItem></CardItem>
                                </div>
                                :
                                <p className="title-2">Товар не найден</p>
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Basket;