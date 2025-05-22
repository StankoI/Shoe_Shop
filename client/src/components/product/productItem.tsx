import Product from "../../models/product";
import styles from "./productItem.module.css"

type Props = {
    product: Product;

}

const ProductItem = ({ product }: Props) => {

    return (
        <div className={styles["container"]}>
            <div className={styles["image"]} style={{ backgroundImage: `url(${product.img})` }}></div>
            <div className={styles["information"]}>
                <div className={styles["name"]}>{product.name}</div>
                <div className={styles["rating"]}>00000</div>
                <div className={styles["price"]}>{product.price}</div>
            </div>
        </div>
    );

}

export default ProductItem;