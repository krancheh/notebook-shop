import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import Logo from "../Common/Logo/Logo";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="wrapper">
                <div className={styles['footer-content']}>
                    <div className={styles.info}>
                        <div className={styles['info-item']}>
                            <Logo />
                            <p>LapBook — Ваш надежный путеводитель
                                в мире ноутбуков! Мощные игровые и офисные ноутбуки для каждого. </p>
                        </div>
                        <div className={styles['info-item']}>
                            <h3>Компания</h3>
                            <div className={styles['info-links']}>
                                <Link to="/">О нас</Link>
                                <Link to="/">Сотрудники</Link>
                            </div>
                        </div>
                        <div className={styles['info-item']}>
                            <h3>Ознакомиться</h3>
                            <div className={styles['info-links']}>
                                <Link to="/catalog">Каталог</Link>
                                <Link to="/">Игровые ноутбуки</Link>
                                <Link to="/">Офисные ноутбуки</Link>
                            </div>
                        </div>
                        <div className={styles['info-item']}>
                            <h3>Работа у нас</h3>
                            <div className={styles['info-links']}>
                                <Link to="/">Вакансии</Link>
                                <Link to="/">Требования</Link>
                            </div>
                        </div>
                        <div className={styles['info-item']}>
                            <h3>Связаться</h3>
                            <div className={styles['info-links']}>
                                <Link to="/">support@lapbook.ru</Link>
                                <Link to="/">+7 (928) 23 1 - 43 - 24</Link>
                                <Link to="/">г. Ставрополь</Link>
                            </div>
                        </div>
                    </div>
                    <p className="copyright">Copyright 2024 • Все права защищены LapBook</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;