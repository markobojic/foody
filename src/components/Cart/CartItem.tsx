import { Meal } from "../Meals/Meal";
import classes from "./CartItem.module.scss";

interface Props {
    meal: Meal;
    onRemove: () => void;
    onAdd: () => void;
}

const CartItem: React.FC<Props> = ({ meal, onRemove, onAdd }) => {
    return (
        <li className={classes["cart-item"]}>
            <div>
                <h2>{meal.name}</h2>
                <div className={classes.summary}>
                    <span className={classes.price}>
                        {meal.price.toFixed(2)}
                    </span>
                    <span className={classes.amount}>x {meal.amount}</span>
                </div>
            </div>
            <div className={classes.actions}>
                <button onClick={onRemove}>−</button>
                <button onClick={onAdd}>+</button>
            </div>
        </li>
    );
};

export default CartItem;
