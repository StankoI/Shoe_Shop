import { useEffect, useState } from "react";
import axios from "axios";
import { IdType } from "../../types/idType";
import { useShoppingCart } from "../../contexts/shopingCartContext";
import styles from "./cartItem.module.css"; 

type Props = {
    id: IdType;
    quantity: number;
    size: number;
};

type CartItemEl = {
    id: IdType;
    name: string;
    price: number;
    img: string;
    color: string;
};

const CartItemTSX = ({ id, quantity, size }: Props) => {
    const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } = useShoppingCart();
    const [item, setItem] = useState<CartItemEl | null>(null);

    useEffect(() => {
        axios.get(`http://localhost:8080/client/products/${id}`)
            .then((res) => {
                setItem(res.data);
            })
            .catch(err => {
                console.error("Error fetching product:", err);
            });
    }, []);

    if (!item) return <div style={{color:"black"}}>Loading...</div>;

    const subtotal = item.price * quantity;

    return (
        <div className={styles["cartItem"]}>
            <img src={item.img} alt={item.name} className={styles["itemImage"]} />

            <div className={styles["itemDetails"]}>
                <div className={styles["itemName"]}>{item.name}</div>
                <div className={styles["itemSpecs"]}>
                    Color: {item.color} &bull; Size: {size}
                </div>
                <div className={styles["itemControls"]}>
                    <div className={styles["quantityControl"]}>
                        <button onClick={() => decreaseCartQuantity(id, size)} className={styles["quantityButton"]}>-</button>
                        <div className={styles["quantityValue"]}>{quantity}</div>
                        <button onClick={() => increaseCartQuantity(id, 1, size)} className={styles["quantityButton"]}>+</button>
                    </div>
                    <button className={styles["actionLink"]} onClick={() => removeFromCart(id, size)}>
                        Remove
                    </button>
                    <button className={styles["actionLink"]}>
                        Save
                    </button>
                </div>
            </div>
            <div className={styles["priceDetails"]}>
                <div className={styles["itemPrice"]}>${item.price.toFixed(2)}</div>
                {quantity > 1 && (
                    <div className={styles["itemSubtotal"]}>${subtotal.toFixed(2)}</div>
                )}
            </div>
        </div>
    );
};

export default CartItemTSX;