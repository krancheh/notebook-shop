import { ReactNode } from "react";
import styles from "./Card.module.scss";

interface IProps {
    children: ReactNode[] | ReactNode;
}

const Card = (props: IProps) => {
    const { children } = props;

    return (
        <div className={styles.card}>{children}</div>
    )
}
export default Card