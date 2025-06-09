import OrderSummary from "../../components/orderSummary/orderSummary";
import ShopingCart from "../../components/shopingCart/shopingCart";

const ShopingCartLayout = () => {
    return(
        <div style={{ marginTop:"4em", display:"flex", padding:"20px", gap:"10px" }}>
            <ShopingCart/>
            <OrderSummary/>
        </div>
    )
}

export default ShopingCartLayout;