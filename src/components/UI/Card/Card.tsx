import styles from "./Card.module.scss";

interface Props {
    children: React.ReactNode;
    className?: string;
}

const Card: React.FC<Props> = ({ children, className }) => {
    return (
        <div className={`${styles.card} ${className || ""}`}>{children}</div>
    );
};

export default Card;
