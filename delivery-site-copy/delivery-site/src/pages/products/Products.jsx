import React, { useState } from "react";
import classes from "./products.module.css";
import CardItem from "../../components/cardItem/CardItem";
import {InputFilter} from "../../components/UI/input/MyInput.jsx";
import {MyButton2} from "../../components/UI/button/MyButton.jsx";

const Products = () => {
    const [cards, setCards] = useState([
        { id: 1, title: "Картошечка",warehouse:"Минск",massa:54,size:34,body: "Очень очень вкусно",price:777,price_now:888 },
        { id: 2, title: "Драники",warehouse:"Брянск",massa:0.750,size:17,body: "Сделано из картошки",price:799,price_now:988},
        { id: 3, title: "Блины",warehouse:"Москва",massa:0.250,size:54,body: "С добавлением картошки",price:997,price_now:898 },
    ]);

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
                        <select name="" id="">
                            <option value="">
                                По названию
                            </option>
                            <option value="">
                                По цене
                            </option>
                            <option value="">
                                По массе
                            </option>
                            <option value="">
                                По размеру
                            </option>
                        </select>
                        {cards.length > 0 ? (
                            cards.map((card) => (
                                <div key={card.id}>
                                    <CardItem title={card.title}
                                              warehouse={card.warehouse}
                                              massa={card.massa}
                                              size={card.size}
                                              body={card.body}
                                              price={card.price}
                                              price_now={card.price_now}/>
                                </div>
                            ))
                        ) : (
                            <p className="title-2">Товар не найден</p>
                        )
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Products;