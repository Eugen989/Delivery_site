import React, { useState } from 'react';
import "./basket.module.css";
import CardItem from "../../components/cardItem/CardItem.jsx";
import { MyButton2 } from "../../components/UI/button/MyButton.jsx";
import MapComponent from "../../components/map/Map.jsx"; // Изменили путь импорта

const Basket = () => {
    const [showMap, setShowMap] = useState(false);

    const handleBuildRoute = () => {
        setShowMap(true);
    };

    const handleCloseMap = () => {
        setShowMap(false);
    };

    return (
        <div className="basket mt-1">
            <div className="centring">
                <div className="basket-wrapper">
                    <h2 className="title-2">
                        Корзина
                    </h2>
                    <div className="basket-flex mt-2">
                        <div className="basket-data-route">
                            <h3 className="title-3">
                                Данные о маршруте
                            </h3>
                            <button className="data-route-create text-2" onClick={handleBuildRoute}>
                                Построить маршрут
                            </button>
                            {showMap && (
                                <div className="map-overlay">
                                    <div className="map-popup">
                                        <MyButton2 className="close-button" onClick={handleCloseMap}>Закрыть</MyButton2>
                                        <MapComponent />
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="basket-body">
                            <button className="clear-button text-2">
                                Очистить корзину
                            </button>
                            <div className="basket-orders">
                                <CardItem></CardItem>
                                <CardItem></CardItem>
                            </div>
                            <div className="basket-bottom">
                                <p className="final-price text-2">
                                    Итоговая цена: <span>2000 ₽</span>
                                </p>
                                <MyButton2 className="title-4">
                                    Оплатить
                                </MyButton2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Basket;