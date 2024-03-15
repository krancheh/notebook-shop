import Card from "../Common/Card/Card";
import styles from "./SearchBar.module.scss";
import SearchIcon from "../../assets/icons/search-icon.svg";

const SearchBar = () => {
    return (
        <Card>
            <div className={styles.searchInput}>
                <input type="search" placeholder="Поиск товаров" />
                <SearchIcon className={styles.icon} />
            </div>
        </Card>
    )
}
export default SearchBar