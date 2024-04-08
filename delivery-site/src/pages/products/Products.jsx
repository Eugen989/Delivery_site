import React, { useState } from "react";
import "./products.module.css";
import CardItem from "../../components/cardItem/CardItem";

const Products = () => {
    const [cards, setCards] = useState([
        { id: 1, title: "Картошечка", body: "Очень очень вкусно" },
        { id: 2, title: "Драники", body: "Сделано из картошки" },
        { id: 3, title: "Блины", body: "С добавлением картошки" },
    ]);

    return (
        <div className="products">
            {cards.map((card) => (
                <div key={card.id}>
                    <CardItem title={card.title} />
                </div>
            ))}
            
        </div>
    );
};

export default Products;