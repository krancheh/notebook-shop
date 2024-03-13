import { useState } from 'react';
import { Navigate, useLocation } from "react-router-dom";
import './AuthPage.scss';
import BgShape4 from "../../assets/images/bg-shape4.svg";
import welcomeImage from "../../assets/images/welcome.png";
import User from '../../services/User';
import SignupForm from './SignupForm';
import { LoginUserData, SignupUserData } from '../../types';
import LoginForm from './LoginForm';

interface AuthFC {
    [key: string]: typeof User.login;
}

const AuthPage = () => {
    const { pathname } = useLocation();
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const auth: AuthFC = {
        "/login": (data: LoginUserData) => User.login(data),
        "/signup": (data: SignupUserData) => User.signup(data)
    }

    const makeRequest = async (data: SignupUserData | LoginUserData) => {
        setIsLoading(true);

        auth[pathname](data)
            .then((result) => {
                console.log(result);

                // const { user } = result.data;
                // console.log(user);
                // setIsSuccess(true);
            })
            .catch(error => {
                if (error.response) {
                    return setErrorMessage(error.response.data.message);
                }
                return setErrorMessage("Произошла неизвестная ошибка");
            })
            .finally(() => setIsLoading(false));
    }

    // if (isSuccess) return <Navigate to={'/'} />

    return (
        <div className="auth-page">
            <div className="auth-content">
                <div className="left-side">
                    <h2>Добро пожаловать!</h2>
                    <BgShape4 />
                    <img src={welcomeImage} alt="Hi" />
                </div>
                {pathname === "/login"
                    ? <LoginForm auth={makeRequest} error={errorMessage} isLoading={isLoading} />
                    : <SignupForm auth={makeRequest} error={errorMessage} isLoading={isLoading} />
                }
            </div>
        </div>
    )


};

export default AuthPage;