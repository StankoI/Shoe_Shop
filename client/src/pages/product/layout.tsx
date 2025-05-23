import ProductItem from "../../components/product/productItem";
import Product from "../../models/product";


//     id: IdType;
//     name: string;
//     description: string;
//     price: number;
//     img: string;
//     categories: string[];
//     color: string;
//     in_stock: InStock[];
//     createdAt: Date;


const prd: Product = {
    id: "1",
    name: "Nike Air Max 270",
    description: "Леки и удобни маратонки за ежедневна употреба.",
    price: 199.99,
    img: "../../../public/placeholder.svg",
    categories: ["мъжки", "обувки", "спортни"],
    color: "black",
    in_stock:[{size:43, quantity: 4},{size:44, quantity: 5},{size:45, quantity: 6}],
    createdAt: new Date(Date.now()),
}

const ProductsLayout = () => {
    return (
        <div className="productPage" style={{marginTop:"4em"}}>
            <ProductItem product={ prd} />
        </div>
    );
}

export default ProductsLayout