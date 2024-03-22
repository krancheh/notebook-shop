import Button from "../Common/Button/Button";
import BasketRemoveIcon from "../../assets/icons/basket-remove.svg";
import styles from "./BasketItem.module.scss";
import { Link } from "react-router-dom";
import { BasketItemCounted } from "../../types";
import useRemoveFromBasket from "../../hooks/useRemoveFromBasket";

interface IProps {
    item: BasketItemCounted;
}

const BasketItem = (props: IProps) => {
    const { item } = props;
    const { removeFromBasket } = useRemoveFromBasket();

    const handleRemoveItem = () => {
        removeFromBasket(item.basketItemsIds);
    }

    return (
        <div className={styles.item}>

            <div className={styles.itemContent}>
                <input type="number" value={item.basketItemsIds.length} disabled />
                <Link to={`catalog/${item.id}`} className={styles.picture} >
                    <img src={process.env.URL + `/${item.img}`} alt="item pic" />
                </Link>
                <Link to={`catalog/${item.id}`} className={styles.info}>{item.brand.name} {item.name}</Link>
                <span className={styles.type}>{item.type.name}</span>
                <p className={styles.price}>{item.price} ₽</p>
            </div>
            <div title="Удалить из корзины">
                <Button onClick={handleRemoveItem}><BasketRemoveIcon /></Button>
            </div>
        </div>
    )
}
export default BasketItem