import { useAppSelector } from "../../store";
import { selectUser } from "../../store/userSlice";
import Button from "../Common/Button/Button";
import withLoading from "../Common/WithLoading/WithLoading";
import styles from "./UserProfileDropdown.module.scss";


const UserWidget = () => {
    const name = useAppSelector(selectUser);

    return (
        name
            ? <div>{name}</div>
            : <div className={styles.links}>
                <Button type="default" path="/login">Войти</Button>
                <Button type="main" path="/signup">Регистрация</Button>
            </div>
    )
}

// const UserProfileDropdown = withLoading(UserWidget);I
export default UserWidget;