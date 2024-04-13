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
                (filterValues.priceMin === "" || card.price >= parseInt(filterValues.priceMin)) &&
                (filterValues.priceMax === "" || card.price <= parseInt(filterValues.priceMax)) &&
                (filterValues.sizeMin === "" || card.weight >= parseInt(filterValues.sizeMin)) &&
                (filterValues.sizeMax === "" || card.weight <= parseInt(filterValues.sizeMax)) &&
                (filterValues.massaMin === "" || card.quantity_of_product >= parseFloat(filterValues.massaMin)) &&
                (filterValues.massaMax === "" || card.quantity_of_product <= parseFloat(filterValues.massaMax))
            );
        });

        setCards(filteredCards);
    };

    const sortedItems = [...cards].sort((a, b) => {
        if (sortBy === 'price') {
            return a.price - b.price;
        } else if (sortBy === 'quantity_of_product') {
            return a.quantity_of_product - b.quantity_of_product;
        } else if (sortBy === 'weight') {
            if (a.weight < b.weight) return -1;
            if (a.weight > b.weight) return 1;
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
                <div className={cards.length > 0 ? classes.productsFlex : classes.productsFlexGap}>
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
                        <option value="size">По массе</option>
                        <option value="massa">По размеру</option>
                    </select>
                        {cards.length > 0 ? (
                        sortedItems.map((card) => (
                            <div key={card.id}>
                            <CardItem
                                title={card.name}
                                warehouse={card.id_warehouse}
                                massa={card.quantity_of_product}
                                size={card.weight}
                                body={card.proportions}
                                price={card.quantity_of_product}
                                price_now={card.price}
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