import { useEffect, useMemo, useState } from "react";
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
    const [valueFilter, SetValueFilter] = useState(0);
    const [products, setProducts] = useState<Product[]>([]);
    // const [filteredProducts, setFilteredProducts] = useState(products);

    const filteredProds = useMemo(
        () => {
            const temp = filterProductsByColor(products, filter)
            const temp2 = filterProductsByCategory(temp, categoriesFilter);
            return filterProductsByValue(temp2, valueFilter);
        },[products, filter, categoriesFilter, valueFilter])

    // useEffect(() => {
    //     setFilteredProducts(filterProductsByColor(products, filter));
    // }, [filter, products])

    // useEffect(() => {
    //     setFilteredProducts(filterProductsByCategory(products, categoriesFilter));
    // }, [categoriesFilter, products])

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

    function filterProductsByValue(products: Product[], filter: number){
        return products.filter(prod => prod.price >= filter);
    }

    return (
        <div className="productPage" style={{ marginTop: "4em" }}>
            <div className="main">
                <ProductFilter 
                    onFilterChangeColors={setFilter} 
                    onFilterChangeCategories={SetCategoriesFilter} 
                    onFilterChangeValue={SetValueFilter}/>
                <ProductList products={filteredProds} />
            </div>
        </div>
    );
}

export default ProductsLayout