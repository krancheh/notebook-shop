
import { Item as ItemType } from "../../types";
import withLoading from "../Common/WithLoading/WithLoading";
import Item from "../Item/Item";
import styles from "./ItemsList.module.scss";

interface IProps {
    items: ItemType[];
}

const ItemsList = withLoading<IProps>((props: IProps) => {
    const { items } = props;

    return (
        <div className={styles.list}>{
            items.map(item => (
                <Item key={item.id} item={item} />
            ))
        }</div>
    )
})
export default ItemsList