import React, { useState } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import styles from "./addInStock.module.css"

interface AddInStockProps {
    productId: string;
}

const AddInStock: React.FC<AddInStockProps> = ({ productId }) => {
    const axiosPrivate = useAxiosPrivate();
    const [size, setSize] = useState<number>(0);
    const [quantity, setQuantity] = useState<number>(0);

    const handleAdd = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await axiosPrivate.post(`http://localhost:8080/admin/products/${productId}/in_stock`, {
                size,
                quantity
            });
            alert("InStock added.");
            setSize(0);
            setQuantity(0);
        } catch (err) {
            console.error("Failed to add InStock:", err);
        }
    };

    return (
        <form onSubmit={handleAdd} className={styles["form-container"]}>
            <h2 className={styles["form-title"]}>Add In Stock</h2>

            <div className={styles["form-group"]}>
                <label className={styles["label"]}>Size:</label>
                <input type="number" value={size} onChange={e => setSize(+e.target.value)} className={styles["input"]} required />
            </div>

            <div className={styles["form-group"]}>
                <label className={styles["label"]}>Quantity:</label>
                <input type="number" value={quantity} onChange={e => setQuantity(+e.target.value)} className={styles["input"]} required />
            </div>

            <button type="submit" className={styles["submit-button"]}>Add</button>
        </form>
    );
};

export default AddInStock;
