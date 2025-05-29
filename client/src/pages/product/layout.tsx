import { useEffect, useMemo, useState } from "react";
import ProductList from "../../components/productList/productList";
import Product from "../../models/product";
import axios from 'axios'
import ProductFilter from "../../components/productFilter/productFilter";
import "./product.css"
import Searchbar from "../../components/searchbar/searhcbar";

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
    const [searchInfix, setSerchInfix] = useState('');

    const filteredProds = useMemo(
        () => {
            const temp = filterProductsByColor(products, filter)
            const temp2 = filterProductsByCategory(temp, categoriesFilter);
            const temp3 = filterProductsByValue(temp2, valueFilter);
            return searchProducts(temp3, searchInfix);
        }, [products, filter, categoriesFilter, valueFilter, searchInfix]
    )

    useEffect(() => {

        axios.get('http://localhost:8080/client/products')
            .then((res) => {
                const productsWithId = res.data.map((prod: any) => ({
                    ...prod,
                    id: prod._id,
                    // color: prod.color.color,
                    // categories: prod.categories.map((cat: any) => cat.category),
                }));
                setProducts(productsWithId);
                // console.log(res.data)
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

    function filterProductsByValue(products: Product[], filter: number) {
        return products.filter(prod => prod.price >= filter);
    }

    function searchProducts(products: Product[], infix: string) {
    const searchInfix = infix.toLowerCase().trim().replace(/\s+/g, ' ');
    return products.filter(prod =>
        prod.name.toLowerCase().includes(searchInfix)
    );
}

    return (
        <div className="productPage" style={{ marginTop: "4em" }}>
            <div className="main">
                <Searchbar onChangeSearch={setSerchInfix} />
                <div className="filterAndProducts">
                    <ProductFilter
                        onFilterChangeColors={setFilter}
                        onFilterChangeCategories={SetCategoriesFilter}
                        onFilterChangeValue={SetValueFilter} />
                    <ProductList products={filteredProds} />
                </div>
            </div>
        </div>
    );
}

export default ProductsLayout