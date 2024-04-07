import "./navbar.module.css"

function Navbar() {
    return (
        <div className="wrapper">
            <header className="header">
                <div className="centring">
                    <div className="header-flex">
                        <a href="#" className="logo">
                            logo
                        </a>
                        <a href="#" className="catalog-link">
                            Каталог
                        </a>
                        <form action="#" className="form-search">
                            <input type="search" placeholder="Поиск..."/>
                        </form>
                        <a href="#" className="basket">
                            <img src="images/basket.svg" alt="basket"/>
                            <span className="indicator-buy">3</span>
                        </a>
                        <div className="profile-link">
                            <a href="#" className="no-profile no-profile--active">
                                <img src="images/no-profile.svg" alt=""/>
                                Войти
                            </a>
                            <a href="#" className="yes-profile">
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