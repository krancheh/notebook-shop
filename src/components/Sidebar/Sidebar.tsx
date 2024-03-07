import React, { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import Button from "../Button/Button";
import SidebarIcon from "../../assets/icons/sidebar-icon.svg";
// import MiniProfile from "../MiniProfile/MiniProfile";
import styles from "./Sidebar.module.scss";
import Nav from '../Common/Nav/Nav';
import Logo from '../Common/Logo/Logo';

interface IProps {
    isOpen: boolean;
    handleSidebar: () => void;
}

const Sidebar = (props: IProps) => {
    const { isOpen, handleSidebar } = props;
    const { pathname } = useLocation();

    useEffect(() => {
        if (isOpen) {
            handleSidebar();
        }
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, [pathname])

    const showSidebarClassname = `${styles.sidebar} ${styles.show}`;

    return (
        <div className={`${isOpen ? showSidebarClassname : styles.sidebar}`}>
            <div className={styles.sidebarContent}>
                <div className={styles.sidebarHead}>
                    <Logo />
                    <Button type="text" onClick={handleSidebar}><SidebarIcon /></Button>
                </div>

                <Nav styles={styles} />

                {/* <MiniProfile /> */}
            </div>

            <div className={styles.closeArea} onClick={handleSidebar} />
        </div>
    );
};

export default Sidebar;