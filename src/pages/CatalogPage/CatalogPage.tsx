import { useState } from "react";
import Button from "../../components/Common/Button/Button";
import Card from "../../components/Common/Card/Card";
import ItemsList from "../../components/ItemsList/ItemsList";
import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./CatalogPage.module.scss";
import useGetItems from "../../hooks/useGetItems";


const ShopPage = () => {
    const [params, setParams] = useState();
    const { items, isLoading } = useGetItems();

    return (
        <div className={styles.catalog}>
            <div className="wrapper">
                <div className={styles.title}>
                    <h1>Каталог товаров</h1>
                    <p>Найдено {items.length} товаров</p>
                </div>
                <div className={styles.content}>
                    <SearchBar />
                    <Button type="main">Найти</Button>
                    <Card className={styles.filter}>
                        <h4>Параметры</h4>
                        <Button>Выберите фильтр</Button>
                    </Card>
                    <ItemsList isLoading={isLoading} items={items} />

                </div>
            </div>
        </div>
    )
}

export default ShopPage