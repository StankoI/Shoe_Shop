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

const ProductsLayout = () => {

    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        
        axios.get('http://localhost:8080/client/products')
            .then((res) => {
                const productsWithId = res.data.map((prod: any) => ({
                    ...prod,
                    id: prod._id, 
                    color: prod.color.color 
                }));
                setProducts(productsWithId);
            })
            .catch(err =>
                console.error(err)
            )

    }, [])

    return (
        <div className="productPage" style={{ marginTop: "4em" }}>
            <ProductList products={products} />
        </div>
    );
}

export default ProductsLayout