import { NavLink } from "react-router-dom"
import moduleStyles from "./Nav.module.scss";

type NavProps = {
    isActive: boolean;
}

interface IProps {
    styles?: {
        [key: string]: string;
    }
}

const Nav = (props: IProps) => {
    const { styles = moduleStyles } = props;

    const activeClassname = `${styles.link} ${styles.active}`;
    const checkNavStatus = (status: NavProps) => status.isActive ? activeClassname : styles.link;

    return (
        <nav className={styles.navigation}>
            <NavLink className={checkNavStatus} to='/'>Домашняя страница</NavLink>
            <NavLink className={checkNavStatus} to='/catalog'>Каталог</NavLink>
            <NavLink className={checkNavStatus} to='/delivery'>Доставка</NavLink>
        </nav>
    )
}

export default Nav