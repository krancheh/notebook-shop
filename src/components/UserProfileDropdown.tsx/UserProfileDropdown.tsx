import { useState } from "react"
import Button from "../Common/Button/Button"
import withLoading from "../Common/WithLoading/WithLoading";

interface IProps {
    user: string
}

const UserProfileDropdown = withLoading<IProps>(({ user }) => {
    // const [user, setUser] = useState(null);

    return (
        user
            ? <div>User</div>
            : <div>
                <Button type="default" path="/login">Войти</Button>
                <Button type="main" path="/signup">Регистрация</Button>
            </div>
    )
}
)
export default UserProfileDropdown;