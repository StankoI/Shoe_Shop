
import styles from "./categoriesList.module.css"

import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useEffect, useState } from "react";

interface Category {
    _id: string;
    category: string;
}

const CategoriesList = () => {

    const axios = useAxiosPrivate();
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {

        const fetchColors = async () => {
            try {
                const temp = await axios.get("http://localhost:8080/client/category");
                setCategories(temp.data);
            }
            catch (err) {
                console.log(err);
            }
        }
        
        fetchColors();
    },[])

    const handleRemove = async (id: string) => {
        try {
            await axios.delete(`http://localhost:8080/admin/category/${id}`)
            setCategories(prev => prev.filter(cat => cat._id !== id))
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div className={styles["container"]}>
            Aveliable Categories:
            {categories.map((category) => {
                return (
                    <div key={category._id} className={styles["category"]}>{category.category} 
                        <div onClick={() => handleRemove(category._id)} className={styles["btn"]}>remove</div>
                    </div>
                )
            })}
        </div>
    )
}

export default CategoriesList;