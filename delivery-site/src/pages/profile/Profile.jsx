import "./profile.module.css";
import CardItem from "../../components/cardItem/CardItem.jsx";

const Profile = () => {
    return (
        <div className="profile">
            <div className="centring">
                <div className="profile-wrapper mt-1">
                    <div className="top-profile">
                        <div className="left-top-profile">
                            <div className="media">
                                <img src="./images/avatar-pr.png" alt=""/>
                            </div>
                            <div className="title-profile">
                                <h2 className="title-2 username">
                                    id_0000001
                                </h2>
                                <p className="status-profile text-4">
                                    <span>Статус:</span> покупатель
                                </p>
                            </div>
                        </div>
                        <div className="exit-profile text-4">Выйти</div>
                    </div>
                    <div className="bottom-profile mt-2">
                        <h3 className="titile-3">

                        </h3>
                        <ul className="contact text-2">
                            <li className="contact-item">
                                <span>Номер телефона:</span> не задано
                            </li>
                            <li className="contact-item">
                                <span>Электронная почта:</span> ыыы@taplap.ыыы
                            </li>
                            <li className="contact-item">
                                <span>Местоположение:</span> Антарктида
                            </li>
                            <li className="contact-item">
                                <span>О пользователе:</span> О пользователе: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ducimus laborum consectetur repellat quas porro, nobis tempora impedit facere. In corporis eaque magni? Pariatur optio nam laudantium! Possimus, sunt amet!
                            </li>
                        </ul>
                    </div>
                    <div className="el-order el-order--active mt-1">
                        <h2 className="title-2">
                            Заголовок
                        </h2>
                        <div className="card-group mt-2">
                            <CardItem></CardItem>
                            <CardItem></CardItem>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Profile;