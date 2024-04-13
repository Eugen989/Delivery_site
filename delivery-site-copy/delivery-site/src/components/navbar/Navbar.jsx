import "./navbar.css";

function Navbar({ isMainPage }) {
    let userData = JSON.parse(localStorage.getItem('UserData'));
    console.log("user data id - ", userData.userId);

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
                                <a href="/" className="menu-link">Главная</a>
                            </li>
                            <li className="menu-item">
                                <a href="/products" className="menu-link">
                                    Каталог
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="/about" className="menu-link">О нас</a>
                            </li>
                        </div>
                        <div className="right-navbar">
                            <a href="/basket" className="basket-link">
                                <img src="images/basket.svg" alt="basket"/>
                                <span className="indicator-buy text-1">3</span>
                            </a>
                            <div className="profile-link">
                                {
                                    userData.userId ?
                                        <a href="/profile" className="yes-profile">
                                            <img src="images/avatar-profile.png" alt=""/>
                                        </a>
                                        :
                                        <a href="/logup" className="no-profile no-profile--active">
                                            Войти
                                        </a>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}


export default Navbar