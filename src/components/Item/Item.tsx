import { Link } from "react-router-dom";
import { Item } from "../../types";
import Button from "../Common/Button/Button";
import Card from "../Common/Card/Card";
import Tag from "../Common/Tag/Tag";
import styles from "./Item.module.scss";
import useAddToBasket from "../../hooks/useAddToBasket";
import { useAppSelector } from "../../store";
import { selectBasketItems } from "../../store/basketSlice";

interface IProps {
    item: Item;
}

const Item = (props: IProps) => {
    const { item } = props;
    const formattedPrice = item.price;
    const link = item.id.toString();
    const basketItems = useAppSelector(selectBasketItems);

    const { addToBasket, isLoading } = useAddToBasket();

    return (
        <Card>
            <div className={styles.item}>
                <Link className={styles.picture} to={link}>
                    <img src={`${process.env.URL}/${item.img}`} alt="product image" />
                </Link>
                <Link to={link} className={styles.title}>{item.type?.name} {item.brand?.name} {item.name}</Link>
                <div className={styles.price}>
                    <p>{formattedPrice} ₽</p>
                    {
                        basketItems.some(basketItem => basketItem.id === item.id)
                            ? <Button path="/basket">В корзину</Button>
                            : <Button type="main" onClick={() => addToBasket(item)} isLoading={isLoading}>Купить</Button>
                    }

                </div>
                <div className={styles.tags}>
                    <Tag>В офис</Tag>
                    <Tag variant="red">Игровые</Tag>
                    <Tag variant="grey">Хороший экран</Tag>
                    <Tag variant="purple">Ультрабуки</Tag>
                </div>
            </div>
        </Card>
    )
}
export default Item