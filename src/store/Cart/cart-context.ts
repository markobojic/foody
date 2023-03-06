import React from "react";
import { Meal } from "../../components/Meals/Meal";

export type CartContextObj = {
    items: Meal[];
    totalAmount: number;
    addItem: (item: Meal) => void;
    removeItem: (id: string) => void;
};

const CartContext = React.createContext<CartContextObj>({
    items: [],
    totalAmount: 0,
    addItem: (item: Meal) => {},
    removeItem: (id: string) => {},
});

export default CartContext;
