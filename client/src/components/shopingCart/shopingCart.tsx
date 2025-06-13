import { IdType } from "../../types/idType";
import styles from "./shopingCart.module.css";
import CartItemTSX from "../cartItem/cartItem";
import { useShoppingCart } from "../../contexts/shopingCartContext";

export interface CartItem {
    id: IdType;
    quantity: number;
    size: number;
}

const ShopingCart = () => {
    const { cartItems , cleanCart } = useShoppingCart(); 

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div className={styles["container"]}>
            <div className={styles["cartHeader"]}>
                <div className={styles["cartTitle"]}>Cart ({totalItems} items)</div>
                <button onClick={ cleanCart} className={styles["clearCartButton"]}>
                    Clear Cart
                </button>
            </div>

            <div className={styles["cartItemsList"]}>
                {cartItems.map(el => (
                    <CartItemTSX key={`${el.id}-${el.size}`} id={el.id} quantity={el.quantity} size={el.size} />
                ))}
            </div>
        </div>
    );
};

export default ShopingCart;