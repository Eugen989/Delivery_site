import React, { useState } from "react";
import "./products.module.css";
import CardItem from "../../components/cardItem/CardItem";
import {InputFilter, InputCheck} from "../../components/UI/input/MyInput.jsx";
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
                <div className="products-flex">
                    <div className="filter">
                        <h3 className="title-3">
                            Фильтр
                        </h3>
                        <div className="filter-wrapper">
                            <form action="">
                                <div className="price-filter filter-item">
                                    <p className="title-filter text-2">
                                        Цена
                                    </p>
                                    <div className="filter-block">
                                        <InputFilter placeholder="От"/>
                                        <InputFilter placeholder="До"/>
                                    </div>
                                </div>
                                <div className="size-filter filter-item">
                                    <p className="title-filter text-2">
                                        Размер
                                    </p>
                                    <div className="filter-block">
                                        <InputFilter placeholder="От"/>
                                        <InputFilter placeholder="До"/>
                                    </div>
                                </div>
                                <div className="massa-filter filter-item">
                                    <p className="title-filter text-2">
                                        Масса
                                    </p>
                                    <div className="filter-block">
                                        <InputFilter placeholder="От"/>
                                        <InputFilter placeholder="До"/>
                                    </div>
                                </div>
                                <div className="btn-filter">
                                    <MyButton2 type="submit">Применить</MyButton2>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="card-group">
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