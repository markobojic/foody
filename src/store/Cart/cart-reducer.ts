import { Meal } from "../../components/Meals/Meal";

export interface State {
    items: Meal[];
    totalAmount: number;
}

export const initialState: State = {
    items: [],
    totalAmount: 0,
};

type Action =
    | { type: "ADD_MEAL"; payload: Meal }
    | { type: "REMOVE_MEAL"; payload: string };

export const cartReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "ADD_MEAL":
            const existingCartItemIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            );
            const existingCartItem = state.items[existingCartItemIndex];
            let updatedItems;

            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount! + action.payload.amount!,
                };
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            } else {
                updatedItems = state.items.concat(action.payload);
            }

            return {
                ...state,
                totalAmount:
                    state.totalAmount +
                    action.payload.amount! * action.payload.price,
                items: updatedItems,
            };
        case "REMOVE_MEAL":
            const removingCartItemIndex = state.items.findIndex(
                (item) => item.id === action.payload
            );
            const removingCartItem = state.items[removingCartItemIndex];
            const updatedTotalAmount =
                state.totalAmount - removingCartItem.price;

            if (removingCartItem.amount === 1) {
                return {
                    ...state,
                    totalAmount: updatedTotalAmount,
                    items: state.items.filter(
                        (item) => item.id !== action.payload
                    ),
                };
            } else {
                const updatedItem = {
                    ...removingCartItem,
                    amount: removingCartItem.amount! - 1,
                };
                const updatedItems = [...state.items];
                updatedItems[removingCartItemIndex] = updatedItem;
                return {
                    ...state,
                    totalAmount: updatedTotalAmount,
                    items: updatedItems,
                };
            }
        default:
            return state;
    }
};
