import { NavLink } from "react-router-dom"
import styles from "./Nav.module.scss";

type NavProps = {
    isActive: boolean;
}

const Nav = () => {
    const activeClassname = `${styles.link} ${styles.active}`;
    const checkNavStatus = (props: NavProps) => props.isActive ? activeClassname : styles.link;

    return (
        <nav className={styles.navigation}>
            <NavLink className={checkNavStatus} to='/'>Домашняя страница</NavLink>
            <NavLink className={checkNavStatus} to='/catalog'>Каталог</NavLink>
            <NavLink className={checkNavStatus} to='/delivery'>Доставка</NavLink>
        </nav>
    )
}

export default Nav