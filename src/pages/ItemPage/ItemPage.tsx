import { useParams } from "react-router-dom";
import styles from "./ItemPage.module.scss";
import useGetItem from "../../hooks/useGetItem";
import { Item } from "../../types";
import withLoading from "../../components/Common/WithLoading/WithLoading";
import Card from "../../components/Common/Card/Card";
import Button from "../../components/Common/Button/Button";
import useAddToBasket from "../../hooks/useAddToBasket";
import getFormattedPrice from "../../utils/getFormattedPrice";
import { useEffect, useState } from "react";


interface ItemProps {
    item: Item;
    isLoading: boolean;
}

const Item = withLoading<ItemProps>((props: ItemProps) => {
    const { item } = props;
    const { addToBasket, isLoading } = useAddToBasket();
    const [formattedPrice, setFormattedPrice] = useState<string>("");

    useEffect(() => {
        if (item) {
            const price = getFormattedPrice(item.price);
            setFormattedPrice(price);
        }
    }, [item])

    return (
        item
            ? <Card className={styles.item}>
                <div className={styles.picture}>
                    <img src={process.env.URL + `/${item.img}`} alt="Product picture" />
                </div>
                <div className={styles.description}>
                    <h1>{item.type.name} {item.brand.name} {item.name}</h1 >
                    <div className={styles.info}>
                        <h3>Характеристики:</h3>
                        {
                            item.info.length
                                ? <ul className={styles.list}>
                                    {item.info.map(info => (
                                        <li key={info.id}><b>{info.title}:</b>{info.description}</li>
                                    ))}
                                </ul>
                                : <p>Не указаны</p>
                        }
                    </div>
                    <Card className={styles.price}>
                        <h2>{formattedPrice} ₽</h2>
                        <Button type="main" onClick={() => addToBasket(item)} isLoading={isLoading}>Купить</Button>
                    </Card>
                </div>

            </Card>
            : <h3>Товар не найден</h3>
    )
})


const ItemPage = () => {
    const { id } = useParams();
    const { item, isLoading } = useGetItem(+id);

    return (
        <div>
            <div className="wrapper">
                <Item item={item} isLoading={isLoading} />
            </div>
        </div>
    )
}
export default ItemPage





