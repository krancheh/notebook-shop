import { useParams } from "react-router-dom";
import styles from "./ItemPage.module.scss";
import useGetItem from "../../hooks/useGetItem";
import { Item } from "../../types";
import withLoading from "../../components/Common/WithLoading/WithLoading";
import Card from "../../components/Common/Card/Card";
import Button from "../../components/Common/Button/Button";
import useAddToBasket from "../../hooks/useAddToBasket";


interface ItemProps {
    item: Item;
    isLoading: boolean;
}

const Item = withLoading<ItemProps>((props: ItemProps) => {
    const { item } = props;
    const { addToBasket, isLoading } = useAddToBasket();

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
                        <h2>{item.price} ₽</h2>
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
    console.log(item);


    return (
        <div>
            <div className="wrapper">
                <Item item={item} isLoading={isLoading} />
            </div>
        </div>
    )
}
export default ItemPage





