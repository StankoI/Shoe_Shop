import Product from "../../models/product"
import ProductItem from "../productItem/productItem";
import styles from "./productList.module.css"

type Props = {
    products: Product[];
    onRemove: (id:string) => void;
}

const ProductList = ({ products, onRemove }: Props) => {

    return (
        <div className={styles["container"]}>
            {products.map((product) => {
                return <ProductItem key={product.id} product={product} onRemove={onRemove}/>;
            })}
        </div>
    )
}

export default ProductList;