import React, { useState } from "react";
import classes from "./products.module.css";
import CardItem from "../../components/cardItem/CardItem";
import { InputFilter } from "../../components/UI/input/MyInput.jsx";
import { MyButton2 } from "../../components/UI/button/MyButton.jsx";

const Products = () => {
    const [cards, setCards] = useState([
        { id: 1, title: "Картошечка", warehouse: "Минск", massa: 54, size: 34, body: "Очень очень вкусно", price: 777, price_now: 888 },
        { id: 2, title: "Драники", warehouse: "Брянск", massa: 0.750, size: 17, body: "Сделано из картошки", price: 799, price_now: 988 },
        { id: 3, title: "Блины", warehouse: "Москва", massa: 0.250, size: 54, body: "С добавлением картошки", price: 997, price_now: 898 },
    ]);

    const [sortBy, setSortBy] = useState('');
    // State to hold the filter values
    const [filterValues, setFilterValues] = useState({
        priceMin: "",
        priceMax: "",
        sizeMin: "",
        sizeMax: "",
        massaMin: "",
        massaMax: ""
    });

    // Function to handle changes in filter inputs
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilterValues({
            ...filterValues,
            [name]: value
        });
    };

    // Function to apply filters
    const applyFilters = () => {
        const filteredCards = cards.filter(card => {
            return (
                (filterValues.priceMin === "" || card.price_now >= parseInt(filterValues.priceMin)) &&
                (filterValues.priceMax === "" || card.price_now <= parseInt(filterValues.priceMax)) &&
                (filterValues.sizeMin === "" || card.size >= parseInt(filterValues.sizeMin)) &&
                (filterValues.sizeMax === "" || card.size <= parseInt(filterValues.sizeMax)) &&
                (filterValues.massaMin === "" || card.massa >= parseFloat(filterValues.massaMin)) &&
                (filterValues.massaMax === "" || card.massa <= parseFloat(filterValues.massaMax))
            );
        });

        setCards(filteredCards);
    };

    const sortedItems = [...cards].sort((a, b) => {
        if (sortBy === 'price_now') {
            return a.price_now - b.price_now;
        } else if (sortBy === 'massa') {
            return a.massa - b.massa;
        } else if (sortBy === 'size') {
            if (a.size < b.size) return -1;
            if (a.size > b.size) return 1;
            return 0;
        } else {
            return 0;
        }
    });

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    }
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
                                    <InputFilter
                                        name="priceMin"
                                        value={filterValues.priceMin}
                                        onChange={handleFilterChange}
                                        placeholder="От"
                                    />
                                    <InputFilter
                                        name="priceMax"
                                        value={filterValues.priceMax}
                                        onChange={handleFilterChange}
                                        placeholder="До"
                                    />
                                </div>
                            </div>
                            <div className={classes.filterItem}>
                                <p className={`${classes.titleFilter} text-3`}>
                                    Масса
                                </p>
                                <div className={classes.filterBlock}>
                                    <InputFilter
                                        name="massaMin"
                                        value={filterValues.massaMin}
                                        onChange={handleFilterChange}
                                        placeholder="От"
                                    />
                                    <InputFilter
                                        name="massaMax"
                                        value={filterValues.massaMax}
                                        onChange={handleFilterChange}
                                        placeholder="До"
                                    />
                                </div>
                            </div>
                            <div className={classes.filterItem}>
                                <p className={`${classes.titleFilter} text-3`}>
                                    Размер
                                </p>
                                <div className={classes.filterBlock}>
                                    <InputFilter
                                        name="sizeMin"
                                        value={filterValues.sizeMin}
                                        onChange={handleFilterChange}
                                        placeholder="От"
                                    />
                                    <InputFilter
                                        name="sizeMax"
                                        value={filterValues.sizeMax}
                                        onChange={handleFilterChange}
                                        placeholder="До"
                                    />
                                </div>
                            </div>
                                <div className={classes.btnFilter}>
                                    <MyButton2 type="button" onClick={applyFilters}>
                                        Применить
                                    </MyButton2>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="cardGroup">
                    <select onChange={handleSortChange}>
                        <option value="">По названию</option>
                        <option value="price">По цене</option>
                        <option value="weight">По массе</option>
                        <option value="size">По размеру</option>
                    </select>
                        {cards.length > 0 ? (
                            sortedItems.map((card) => (
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