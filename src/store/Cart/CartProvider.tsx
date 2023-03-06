import { useReducer } from "react";
import { Meal } from "../../components/Meals/Meal";
import CartContext, { CartContextObj } from "./cart-context";
import { cartReducer, initialState } from "./cart-reducer";

const CartProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [cartState, dispachCartAction] = useReducer(
        cartReducer,
        initialState
    );

    const addItemHandler = (meal: Meal) => {
        dispachCartAction({ type: "ADD_MEAL", payload: meal });
    };

    const removeItemHandler = (id: string) => {
        dispachCartAction({ type: "REMOVE_MEAL", payload: id });
    };

    const cartContext: CartContextObj = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
