import React, { ChangeEventHandler, FormEventHandler, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Button from '../../components/Common/Button/Button';
import Input from '../../components/Common/Input/Input';
import { SignupUserData } from '../../types';
import withLoading from '../../components/Common/WithLoading/WithLoading';

interface IProps {
    auth: (data: SignupUserData) => void;
    error: string;
    isLoading: boolean;
}

const SignupForm = (props: IProps) => {
    const { auth, error, isLoading } = props;

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [retypedPassword, setRetypedPassword] = useState("");

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [retypePwdError, setRetypePwdError] = useState("");

    const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

    useEffect(() => {
        if (firstNameError || lastNameError || passwordError || retypePwdError) {
            setIsSubmitDisabled(true);
        } else {
            setIsSubmitDisabled(false);
        }
    }, [firstNameError, lastNameError, passwordError, retypePwdError])

    const handleFirstName: ChangeEventHandler<HTMLInputElement> = (e) => {
        if (/^[a-zA-Zа-яА-Я]+$/.test(e.target.value)) {
            return setFirstNameError("");
        }

        if (!e.target.value) {
            return setEmailError("Поле не может быть пустым");
        }
        return setFirstNameError("Имя содержит недопустимые символы");
    }

    const handleLastName: ChangeEventHandler<HTMLInputElement> = (e) => {
        if (/^[a-zA-Zа-яА-Я]+$/.test(e.target.value)) {
            return setLastNameError("");
        }

        if (!e.target.value) {
            return setEmailError("Поле не может быть пустым");
        }

        return setLastNameError("Фамилия содержит недопустимые символы")
    }

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
    }

    const handleRetypePassword: ChangeEventHandler<HTMLInputElement> = (e) => {
        const inputValue = e.target.value;
        if (!inputValue) {
            return setRetypePwdError("Поле не может быть пустым");
        }

        if (inputValue !== password) {
            return setRetypePwdError("Пароли не совпадают");
        }
    }

    const submitHandler: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        auth({ email, firstName, lastName, password });
    }

    const SubmitButton = withLoading(Button);

    return (
        <form className="auth-form" onSubmit={event => submitHandler(event)}>
            <h2>Регистрация</h2>
            <div className="name-inputs">
                <Input
                    id="firstName"
                    value={firstName}
                    setValue={setFirstName}
                    onChange={() => setFirstNameError("")}
                    onBlur={handleFirstName}
                    autocomplete="given-name"
                    type="text"
                    required
                    label="Имя"
                    placeholder="Вася"
                    errorMessage={firstNameError}
                />
                <Input
                    id="lastName"
                    value={lastName}
                    setValue={setLastName}
                    onChange={() => setLastNameError("")}
                    onBlur={handleLastName}
                    autocomplete="family-name"
                    required
                    label="Фамилия"
                    placeholder="Пупкин"
                    errorMessage={lastNameError}
                />
            </div>
            <Input
                id="email"
                value={email}
                setValue={setEmail}
                onChange={() => setEmailError("")}
                onBlur={handleEmail}
                type='email'
                autocomplete="email"
                required
                label="Email"
                placeholder="vasya@gmail.com"
                errorMessage={emailError}
            />
            <Input
                id="password"
                value={password}
                setValue={setPassword}
                onChange={() => setPasswordError("")}
                onBlur={handlePassword}
                type="password"
                autocomplete="new-password"
                label="Пароль"
                required
                placeholder="•••••••"
                errorMessage={passwordError}
            />
            <Input
                id="retypePassword"
                value={retypedPassword}
                setValue={setRetypedPassword}
                onChange={() => setRetypePwdError("")}
                onBlur={handleRetypePassword}
                type="password"
                autocomplete="new-password"
                label="Повторите пароль"
                required placeholder="•••••••"
                errorMessage={retypePwdError}
            />
            {error ? <span className="form-error-message">{error}</span> : null}
            <span style={{ margin: "0 0 -20px 0" }}>Уже есть учетная запись? <Link to="/login">Войти</Link></span>
            <SubmitButton type="main" submit disabled={isSubmitDisabled} isLoading={isLoading}>Отправить</SubmitButton>
        </form>
    );
};

export default SignupForm;