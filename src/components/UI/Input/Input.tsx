import { InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const Input: React.FC<Props> = ({ label, ...rest }) => {
    return (
        <div className={styles["form-control"]}>
            <label htmlFor={rest.id}>{label}</label>
            <input {...rest} />
        </div>
    );
};

export default Input;
