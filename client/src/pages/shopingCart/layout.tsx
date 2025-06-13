import OrderSummary from "../../components/orderSummary/orderSummary";
import ShopingCart from "../../components/shopingCart/shopingCart";
import styles from "./shopingCart.module.css"

const ShopingCartLayout = () => {
    return(
        <div className={styles["container"]} >
            <ShopingCart/>
            <OrderSummary/>
        </div>
    )
}

export default ShopingCartLayout;