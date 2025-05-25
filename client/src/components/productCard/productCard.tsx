import { useState } from "react";
import Product from "../../models/product";
import styles from "./productCard.module.css"

type Props = {
    product: Product;
    onClose: () => void;
}

const ProductCard = ({ product, onClose }: Props) => {

    const [quant, setQuant] = useState(1);
    const [selectedSize, setSelectedSize] = useState(0);
    const changeQuant = (dif: number) => {
        if (quant + dif < 1) {
            return;
        }
        setQuant(quant => quant + dif)
    }

    return (
        <div className={styles["transparent-container"]}>
            <div className={styles["container"]}>
                <div className={styles["closeBtn"]} onClick={onClose}>X</div>
                <div className={styles["img"]} style={{ backgroundImage: `url(${product.img})` }}></div>
                <div className={styles["shop-form"]}>
                    <div className={styles["name"]}>{product.name}</div>
                    <div className={styles["rating"]}>00000</div>
                    <div className={styles["price"]}>{product.price}</div>
                    <div className={styles["description"]}>{product.description}</div>
                    <div className={styles["color"]}>color: {product.color}</div>
                    <div style={{ color: "black" }}>size:</div>
                    <div className={styles["sizes"]}>
                        {product.in_stock.map((stock, index) => (
                            <div key={index} className={`${styles["size-box"]} ${(selectedSize === index) ? styles["selected"] : ""}`}
                                onClick={() => setSelectedSize(index)}>
                                {stock.size}
                            </div>
                        ))}
                    </div>
                    <div className={styles["quantity-box"]}>
                        <div className={styles["minus"]} onClick={() => { changeQuant(-1) }} >-</div>
                        <div className={styles["quantity"]}>{quant}</div>
                        <div className={styles["plus"]} onClick={() => { changeQuant(1) }}>+</div>
                    </div>
                    <div className={styles["addToCartBtn"]}>Add to Cart</div>
                    <div className={styles["categories"]}>
                        {product.categories.map((cat, index) => (
                            <div key={index} className={styles["category"]}>{cat}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;