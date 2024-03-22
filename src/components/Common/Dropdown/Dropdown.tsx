import { Children, ReactElement, cloneElement, useEffect, useRef, useState } from "react";
import styles from "./Dropdown.module.scss";

interface IProps {
    trigger: ReactElement;
    children: ReactElement | ReactElement[] | null;
}


const Dropdown = (props: IProps) => {
    const { trigger, children } = props;
    const [isOpen, setIsOpen] = useState(false);

    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };



    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div style={{ position: 'relative' }}>
            <div onClick={toggleMenu}>{trigger}</div>
            {isOpen && (
                <div className={styles.menu} ref={menuRef}>
                    {Children.map(children, (child) => {
                        return cloneElement(child, { onClose: closeMenu });
                    })}
                </div>
            )}
        </div>
    );
};

export default Dropdown;