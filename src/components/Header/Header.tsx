import SidebarIcon from "../../assets/icons/sidebar-icon.svg";
import Button from '../Common/Button/Button';
import styles from "./Header.module.scss";
import Nav from '../Common/Nav/Nav';
import Logo from "../Common/Logo/Logo";
import UserProfileDropdown from "../UserProfileDropdown.tsx/UserProfileDropdown";
import BasketWidget from "../BasketWidget/BasketWidget";

interface IProps {
    handleSidebar: () => void;
}

const Header = (props: IProps) => {
    const { handleSidebar } = props;

    return (
        <header className={styles.header}>
            <div className="wrapper">
                <div className={styles.headerContent}>
                    <Button className={styles.menuButton} type="text" onClick={handleSidebar}><SidebarIcon /></Button>
                    <Logo />
                    <Nav />
                    <div className={styles.userAndBasket}>
                        <BasketWidget />
                        <div className={styles.userWidget}>
                            <UserProfileDropdown />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;