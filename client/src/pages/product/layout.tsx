import ProductItem from "../../components/product/productItem";
import Product from "../../models/product";


//     id: IdType;
//     name: string;
//     description: string;
//     price: number;
//     availability: number;
//     img: string;
//     categories: string[];
//     createdAt: Date;
//     updatedAt: Date;

const prd: Product = {
    id: "1",
    name: "Nike Air Max 270",
    description: "Леки и удобни маратонки за ежедневна употреба.",
    price: 199.99,
    availability: 12,
    size: 42,
    img: "../../../public/placeholder.svg",
    categories: ["мъжки", "обувки", "спортни"],
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now())
}

const ProductsLayout = () => {
    return (
        <div className="productPage">
            <ProductItem product={ prd} />
        </div>
    );
}

export default ProductsLayout