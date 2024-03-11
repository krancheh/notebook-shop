import { ReactNode } from "react";
import styles from "./Card.module.scss";

interface IProps {
    children: ReactNode[];
}

const Card = (props: IProps) => {
    const { children } = props;

    return (
        <div >{children}</div>
    )
}
export default Card