import React, { ButtonHTMLAttributes } from 'react';
import { Link } from "react-router-dom";
import './Button.scss'
import Loading from "../../../assets/icons/loading-icon.svg";

interface IProps {
    className?: string;
    children?: React.ReactNode;
    readonly type?: "default" | "main" | "text";
    readonly path?: string;
    onClick?: () => void;
    disabled?: boolean;
    submit?: boolean;
    isLoading?: boolean;
}

const Button = (props: IProps) => {
    const { className, children, type = "default", onClick, path, submit = false, disabled = false, isLoading = false } = props;

    if (path) {
        return (
            <Link className={`button ${type} ${className}`} to={path}>{children}</Link>
        )
    }

    return (
        <button
            type={submit ? "submit" : "button"}
            className={`button ${type} ${className}`}
            onClick={onClick}
            disabled={disabled || isLoading}
        >
            {isLoading && <Loading className='loading' />}{children}
        </button>
    )
};

export default Button;