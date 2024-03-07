import SidebarIcon from "../../assets/icons/sidebar-icon.svg";
import Button from '../Button/Button';
import styles from "./Header.module.scss";
import Nav from '../Common/Nav/Nav';
import Logo from "../Common/Logo/Logo";

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
                    {/* <MiniProfile /> */}
                </div>
            </div>
        </header>
    );
};

export default Header;