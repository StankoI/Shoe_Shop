import Product from "../../models/product"
import ProductItem from "../product/productItem";
import styles from "./productList.module.css"

type Props = {
    products: Product[];
}

const ProductList = ({ products }: Props) => {

    return (
        <div className={styles["container"]}>
            {products.map((product) => {
                console.log(product.id);
                return <ProductItem key={product.id} product={product} />;
            })}
        </div>
    )
}

export default ProductList;