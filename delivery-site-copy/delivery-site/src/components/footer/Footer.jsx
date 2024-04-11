import "./footer.module.css";
import classes from "./footer.module.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="centring">
                <div className={classes.footerWrapper}>
                    <a href="/" className="logo">
                        <img src="./images/лого.svg" alt=""/>
                    </a>

                    <div className="menu text-3">
                        <li className="menu-item">
                            <a href="/" className="menu-link">Главная</a>
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

                    <p className="right-footer">
                        Экспресс логистика, 2024 ©
                    </p>
                </div>
            </div>
        </footer>
    )
};

export default Footer;