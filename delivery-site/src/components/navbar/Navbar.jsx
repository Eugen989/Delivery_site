import "./navbar.css";

function Navbar({ isMainPage }) {
    return (
        <div className="navbar text-3">
            <header className={isMainPage ? 'header bg-none-head' : 'header bg-head'}>
                <div className="centring">
                    <div className="header-flex">
                        <a href="/" className="logo">
                            <img src="./images/лого.svg" alt=""/>
                        </a>
                        <div className="menu">
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