import { useState } from "react";
import Product from "../../models/product";
import styles from "./productCard.module.css"

type Props = {
    product: Product;
    onClose: () => void;
}

const ProductCard = ({ product, onClose }: Props) => {

    const [quant, setQuant] = useState(1);
    const [selectedColor, setSelectedColor] = useState<string | null>(
        product.colors && product.colors.length > 0 ? product.colors[0] : null
    );
    const [selectedSize, setSelectedSize] = useState(0);

    const handleColorSelect = (color: string) => {
        setSelectedColor(color);
    };

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
                    {product.colors && product.colors.length > 0 && (
                        <div className={styles["colors-section"]}>
                            <span className={styles["color-label"]}>
                                Color: {selectedColor || 'N/A'}
                            </span>
                            <div className={styles["color-options"]}>
                                {product.colors.map((colorValue, index) => (
                                    <div
                                        key={index}
                                        className={`${styles["color-swatch"]} ${selectedColor === colorValue ? styles["selected"] : ''}`}
                                        style={{ backgroundColor: colorValue }}
                                        onClick={() => handleColorSelect(colorValue)}
                                        aria-label={`Select color ${colorValue}`}
                                        title={colorValue}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                    <div style={{ color: "black" }}>size:</div>
                    <div className={styles["sizes"]}>
                        {product.sizes.map((size, index) => (
                            <div key={index} className={`${styles["size-box"]} ${(selectedSize === index) ? styles["selected"] : ""}`}
                                onClick={() => setSelectedSize(index)}>
                                {size}
                            </div>
                        ))}
                    </div>
                    <div className={styles["quantity-box"]}>
                        <div className={styles["minus"]} onClick={() => { changeQuant(-1) }} >-</div>
                        <div className={styles["quantity"]}>{quant}</div>
                        <div className={styles["plus"]} onClick={() => { changeQuant(1) }}>+</div>
                    </div>
                    <div className={styles["addToCartBtn"]}>Add to Cart</div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;