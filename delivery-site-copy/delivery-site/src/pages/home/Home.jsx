import classes from "./home.module.css";

const Home = () => {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset >= 100) {
            document.querySelector('header').style.background = '#2F3485';
        } else {
            document.querySelector('header').style.background = 'none';
        }
    });
    return (

        <div className="home">
            <div className={classes.banner}>
                <div className="centring">
                    <div className={`${classes.bannerText} appearance`}>
                        <h1 className="title-1">
                            экспресс логистика
                        </h1>
                        <a href="#anchor" className={classes.anchor}>
                            <p className="text-3">
                                Узнать подробнее
                            </p>
                            <img src="./images/pointer.svg" alt=""/>
                        </a>
                    </div>
                </div>
            </div>

            <div className="centring">
                <div className={`${classes.opportunities} mt-1`} id="anchor">
                    <h2 className="title-2">
                        Возможности для продавцов
                    </h2>
                    <div className={classes.opportunityGroup}>
                        <div className="opportunity">
                            <div className={classes.media}>
                                <img src="./images/create-pr.svg" alt=""/>
                            </div>
                            <div className={classes.textOpportunity}>
                                <h3 className="title-3">
                                    Добавление товаров
                                </h3>
                                <p className={`${classes.descriptionOpportunity} text-1`}>
                                    Удобный функционал позволяет быстро и просто добавлять вашу продукцию в нашу
                                    систему.
                                    Создавайте описания, загружайте фотографии,
                                    устанавливайте цены - все для того, чтобы ваш товар был представлен максимально
                                    привлекательно для покупателей.
                                </p>
                            </div>
                        </div>
                        <div className="opportunity">
                            <div className={classes.media}>
                                <img src="./images/marshrut.svg" alt=""/>
                            </div>
                            <div className={classes.textOpportunity}>
                                <h3 className="title-3">
                                    Маршрутизация доставок
                                </h3>
                                <p className={`${classes.descriptionOpportunity} text-1`}>
                                    Не беспокойтесь о доставке - наша система позволяет настроить маршруты доставок и
                                    оптимизировать их для максимальной эффективности.
                                    Следите за статусом каждой посылки и обеспечьте безупречный сервис вашим клиентам.
                                </p>
                            </div>
                        </div>
                        <div className="opportunity">
                            <div className={classes.media}>
                                <img src="./images/uprav.svg" alt=""/>
                            </div>
                            <div className={classes.textOpportunity}>
                                <h3 className="title-3">
                                    Управление складами
                                </h3>
                                <p className={`${classes.descriptionOpportunity} text-1`}>
                                    Эффективное управление складами поможет вам оптимизировать запасы, отслеживать
                                    поступления и отгрузки товаров, а также автоматизировать процессы инвентаризации.
                                    Всегда имейте под рукой актуальную информацию о наличии и количество товаров на
                                    складе.
                                </p>
                            </div>
                        </div>
                        <div className="opportunity">
                            <div className={classes.media}>
                                <img src="./images/kontrol.svg" alt=""/>
                            </div>
                            <div className={classes.textOpportunity}>
                                <h3 className="title-3">
                                    Контроль за перевозкой
                                </h3>
                                <p className={`${classes.descriptionOpportunity} text-1`}>
                                    Благодаря возможности контроля за перевозкой, вы можете отслеживать перемещение
                                    товаров от склада к пункту назначения.
                                    Будьте в курсе всех этапов доставки и обеспечьте безопасность и своевременность
                                    поставок.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${classes.opportunities} mt-1`}>
                    <h2 className="title-2">
                        Возможности для покупателей
                    </h2>
                    <div className={classes.opportunityGroup}>
                        <div className="opportunity">
                            <div className={classes.media}>
                                <img src="./images/kontrol-pokup.svg" alt=""/>
                            </div>
                            <div className={classes.textOpportunity}>
                                <h3 className="title-3">
                                    Контроль за доставкой
                                </h3>
                                <p className={`${classes.descriptionOpportunity} text-1`}>
                                Отслеживайте маршрут вашего заказа в реальном времени! 
                                Теперь вы можете узнать в каких городах побывал ваш заказ и где он сейчас находится. 
                                Будьте в курсе и надежно контролируйте процесс доставки.
                                </p>
                            </div>
                        </div>
                        <div className="opportunity">
                            <div className={classes.media}>
                                <img src="./images/zakaz.svg" alt=""/>
                            </div>
                            <div className={classes.textOpportunity}>
                                <h3 className="title-3">
                                    Делайте Заказ Товара
                                </h3>
                                <p className={`${classes.descriptionOpportunity} text-1`}>
                                Оформление заказа стало проще - выбирайте интересующий товар, добавляйте в корзину и 
                                оформляйте доставку всего в несколько кликов. 
                                Получите доступ к широкому ассортименту товаров и быстрому оформлению заказа.
                                </p>
                            </div>
                        </div>
                        <div className="opportunity">
                            <div className={classes.media}>
                                <img src="./images/vbor.svg" alt=""/>
                            </div>
                            <div className={classes.textOpportunity}>
                                <h3 className="title-3">
                                Выбирайте Маршрут
                                </h3>
                                <p className={`${classes.descriptionOpportunity} text-1`}>
                                Выберите удобный маршрут доставки! У нас представлены разные ценовые группы, влияющие на скорость доставки. 
                                Оптимизируйте доставку под свои потребности и выбирайте удобный способ получения товара.
                                </p>
                            </div>
                        </div>
                        <div className="opportunity">
                            <div className={classes.media}>
                                <img src="./images/spospb-opl.svg" alt=""/>
                            </div>
                            <div className={classes.textOpportunity}>
                                <h3 className="title-3">
                                    Несколько способов оплаты
                                </h3>
                                <p className={`${classes.descriptionOpportunity} text-1`}>
                                У нас представлены различные способы оплаты, чтобы удовлетворить все ваши потребности. 
                                Оплачивайте заказ удобным для вас способом - наличными, 
                                банковской картой, онлайн-платежами и другими доступными вариантами.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-1">
                    <div className={classes.parameter}>
                        <div className={classes.media}>
                            <img src="./images/rus.png" alt=""/>
                        </div>
                        <div className="textParth">
                            <h2 className="title-2">
                                Доставка по всей России
                            </h2>
                            <p className="text-2">
                            Мы гордимся тем, что обеспечиваем доставку по всей просторной России. 
                            Независимо от того, где вы находитесь, мы гарантируем надежность и быстроту доставки. 
                            Воспользуйтесь нашими услугами, 
                            чтобы получить ваш товар в любой уголок России без лишних хлопот.</p>
                        </div>
                    </div>
                    <div className={classes.parameter}>
                        <div className={classes.media}>
                            <img src="./images/deshevo.svg" alt=""/>
                        </div>
                        <div className="textParth">
                            <h2 className="title-2">
                                Доставим дешево и быстро
                            </h2>
                            <p className="text-2">
                            Мы ценим ваше время и ваш бюджет, поэтому наша цель - предоставить вам дешевую и
                             быструю доставку. Мы работаем над оптимизацией процессов, чтобы обеспечить эффективность 
                             и экономию для вас. 
                            Доверьте нам ваш заказ, и мы доставим его быстро и недорого.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Home;