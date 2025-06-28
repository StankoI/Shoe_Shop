import { useState } from "react";
import Product from "../../models/product";
import styles from "./productItem.module.css"
import EditProduct from "../editProduct/editProduct";

type Props = {
    product: Product;
    onRemove: (id:string) => void;
}

const ProductItem = ({ product, onRemove }: Props) => {

    const [clicked, setClicked] = useState(false);

    return (
        <>
            {/* {clicked && <ProductCard key={product.id} product={product} onClose={() => setClicked(false)} />} */}
            <div className={styles["container"]} onClick={() => { }}>
                <div className={styles["new"]}>New</div>
                <div className={styles["eco"]}>Eco</div>
                <div className={styles["image"]} style={{ backgroundImage: `url(${product.img})` }}></div>
                <div className={styles["information"]}>
                    <div className={styles["name"]}>{product.name}</div>
                    {/* <div className={styles["rating"]}>00000</div> */}
                    <div className={styles["price"]}>${product.price}</div>
                </div>
                <div className={styles["remove-btn"]} onClick={() => onRemove(product.id)}>remove</div>
                <div className={styles["edit-btn"]} onClick={() => setClicked(prev => !prev)}>edit</div>
                {clicked && <EditProduct product={product} onClose={() => setClicked(prev => !prev)}/>}
            </div>
        </>
    );

}

export default ProductItem;