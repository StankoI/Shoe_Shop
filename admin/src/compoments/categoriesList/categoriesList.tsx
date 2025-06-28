import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useEffect, useState } from "react"
import { X, Tag } from "lucide-react"
import styles from "./categoriesList.module.css"

export interface Category {
    _id: string
    category: string
}

const CategoriesList = () => {

    const [categories, setCategories] = useState<Category[]>([])
    const axios = useAxiosPrivate();

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
    }, [])

    const handleRemove = async (id: string) => {
        try {
            setCategories((prev) => prev.filter((cat) => cat._id !== id))
            await axios.delete(`http://localhost:8080/admin/category/${id}`)
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.titleContainer}>
                    <Tag className={styles.icon} />
                    <h2 className={styles.title}>Available Categories</h2>
                </div>
                <p className={styles.subtitle}>Manage your product categories. Click the x button to remove a category.</p>
            </div>

            {categories.length === 0 ? (
                <div className={styles.emptyState}>
                    <Tag className={styles.emptyIcon} />
                    <p className={styles.emptyTitle}>No categories available</p>
                    <p className={styles.emptySubtitle}>All categories have been removed.</p>
                </div>
            ) : (
                <div className={styles.grid}>
                    {categories.map((category) => (
                        <div key={category._id} className={styles.category}>
                            <div className={styles.categoryContent}>
                                <span className={styles.categoryName}>{category.category}</span>
                                <button
                                    onClick={() => handleRemove(category._id)}
                                    className={styles.removeBtn}
                                    aria-label={`Remove ${category.category} category`}
                                >
                                    <X className={styles.removeIcon} />
                                </button>
                            </div>
                            <div className={styles.decorativeBar}></div>
                        </div>
                    ))}
                </div>
            )}

            <div className={styles.footer}>
                <p className={styles.footerText}>
                    Total Categories: <span className={styles.footerCount}>{categories.length}</span>
                </p>
            </div>
        </div>
    )
}

export default CategoriesList