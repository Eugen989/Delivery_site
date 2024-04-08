import "./home.module.css";

const Home = () => {
    return (
        <div className="home">
            <div className="centring">
                <div className="banner">
                    <h1 className="title-1">
                        Сайт-сервис по управлению доставками готовых изделий
                    </h1>
                    <a href="#anchor" className="anchor">
                        <p className="text-anchor text-2">
                            Узнать подробнее
                        </p>
                        <img src="./images/pointer.svg" alt=""/>
                    </a>
                </div>

                <div className="opportunities" id="anchor">
                    <h2 className="title-2">
                        Возможности для продавцов
                    </h2>
                    <div className="opportunity-group">
                        <div className="opportunity">
                            <div className="media">
                                <img src="./images/create-pr.svg" alt=""/>
                            </div>
                            <div className="text-opportunity">
                                <h3 className="title-3">
                                    Добавление товаров
                                </h3>
                                <p className="description-opportunity text-1">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt vel nisi ratione
                                    id fugit atque totam similique, animi doloremque tempore repellendus, iste libero
                                    pariatur commodi voluptas est placeat veniam. Ducimus!
                                </p>
                            </div>
                        </div>
                        <div className="opportunity">
                            <div className="media">
                                <img src="./images/marshrut.svg" alt=""/>
                            </div>
                            <div className="text-opportunity">
                                <h3 className="title-3">
                                    Маршрутизация доставок
                                </h3>
                                <p className="description-opportunity text-1">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt vel nisi ratione
                                    id fugit atque totam similique, animi doloremque tempore repellendus, iste libero
                                    pariatur commodi voluptas est placeat veniam. Ducimus!
                                </p>
                            </div>
                        </div>
                        <div className="opportunity">
                            <div className="media">
                                <img src="./images/uprav.svg" alt=""/>
                            </div>
                            <div className="text-opportunity">
                                <h3 className="title-3">
                                    Управление складами
                                </h3>
                                <p className="description-opportunity text-1">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt vel nisi ratione
                                    id fugit atque totam similique, animi doloremque tempore repellendus, iste libero
                                    pariatur commodi voluptas est placeat veniam. Ducimus!
                                </p>
                            </div>
                        </div>
                        <div className="opportunity">
                            <div className="media">
                                <img src="./images/kontrol.svg" alt=""/>
                            </div>
                            <div className="text-opportunity">
                                <h3 className="title-3">
                                    Контроль за перевозкой
                                </h3>
                                <p className="description-opportunity text-1">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt vel nisi ratione
                                    id fugit atque totam similique, animi doloremque tempore repellendus, iste libero
                                    pariatur commodi voluptas est placeat veniam. Ducimus!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="opportunities mt-1">
                    <h2 className="title-2">
                        Возможности для покупателей
                    </h2>
                    <div className="opportunity-group">
                        <div className="opportunity">
                            <div className="media">
                                <img src="./images/kontrol-pokup.svg" alt=""/>
                            </div>
                            <div className="text-opportunity">
                                <h3 className="title-3">
                                    Контроль за доставкой
                                </h3>
                                <p className="description-opportunity text-1">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt vel nisi ratione
                                    id fugit atque totam similique, animi doloremque tempore repellendus, iste libero
                                    pariatur commodi voluptas est placeat veniam. Ducimus!
                                </p>
                            </div>
                        </div>
                        <div className="opportunity">
                            <div className="media">
                                <img src="./images/zakaz.svg" alt=""/>
                            </div>
                            <div className="text-opportunity">
                                <h3 className="title-3">
                                    Делать заказ товара
                                </h3>
                                <p className="description-opportunity text-1">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt vel nisi ratione
                                    id fugit atque totam similique, animi doloremque tempore repellendus, iste libero
                                    pariatur commodi voluptas est placeat veniam. Ducimus!
                                </p>
                            </div>
                        </div>
                        <div className="opportunity">
                            <div className="media">
                                <img src="./images/vbor.svg" alt=""/>
                            </div>
                            <div className="text-opportunity">
                                <h3 className="title-3">
                                    Выбирать маршрут
                                </h3>
                                <p className="description-opportunity text-1">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt vel nisi ratione
                                    id fugit atque totam similique, animi doloremque tempore repellendus, iste libero
                                    pariatur commodi voluptas est placeat veniam. Ducimus!
                                </p>
                            </div>
                        </div>
                        <div className="opportunity">
                            <div className="media">
                                <img src="./images/spospb-opl.svg" alt=""/>
                            </div>
                            <div className="text-opportunity">
                                <h3 className="title-3">
                                    Несколько способов оплаты
                                </h3>
                                <p className="description-opportunity text-1">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt vel nisi ratione
                                    id fugit atque totam similique, animi doloremque tempore repellendus, iste libero
                                    pariatur commodi voluptas est placeat veniam. Ducimus!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="parameters-deliveries mt-1">
                    <div className="parameter">
                        <div className="media">
                            <img src="./images/rus.png" alt=""/>
                        </div>
                        <div className="text-parth">
                            <h2 className="title-2">
                                Доставка по всей России
                            </h2>
                            <p className="description-parameters text-2">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt vel nisi ratione id fugit atque totam similique, animi doloremque tempore repellendus, iste libero pariatur commodi voluptas est placeat veniam. Ducimus!
                            </p>
                        </div>
                    </div>
                    <div className="parameter">
                        <div className="media">
                            <img src="./images/deshevo.svg" alt=""/>
                        </div>
                        <div className="text-parth">
                            <h2 className="title-2">
                                Доставка по всей России
                            </h2>
                            <p className="description-parameters text-2">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt vel nisi ratione id fugit atque totam similique, animi doloremque tempore repellendus, iste libero pariatur commodi voluptas est placeat veniam. Ducimus!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="types-delivery mt-1">
                    <h2 className="title-2">
                        Типы перевозок
                    </h2>
                    <div className="type-delivery-group mt-2">
                        <div className="type-delivery">
                            <div className="media">
                                <img src="./images/avto.svg" alt=""/>
                            </div>
                            <div className="type-delivery-text">
                                <h3 className="title-3">
                                    Авто
                                </h3>
                                <p className="type-delivery-description text-2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ducimus laborum consectetur repellat quas porro, nobis tempora impedit facere. In corporis eaque magni? Pariatur optio nam laudantium! Possimus, sunt amet!
                                </p>
                            </div>
                        </div>
                        <div className="type-delivery">
                            <div className="media">
                                <img src="./images/zd.png" alt=""/>
                            </div>
                            <div className="type-delivery-text">
                                <h3 className="title-3">
                                    ЖД
                                </h3>
                                <p className="type-delivery-description text-2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ducimus laborum consectetur repellat quas porro, nobis tempora impedit facere. In corporis eaque magni? Pariatur optio nam laudantium! Possimus, sunt amet!
                                </p>
                            </div>
                        </div>
                        <div className="type-delivery">
                            <div className="media">
                                <img src="./images/avia.svg" alt=""/>
                            </div>
                            <div className="type-delivery-text">
                                <h3 className="title-3">
                                    Авиа
                                </h3>
                                <p className="type-delivery-description text-2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ducimus laborum consectetur repellat quas porro, nobis tempora impedit facere. In corporis eaque magni? Pariatur optio nam laudantium! Possimus, sunt amet!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Home;