import React, { useContext } from "react";
import CartContext from "../../../store/Cart/cart-context";
import Button from "../../UI/Button/Button";
import CartIcon from "../../UI/CartIcon/CartIcon";

import classes from "./Header.module.scss";

const Header: React.FC<{ onShowCart: () => void }> = ({ onShowCart }) => {
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce(
        (acc, item) => (acc += item.amount!),
        0
    );

    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>Foody</h1>
                <Button className="btn__secondary" onClick={onShowCart}>
                    <CartIcon /> Your Cart <span>{numberOfCartItems}</span>
                </Button>
            </header>
        </React.Fragment>
    );
};

export default Header;
