import React, { useState } from "react";
import "./products.module.css";
import CardItem from "../../components/cardItem/CardItem";

const Products = () => {
    const [cards, setCards] = useState([
        { id: 1, title: "Картошечка",warehouse:984989 ,body: "Очень очень вкусно" },
        { id: 2, title: "Драники",warehouse:123  ,body: "Сделано из картошки" },
        { id: 3, title: "Блины",warehouse:753  ,body: "С добавлением картошки" },
    ]);

    return (
        <div className="products">
            {cards.map((card) => (
                <div key={card.id}>
                    <CardItem title={card.title}
                    warehouse={card.warehouse} 
                    body={card.body} />
                </div>
            ))}
            
        </div>
    );
};

export default Products;