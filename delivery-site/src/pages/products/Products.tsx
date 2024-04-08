import "./products.module.css";

const Products = () => {
    return (
        <div className="products">
            <div className="card-product">
                <div className="media">
                    <img src="./images/card.png" alt=""/>
                </div>
                <div className="text-card">
                    <div className="descrition">
                        <h4 className="title-product">
                            Название товара
                        </h4>
                        <p className="size">
                            Размер
                        </p>
                        <p className="massa">
                            Масса
                        </p>
                        <p className="Warehouse">
                            Склад
                        </p>
                        <p className="about-product">
                            Описание. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ducimus laborum consectetur repellat quas porro, nobis tempora impedit facere. In corporis eaque magni? Pariatur optio nam laudantium! Possimus, sunt amet!
                        </p>
                    </div>
                    <div className="price-block">
                        <p className="price">
                            Цена: <span className="number-price">
                                899 ₽
                            </span>
                            <span className="sale-price">777 ₽</span>
                        </p>
                        {/*КНОПКА*/}
                        <div className="buy-btn">
                            Купить
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Products;