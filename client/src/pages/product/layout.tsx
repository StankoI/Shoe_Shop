import { useEffect, useState } from "react";
import ProductList from "../../components/productList/productList";
import Product from "../../models/product";
import axios from 'axios'

//     id: IdType;
//     name: string;
//     description: string;
//     price: number;
//     img: string;
//     categories: string[];
//     color: string;
//     in_stock: InStock[];
//     createdAt: Date;


const prds: Product[] = [{
    id: "1",
    name: "Nike Air Max 270",
    description: "Леки и удобни маратонки за ежедневна употреба.",
    price: 199.99,
    img: "../../../public/placeholder.svg",
    categories: ["мъжки", "обувки", "спортни"],
    color: "black",
    in_stock: [{ size: 43, quantity: 4 }, { size: 44, quantity: 5 }, { size: 45, quantity: 6 }],
    createdAt: new Date(Date.now()),
},
{
    id: "2",
    name: "Nike Air Max 270",
    description: "Леки и удобни маратонки за ежедневна употреба.",
    price: 199.99,
    img: "../../../public/placeholder.svg",
    categories: ["мъжки", "обувки", "спортни"],
    color: "black",
    in_stock: [{ size: 43, quantity: 4 }, { size: 44, quantity: 5 }, { size: 45, quantity: 6 }],
    createdAt: new Date(Date.now()),
},
{
    id: "3",
    name: "Nike Air Max 270",
    description: "Леки и удобни маратонки за ежедневна употреба.",
    price: 199.99,
    img: "../../../public/placeholder.svg",
    categories: ["мъжки", "обувки", "спортни"],
    color: "black",
    in_stock: [{ size: 43, quantity: 4 }, { size: 44, quantity: 5 }, { size: 45, quantity: 6 }],
    createdAt: new Date(Date.now()),
},
{
    id: "2",
    name: "Nike Air Max 270",
    description: "Леки и удобни маратонки за ежедневна употреба.",
    price: 199.99,
    img: "../../../public/placeholder.svg",
    categories: ["мъжки", "обувки", "спортни"],
    color: "black",
    in_stock: [{ size: 43, quantity: 4 }, { size: 44, quantity: 5 }, { size: 45, quantity: 6 }],
    createdAt: new Date(Date.now()),
},
{
    id: "3",
    name: "Nike Air Max 270",
    description: "Леки и удобни маратонки за ежедневна употреба.",
    price: 199.99,
    img: "../../../public/placeholder.svg",
    categories: ["мъжки", "обувки", "спортни"],
    color: "black",
    in_stock: [{ size: 43, quantity: 4 }, { size: 44, quantity: 5 }, { size: 45, quantity: 6 }],
    createdAt: new Date(Date.now()),
},
{
    id: "2",
    name: "Nike Air Max 270",
    description: "Леки и удобни маратонки за ежедневна употреба.",
    price: 199.99,
    img: "../../../public/placeholder.svg",
    categories: ["мъжки", "обувки", "спортни"],
    color: "black",
    in_stock: [{ size: 43, quantity: 4 }, { size: 44, quantity: 5 }, { size: 45, quantity: 6 }],
    createdAt: new Date(Date.now()),
},
{
    id: "3",
    name: "Nike Air Max 270",
    description: "Леки и удобни маратонки за ежедневна употреба.",
    price: 199.99,
    img: "../../../public/placeholder.svg",
    categories: ["мъжки", "обувки", "спортни"],
    color: "black",
    in_stock: [{ size: 43, quantity: 4 }, { size: 44, quantity: 5 }, { size: 45, quantity: 6 }],
    createdAt: new Date(Date.now()),
}
]

const ProductsLayout = () => {

    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        
        axios.get('http://localhost:8080/client/products')
        .then(res => setProducts(res.data))
        .catch(err => 
            console.error(err)
        )

    })

    return (
        <div className="productPage" style={{ marginTop: "4em" }}>
            <ProductList products={products} />
        </div>
    );
}

export default ProductsLayout