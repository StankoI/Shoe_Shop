import { useState } from "react";
import Product from "../../models/product";
import styles from "./productItem.module.css"
import ProductCard from "../productCard/productCard";

type Props = {
    product: Product;
}

const ProductItem = ({ product }: Props) => {

    const [clicked, setClicked] = useState(false);

    return (
        <>
            {clicked && <ProductCard product={product} onClose={() => setClicked(false)} />}
            <div className={styles["container"]} onClick={() => { setClicked(true) }}>
                <div className={styles["new"]}>New</div>
                <div className={styles["eco"]}>Eco</div>
                <div className={styles["image"]} style={{ backgroundImage: `url(${product.img})` }}></div>
                <div className={styles["information"]}>
                    <div className={styles["name"]}>{product.name}</div>
                    <div className={styles["rating"]}>00000</div>
                    <div className={styles["price"]}>{product.price}</div>
                </div>
            </div>
        </>
    );

}

export default ProductItem;