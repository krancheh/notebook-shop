import Button from "../Common/Button/Button";
import styles from "./BasketWidget.module.scss";
import BasketIcon from "../../assets/icons/basket.svg";
import { useSelector } from "react-redux";
import { selectBasketItems } from "../../store/basketSlice";
import Dropdown from "../Common/Dropdown/Dropdown";
import BasketItem from "./BasketItem";
import useGetBasketItems from "../../hooks/useGetBasketItems";
import useRemoveFromBasket from "../../hooks/useRemoveFromBasket";


const BasketWidget = () => {
    const basketItems = useSelector(selectBasketItems);
    useGetBasketItems();
    const { removeFromBasket } = useRemoveFromBasket();


    const handleClearBasket = () => {
        const ids = basketItems.reduce((acc, item) => {
            acc.push(...item.basketItemsIds);
            return acc;
        }, [] as number[])

        removeFromBasket(ids);
    }

    return (
        <div className={styles.widget} title="Корзина">

            <Dropdown trigger={
                <Button className={styles.openButton} type="text">{basketItems.length || null}<BasketIcon /></Button>
            }>
                <div className={styles.menu}>
                    <p>Всего: {basketItems.length}</p>
                    <div className={styles.items}>
                        {basketItems.map(item => (
                            <BasketItem key={item.id} item={item} />
                        ))}
                    </div>
                    <div className={styles.basketButtons}>
                        <Button type="main" path="/basket">Перейти в корзину</Button>
                        <Button onClick={handleClearBasket}>Очистить</Button>
                    </div>
                </div>
            </Dropdown>
        </div>
    )
}
export default BasketWidget