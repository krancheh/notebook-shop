import { useNavigate } from "react-router-dom";
import UserService from "../../services/UserService";
import { useAppDispatch, useAppSelector } from "../../store";
import { logout, selectUser } from "../../store/userSlice";
import Button from "../Common/Button/Button";
import Dropdown from "../Common/Dropdown/Dropdown";
import styles from "./UserProfileDropdown.module.scss";


const UserWidget = () => {
    const name = useAppSelector(selectUser);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleLogout = async () => {
        try {
            const result = await UserService.logout();
            dispatch(logout());
        } catch (e) {
            console.log(e);
        }

    }

    return (
        name
            ? <Dropdown trigger={<div className={styles.firstname}>{name}</div>}>
                <Button onClick={handleLogout}>Выйти</Button>
            </Dropdown>
            : <div className={styles.links}>
                <Button type="default" path="/login">Войти</Button>
                <Button type="main" path="/signup">Регистрация</Button>
            </div>
    )
}

// const UserProfileDropdown = withLoading(UserWidget);I
export default UserWidget;