import React from 'react';
import { Link, NavLink, useLocation } from "react-router-dom";
import SidebarIcon from "../../assets/icons/sidebar-icon.svg";
import Button from '../Button/Button';
import styles from "./Header.module.scss";

interface IProps {
    handler: () => void;
}

const Header = (props: IProps) => {
    const { handler } = props;
    const { pathname } = useLocation();

    return (
        <header className={styles.header}>
            <div className="wrapper">
                <div className={styles.headerContent}>
                    <Button className={styles.menuButton} type="text" onClick={handler}><SidebarIcon /></Button>
                    <Link className='logo' to="/">Lap<span>Book</span></Link>

                    <nav className={styles.navigation}>
                        <NavLink className={(status) => status.isActive ? `${styles.link} ${styles.active}` : styles.link} to='/'>Домашняя страница</NavLink>
                        <NavLink className={(status) => status.isActive ? `${styles.link} ${styles.active}` : styles.link} to='/catalog'>Каталог</NavLink>
                        <NavLink className={(status) => status.isActive ? `${styles.link} ${styles.active}` : styles.link} to='/delivery'>Доставка</NavLink>
                    </nav>

                    {/* <MiniProfile /> */}
                </div>
            </div>
        </header>
    );
};

export default Header;