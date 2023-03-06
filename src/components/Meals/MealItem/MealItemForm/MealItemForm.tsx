import React, { useState } from "react";
import Button from "../../../UI/Button/Button";
import Input from "../../../UI/Input/Input";
import "./MealItemForm.module.scss";

const MealItemForm: React.FC<{
    id: string;
    onAddToCart: (enteredAmount: number) => void;
}> = ({ id, onAddToCart }) => {
    const [amount, setAmount] = useState("1");
    const [amountIsValid, setAmountIsValid] = useState(true);
    const inputId = `amount_${id}`;

    const changeAmountHandler = (event: React.FormEvent<HTMLInputElement>) => {
        setAmount(event.currentTarget.value);
    };

    const addMealHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredAmount = +amount;
        if (
            amount.trim().length === 0 ||
            enteredAmount < 1 ||
            enteredAmount > 5
        ) {
            setAmountIsValid(false);
            return;
        }

        onAddToCart(enteredAmount);
        setAmountIsValid(true);
    };

    return (
        <form onSubmit={addMealHandler}>
            <Input
                label="Amount"
                id={inputId}
                type="number"
                value={amount}
                onChange={changeAmountHandler}
                min="1"
                max="5"
                step="1"
            />
            {!amountIsValid && <p>Enter amount between (1-5)</p>}
            <Button type="submit" className="btn__secondary">
                Add
            </Button>
        </form>
    );
};

export default MealItemForm;
