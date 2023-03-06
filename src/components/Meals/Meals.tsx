import React from "react";
import Card from "../UI/Card/Card";
import { Meal } from "./Meal";
import MealItem from "./MealItem/MealItem";
import styles from "./Meals.module.scss";

const DUMMY_MEALS: Meal[] = [
    {
        id: "m1",
        name: "Sushi",
        description: "Finest fish and veggies",
        price: 22.99,
    },
    {
        id: "m2",
        name: "Schnitzel",
        description: "A german specialty!",
        price: 16.5,
    },
    {
        id: "m3",
        name: "Barbecue Burger",
        description: "American, raw, meaty",
        price: 12.99,
    },
    {
        id: "m4",
        name: "Green Bowl",
        description: "Healthy...and green...",
        price: 18.99,
    },
];

const Meals: React.FC = () => {
    const mealList = DUMMY_MEALS.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
    ));

    return (
        <div className={styles.meals}>
            <h1>Available meals</h1>
            <Card>
                <ul>{mealList}</ul>
            </Card>
        </div>
    );
};

export default Meals;
