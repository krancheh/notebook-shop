import { ReactNode } from "react";
import styles from "./Tag.module.scss";

const color = {
    blue: ["#D7E0FF", "#6473FF"],
    red: ["#FFD7DE", "#FF6476"],
    purple: ["#FCD7FF", "#BB64FF"],
    grey: ["#E8E8E8", "#535A56"],
}

type Variant = "blue" | "red" | "purple" | "grey";

interface IProps {
    children?: ReactNode[] | ReactNode | string;
    variant?: Variant;
}

const Tag = (props: IProps) => {
    const { children, variant = "blue" } = props;

    return (
        <div style={{ backgroundColor: color[variant][0], color: color[variant][1] }} className={styles.tag}>{children}</div>
    )
}
export default Tag