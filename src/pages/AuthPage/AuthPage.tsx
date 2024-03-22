import { useState } from 'react';
import { Navigate, useLocation } from "react-router-dom";
import './AuthPage.scss';
import BgShape4 from "../../assets/images/bg-shape4.svg";
import welcomeImage from "../../assets/images/welcome.png";
import UserService from '../../services/UserService';
import SignupForm from './SignupForm';
import { LoginUserData, SignupUserData } from '../../types';
import LoginForm from './LoginForm';
import { useAppDispatch, useAppSelector } from '../../store';
import { selectAuthStatus, setUser } from '../../store/userSlice';

interface AuthFC {
    [key: string]: typeof UserService.login;
}

const AuthPage = () => {
    const { pathname } = useLocation();
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const isLoggedIn = useAppSelector(selectAuthStatus);

    const dispatch = useAppDispatch();

    const endpoints: AuthFC = {
        "/login": (data: LoginUserData) => UserService.login(data),
        "/signup": (data: SignupUserData) => UserService.signup(data)
    }

    const auth = async (data: SignupUserData | LoginUserData) => {
        try {
            setIsLoading(true);
            const result = await endpoints[pathname](data);
            const { user } = result.data;
            dispatch(setUser(user.firstName));
        } catch (e) {
            if (e.response) {
                return setErrorMessage(e.response.data.message);
            }
            return setErrorMessage("Произошла неизвестная ошибка");
        } finally {
            setIsLoading(false);
        }
    }




    if (isLoggedIn) return <Navigate to={'/catalog'} />

    return (
        <div className="auth-page">
            <div className="auth-content">
                <div className="left-side">
                    <h2>Добро пожаловать!</h2>
                    <BgShape4 />
                    <img src={welcomeImage} alt="Hi" />
                </div>
                {pathname === "/login"
                    ? <LoginForm auth={auth} error={errorMessage} isLoading={isLoading} />
                    : <SignupForm auth={auth} error={errorMessage} isLoading={isLoading} />
                }
            </div>
        </div>
    )


};

export default AuthPage;