import classes from "./profile.module.css";
import CardItem from "../../components/cardItem/CardItem.jsx";

const Profile = () => {
    const status = false;

    return (
        <div className="profile">
            <div className="centring">
                <div className={classes.profileWrapper}>
                    <div className={classes.topProfile}>
                        <div className={classes.leftTopProfile}>
                            <div className="media">
                                <img src="./images/avatar-pr.png" alt=""/>
                            </div>
                            <div className="titleProfile">
                                <h2 className="title-2 username">
                                    id_0000001
                                </h2>
                                <p className={`${classes.statusProfile} text-4`}>
                                    <span>Статус:</span>{status ? name = `Покупатель` : name = `Продавец`}
                                </p>
                            </div>
                        </div>
                        <div className="text-4">
                            <span className={classes.exitProfile}>Выйти</span>
                        </div>
                    </div>
                    <div className="bottomProfile mt-2">
                        <ul className="contact text-3">
                            <li className={classes.contactItem}>
                                <span>Номер телефона:</span> не задано
                            </li>
                            <li className={classes.contactItem}>
                                <span>Электронная почта:</span> ыыы@taplap.ыыы
                            </li>
                            <li className={classes.contactItem}>
                                <span>Местоположение:</span> Антарктида
                            </li>
                            <li className={classes.contactItem}>
                                <span>О пользователе:</span> Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Dolor ducimus laborum consectetur repellat quas porro, nobis tempora
                                impedit facere. In corporis eaque magni? Pariatur optio nam laudantium! Possimus, sunt
                                amet!
                            </li>
                        </ul>
                    </div>
                    <div className={`${classes.elOrder} ${classes.elOrderActive} mt-1`}>
                        <h2 className="title-2">
                            {status ? `История заказов` : `Cписок товаров`}
                        </h2>
                        <div className={`${classes.cardGroup} mt-2`}>
                            {status ? <CardItem></CardItem> : (
                                <a href="/create" className={classes.linkCreateProduct}> Добавить товар </a>)}
                            <CardItem></CardItem>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Profile;