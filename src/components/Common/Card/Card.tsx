import { ReactNode } from "react";
import styles from "./Card.module.scss";

interface IProps {
    children: ReactNode[] | ReactNode;
    className?: string;
}

const Card = (props: IProps) => {
    const { children, className } = props;

    return (
        <div className={styles.card + ` ${className}`}>{children}</div>
    )
}
export default Card