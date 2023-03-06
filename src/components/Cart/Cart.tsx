import { useContext } from "react";
import CartContext from "../../store/Cart/cart-context";
import { Meal } from "../Meals/Meal";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";
import styles from "./Cart.module.scss";
import CartItem from "./CartItem";

const Cart: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const cartCtx = useContext(CartContext);

    const removeItemHandler = (id: string) => {
        cartCtx.removeItem(id);
    };

    const addItemHandler = (meal: Meal) => {
        cartCtx.addItem(meal);
    };

    const cartItems = (
        <ul className={styles["cart-items"]}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    meal={item}
                    onRemove={removeItemHandler.bind(null, item.id)}
                    onAdd={addItemHandler.bind(null, item)}
                />
            ))}
        </ul>
    );

    return (
        <Modal onClose={onClose}>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>${cartCtx.totalAmount.toFixed()}</span>
            </div>
            <div className={styles.actions}>
                <Button className="btn__ghost" onClick={onClose}>
                    Close
                </Button>
                {cartCtx.items.length > 0 && (
                    <Button className="btn__primary">Order</Button>
                )}
            </div>
        </Modal>
    );
};

export default Cart;
