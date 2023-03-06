import React from "react";

import styles from "./Button.module.scss";

interface Props {
    children: React.ReactNode;
    className: string;
    type?: "button" | "submit" | "reset";
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<Props> = ({ children, type, onClick, className }) => {
    return (
        <button
            type={type || "button"}
            className={`${styles.btn} ${styles[className]}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
