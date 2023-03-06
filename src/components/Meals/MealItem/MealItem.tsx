import { useContext } from "react";
import CartContext from "../../../store/Cart/cart-context";
import { Meal } from "../Meal";
import styles from "./MealItem.module.scss";
import MealItemForm from "./MealItemForm/MealItemForm";

const MealItem: React.FC<{ meal: Meal }> = ({ meal }) => {
    const cartCtx = useContext(CartContext);

    const addToCartHandler = (amount: number) => {
        const mealToAdd = Object.assign(meal, { amount });
        cartCtx.addItem(mealToAdd);
    };

    return (
        <li className={styles["meal-item"]}>
            <div>
                <h2>{meal.name}</h2>
                <p className={styles.description}>{meal.description}</p>
                <h3 className={styles.price}>{`$${meal.price.toFixed(2)}`}</h3>
            </div>
            <div>
                <MealItemForm id={meal.id} onAddToCart={addToCartHandler} />
            </div>
        </li>
    );
};

export default MealItem;
