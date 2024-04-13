import React, { useState, useEffect } from "react";
import classes from "./products.module.css";
import CardItem from "../../components/cardItem/CardItem";
import {InputFilter} from "../../components/UI/input/MyInput.jsx";
import {MyButton2} from "../../components/UI/button/MyButton.jsx";
import axios from "axios";


// localStorage.clear();
// localStorage.setItem('UserData', JSON.stringify({userId: 1, userName: '', userType: ''}));
// console.log(JSON.parse(localStorage.getItem('UserData')))

const Products = () => {
    const [cards, setCards] = useState([]);
      
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(
              "http://localhost:5000/api/product/getAllProducts"
            );
            setCards(response.data.values);
          } catch (error) {
            console.error("Ошибка при отправке запроса:", error);
          }
        };
        fetchData();
      }, []);

    return (
        <div className="products mt-1">
            <div className="centring">
                <div className={classes.productsFlex}>
                    <div className={classes.filter}>
                        <h3 className="title-3">
                            Фильтр
                        </h3>
                        <div className={classes.filterWrapper}>
                            <form action="">
                                <div className={classes.filterItem}>
                                    <p className={`${classes.titleFilter} text-3`}>
                                        Цена
                                    </p>
                                    <div className={classes.filterBlock}>
                                        <InputFilter placeholder="От"/>
                                        <InputFilter placeholder="До"/>
                                    </div>
                                </div>
                                <div className={classes.filterItem}>
                                    <p className={`${classes.titleFilter} text-3`}>
                                        Размер
                                    </p>
                                    <div className={classes.filterBlock}>
                                        <InputFilter placeholder="От"/>
                                        <InputFilter placeholder="До"/>
                                    </div>
                                </div>
                                <div className={classes.filterItem}>
                                    <p className={`${classes.titleFilter} text-3`}>
                                        Масса
                                    </p>
                                    <div className={classes.filterBlock}>
                                        <InputFilter placeholder="От"/>
                                        <InputFilter placeholder="До"/>
                                    </div>
                                </div>
                                <div className={classes.btnFilter}>
                                    <MyButton2 type="submit">Применить</MyButton2>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="cardGroup">
                        {cards.length > 0 ? (
                        cards.map((card) => (
                            <div key={card.id}>
                            <CardItem
                                title={card.name}
                                warehouse={card.id_warehouse}
                                massa={card.quantity_of_product}
                                size={card.price}
                                body={card.proportions}
                                price={card.quantity_of_product}
                                price_now={card.weight}
                            />
                            </div>
                        ))
                        ) : (
                        <p className="title-2">Товар не найден</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;