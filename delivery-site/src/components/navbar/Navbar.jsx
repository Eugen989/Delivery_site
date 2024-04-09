import "./navbar.module.css"

// Маршруты
// /
// /products
// /login

function Navbar() {
    return (
        <div className="wrapper">
            <header className="header">
                <div className="centring">
                    <div className="header-flex">
                        <a href="/" className="logo">
                            logo
                        </a>
                        <a href="/products" className="catalog-link">
                            Каталог
                        </a>
                        <form action="#" className="form-search">
                            <input type="search" placeholder="Поиск..."/>
                        </form>
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
            </header>
        </div>
    )
}

export default Navbar