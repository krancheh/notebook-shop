import React, { ChangeEventHandler, FormEventHandler, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { LoginUserData } from '../../types';
import Input from '../../components/Common/Input/Input';
import Button from '../../components/Common/Button/Button';
import withLoading from '../../components/Common/WithLoading/WithLoading';

interface IProps {
    auth: (data: LoginUserData) => void;
    error: string;
    isLoading: boolean;
}

const LoginForm = (props: IProps) => {
    const { auth, error, isLoading } = props;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

    useEffect(() => {
        if (emailError || passwordError) {
            setIsSubmitDisabled(true);
        } else {
            setIsSubmitDisabled(false);
        }
    }, [emailError, passwordError])


    const handleEmail: ChangeEventHandler<HTMLInputElement> = (e) => {
        if (/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.value)) {
            return setEmailError("");
        }

        if (!e.target.value) {
            return setEmailError("Поле не может быть пустым");
        }

        return setEmailError("Введите корректный Email");
    }


    const handlePassword: ChangeEventHandler<HTMLInputElement> = (e) => {
        const inputValue = e.target.value;
        if (!inputValue) {
            return setPasswordError("Поле не может быть пустым");
        }

        if (!/[0-9a-zA-Z!@#]{6,}/g.test(inputValue)) {
            return setPasswordError("Пароль должен состоять минимум из 6 символов");
        }

        return setPasswordError("");
    }



    const submitHandler: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        const data: LoginUserData = {
            email, password
        }
        auth(data);
    }


    const SubmitButton = withLoading(Button);


    return (
        <form className="auth-form" onSubmit={submitHandler}>
            <h2>Авторизация</h2>
            <Input
                id="email"
                value={email}
                setValue={setEmail}
                onChange={() => setEmailError("")}
                onBlur={handleEmail}
                errorMessage={emailError}
                type='email'
                autocomplete="email"
                required
                label="Email"
                placeholder="vasya@gmail.com"
            />
            <Input
                id="password"
                value={password}
                setValue={setPassword}
                onBlur={handlePassword}
                errorMessage={passwordError}
                type="password"
                autocomplete="current-password"
                label="Пароль"
                required
                placeholder="•••••••"
            />
            <div className="checkbox">
                <input id="remember" type="checkbox" />
                <label htmlFor="remember">Запомнить</label>
            </div>
            {error ? <span className="form-error-message">{error}</span> : null}
            <span style={{ margin: "0 0 -20px 0" }}>
                Ещё нет учетной записи?
                <Link to="/signup">Зарегистрироваться</Link>
            </span>
            <SubmitButton type="main" submit disabled={isSubmitDisabled} isLoading={isLoading}>Отправить</SubmitButton>
        </form>
    );
};

export default LoginForm;