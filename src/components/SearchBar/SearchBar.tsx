import Card from "../Common/Card/Card";
import styles from "./SearchBar.module.scss";
import SearchIcon from "../../assets/icons/search-icon.svg";

const SearchBar = () => {
    return (
        <Card className={styles.searchBar}>
            <input type="search" placeholder="Поиск товаров" />
            <SearchIcon className={styles.icon} />
        </Card>
    )
}
export default SearchBar