import React, { useEffect, useState } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import styles from "./addProducts.module.css"

interface Category {
    _id: string;
    category: string;
}

interface Color {
    _id: string;
    color: string;
}

const AddProduct = () => {
    const axios = useAxiosPrivate();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState<number>(0);
    const [img, setImg] = useState("");
    const [categories, setCategories] = useState<Category[]>([]);
    const [colors, setColors] = useState<Color[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedColor, setSelectedColor] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const colorRes = await axios.get("http://localhost:8080/client/color");
                const categoryRes = await axios.get("http://localhost:8080/client/category");
                setColors(colorRes.data);
                setCategories(categoryRes.data);
            } catch (err) {
                console.error("Error fetching color/category", err);
            }
        };
        fetchData();
    }, []);

    const handleCategoryChange = (categoryId: string) => {
        setSelectedCategories(prev =>
            prev.includes(categoryId)
                ? prev.filter(id => id !== categoryId)
                : [...prev, categoryId]
        );
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const product = {
            name,
            description,
            price,
            img,
            categories: selectedCategories,
            color: selectedColor,
        };

        try {
            await axios.post("http://localhost:8080/admin/products", product);
            alert("Product added successfully!");
        } catch (err) {
            console.error("Failed to add product:", err);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles["form-container"]}>
            <div className={styles["form-group"]}>
                <label className={styles["label"]}>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className={styles["input"]}
                    required
                />
            </div>

            <div className={styles["form-group"]}>
                <label className={styles["label"]}>Description:</label>
                <textarea
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    className={styles["textarea"]}
                    required
                />
            </div>

            <div className={styles["form-group"]}>
                <label className={styles["label"]}>Price:</label>
                <input
                    type="number"
                    value={price}
                    onChange={e => setPrice(parseFloat(e.target.value))}
                    className={styles["input"]}
                    required
                />
            </div>

            <div className={styles["form-group"]}>
                <label className={styles["label"]}>Image URL:</label>
                <input
                    type="text"
                    value={img}
                    onChange={e => setImg(e.target.value)}
                    className={styles["input"]}
                    required
                />
            </div>

            <div className={styles["form-group"]}>
                <label className={styles["label"]}>Categories:</label>
                <div className={styles["checkbox-group"]}>
                    {categories.map(cat => (
                        <label key={cat._id} className={styles["checkbox-label"]}>
                            <input
                                type="checkbox"
                                value={cat._id}
                                checked={selectedCategories.includes(cat._id)}
                                onChange={() => handleCategoryChange(cat._id)}
                                className={styles["checkbox"]}
                            />
                            {cat.category}
                        </label>
                    ))}
                </div>
            </div>

            <div className={styles["form-group"]}>
                <label className={styles["label"]}>Color:</label>
                <select
                    value={selectedColor}
                    onChange={e => setSelectedColor(e.target.value)}
                    className={styles["select"]}
                    required
                >
                    <option value="">Select a color</option>
                    {colors.map(color => (
                        <option key={color._id} value={color._id}>
                            {color.color}
                        </option>
                    ))}
                </select>
            </div>

            <button type="submit" className={styles["submit-button"]}>
                Add Product
            </button>
        </form>
    );
};

export default AddProduct;
