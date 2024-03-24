import { Link } from "react-router-dom";
import { Item } from "../../types";
import Button from "../Common/Button/Button";
import Card from "../Common/Card/Card";
import Tag from "../Common/Tag/Tag";
import styles from "./Item.module.scss";
import useAddToBasket from "../../hooks/useAddToBasket";
import { useAppSelector } from "../../store";
import { selectBasketItems } from "../../store/basketSlice";
import getFormattedPrice from "../../utils/getFormattedPrice";
import useRemoveFromBasket from "../../hooks/useRemoveFromBasket";

interface IProps {
    item: Item;
    isBasket?: boolean;
}

const Item = (props: IProps) => {
    const { item, isBasket = false } = props;
    const formattedPrice = getFormattedPrice(item.price);
    const link = "/catalog/" + item.id.toString();
    const basketItems = useAppSelector(selectBasketItems);
    const basketItem = basketItems.find(basketItem => basketItem.id === item.id);

    const { addToBasket, isLoading } = useAddToBasket();
    const { removeFromBasket } = useRemoveFromBasket();

    return (
        <Card className={styles.card}>
            <div className={styles.item}>
                <Link className={styles.picture} to={link}>
                    <img src={`${process.env.URL}/${item.img}`} alt="product image" />
                </Link>
                <Link to={link} className={styles.title}>{item.type?.name} {item.brand?.name} {item.name}</Link>
                <div className={styles.price}>
                    <p>{formattedPrice} ₽</p>
                    {
                        isBasket
                        && <div className={styles.count}>
                            <Button type="text" onClick={() => removeFromBasket(basketItem.basketItemsIds.slice(0, 1))}>-</Button>
                            <span>{basketItem.basketItemsIds.length}</span>
                            <Button type="text" onClick={() => addToBasket(item)}>+</Button>
                        </div>
                    }
                    {
                        isBasket
                            ? <Button onClick={() => removeFromBasket(basketItem.basketItemsIds)}>Удалить</Button>
                            : basketItems.some(basketItem => basketItem.id === item.id)
                                ? <Button path="/basket">В корзине</Button>
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