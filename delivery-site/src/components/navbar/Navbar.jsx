import "./navbar.css";

function Navbar() {
    return (
        <div className="navbar">
            <header className="header">
                <div className="centring">
                    <div className="header-flex">
                        <a href="/" className="logo">
                            logo
                        </a>
                        <div className="menu text-3">
                            <li className="menu-item">
                                <a href="/" className="menu-link">Гланая</a>
                            </li>
                            <li className="menu-item">
                                <a href="/products" className="menu-link">
                                    Каталог
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="" className="menu-link">О нас</a>
                            </li>
                        </div>
                        <div className="right-navbar">
                            <a href="/basket" className="basket-link">
                                <img src="images/basket.svg" alt="basket"/>
                                <span className="indicator-buy text-1">3</span>
                            </a>
                            <div className="profile-link">
                                <a href="/login" className="no-profile no-profile--active">
                                    <img src="images/no-profile.svg" alt=""/>
                                    Войти
                                </a>
                                <a href="/profile" className="yes-profile">
                                    <img src="images/avatar-profile.png" alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar