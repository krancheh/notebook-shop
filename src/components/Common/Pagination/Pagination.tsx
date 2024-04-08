import Button from "../Button/Button";
import Card from "../Card/Card";
import styles from "./Pagination.module.scss";

interface IProps {
    page: number;
    totalPages: number;
}

const Pagination = (props: IProps) => {
    const { page, totalPages } = props;

    return (
        <div className={styles.pagination}>
            <Card>
                <Button>{"<"}</Button>
                {

                }
                <Button>{">"}</Button>
            </Card>
        </div>
    )
}
export default Pagination