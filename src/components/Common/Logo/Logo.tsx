import { Link } from "react-router-dom";
import styles from "./Logo.module.scss";

const Logo = () => {
    return (
        <Link className={styles.logo} to="/">Lap<span>Book</span></Link>
    )
}

export default Logo