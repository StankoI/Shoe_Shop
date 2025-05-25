import { useEffect, useState } from "react";
import ProductList from "../../components/productList/productList";
import Product from "../../models/product";
import axios from 'axios'
import ProductFilter from "../../components/productFilter/productFilter";
import "./product.css"

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
    const [filter, setFilter] = useState<string[]>([]);
    const [categoriesFilter, SetCategoriesFilter] = useState<string[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        setFilteredProducts(filterProductsByColor(products, filter));
    }, [filter, products])

    useEffect(() => {
        setFilteredProducts(filterProductsByCategory(products,categoriesFilter));
    }, [categoriesFilter, products])

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

    function filterProductsByColor(products: Product[], filters: string[]) {
        return products.filter(
            prod => filters.length === 0 || filters.includes(prod.color)
        )
    }

    function filterProductsByCategory(products: Product[], filters: string[]) {
        return products.filter(
            prod => filters.length === 0 || 
            prod.categories.some(el => filters.includes(el))
        )
    }


    return (
        <div className="productPage" style={{ marginTop: "4em" }}>
            <div className="main">
                <ProductFilter onFilterChangeColors={setFilter} onFilterChangeCategories={SetCategoriesFilter}/>
                <ProductList products={filteredProducts} />
            </div>
        </div>
    );
}

export default ProductsLayout