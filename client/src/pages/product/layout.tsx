import { useEffect, useMemo, useState } from "react";
import ProductList from "../../components/productList/productList";
import Product from "../../models/product";
import axios from 'axios'
import ProductFilter from "../../components/productFilter/productFilter";
import "./product.css"
import Searchbar, { sortTypes } from "../../components/searchbar/searhcbar";
import useDevice from "../../hooks/useDevice";

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
    const [sortType, setSortType] = useState<sortTypes>(sortTypes.none);

    const filteredProds = useMemo(
        () => {
            const temp = filterProductsByColor(products, filter)
            const temp2 = filterProductsByCategory(temp, categoriesFilter);
            const temp3 = filterProductsByValue(temp2, valueFilter);
            const temp4 = searchProducts(temp3, searchInfix);
            return sortBy(temp4, sortType);
        }, [products, filter, categoriesFilter, valueFilter, searchInfix, sortType]
    )

    const [visibleFilter, setVisibleFilter] = useState(false);

    const device = useDevice();

    useEffect(() => {

        axios.get('http://localhost:8080/client/products')
            .then((res) => {
                const productsWithId = res.data.map((prod: any) => ({
                    ...prod,
                    id: prod._id,
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

    function filterProductsByValue(products: Product[], filter: number) {
        return products.filter(prod => prod.price >= filter);
    }

    function searchProducts(products: Product[], infix: string) {
        const searchInfix = infix.toLowerCase().trim().replace(/\s+/g, ' ');
        return products.filter(prod =>
            prod.name.toLowerCase().includes(searchInfix)
        );
    }

    function sortBy(products: Product[], sortWay: sortTypes) {
        if (sortWay === 0) {
            return products;
        }
        else if (sortWay === 1) {
            return products.sort((a, b) => b.price - a.price);
        }
        else {
            return products.sort((a, b) => a.price - b.price);
        }
    }

    return (
        <div className="productPage" style={{ marginTop: "4em" }}>
            <div className="main">
                <Searchbar onChangeSearch={setSerchInfix} onChangeSort={setSortType} onSetVisible={setVisibleFilter} />
                <div className="filterAndProducts">

                    {(device === "pc" || visibleFilter === true) &&
                        <ProductFilter
                            onFilterChangeColors={setFilter}
                            onFilterChangeCategories={SetCategoriesFilter}
                            onFilterChangeValue={SetValueFilter} 
                            onCloseFilter={setVisibleFilter}
                        />
                    }
                    <ProductList products={filteredProds} />
                </div>
            </div>
        </div>
    );
}

export default ProductsLayout