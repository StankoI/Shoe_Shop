import { useEffect, useState } from "react";
import ProductList from "../../compoments/productList.tsx/productList";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import Product from "../../models/product";
import AddProduct from "../../compoments/addProducts/addProducts";

const ProductLayout = () => {

    const axios = useAxiosPrivate();

    const [products, setProducts] = useState<Product[]>([])

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

    const removeItem = async (id:string) => {

        try{
            axios.delete(`http://localhost:8080/admin/products/${id}`)
            setProducts(prev => prev.filter(it => it.id !== id))
        }
        catch(err){
            console.log(err);
        }
    }
    
    return(
        <div style={{marginTop:"3.5rem", background:"white"}}>
            <AddProduct/>
            <ProductList products={products} onRemove={removeItem}/>
        </div>
    )
}

export default ProductLayout;