import React, { useState } from "react";
import "./products.module.css";
import CardItem from "../../components/cardItem/CardItem";

const Products = () => {
    const [cards, setCards] = useState([
        { id: 1, title: "Картошечка",warehouse:"Минск",massa:54,size:34,body: "Очень очень вкусно",price:777,price_now:888 },
        { id: 2, title: "Драники",warehouse:"Брянск",massa:0.750,size:17,body: "Сделано из картошки",price:799,price_now:988},
        { id: 3, title: "Блины",warehouse:"Москва",massa:0.250,size:54,body: "С добавлением картошки",price:997,price_now:898 },
    ]);

    return (
        <div className="products">
            <div className="centring">
                {cards.map((card) => (
                    <div key={card.id}>
                        <CardItem title={card.title}
                                  warehouse={card.warehouse}
                                  massa={card.massa}
                                  size={card.size}
                                  body={card.body}
                                  price={card.price}
                                  price_now={card.price_now}/>
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default Products;