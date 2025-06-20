import React, { useEffect, useState } from "react";
import axios from "axios";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import styles from "./editProduct.module.css"
import { InStock } from "../../types/inStock";
import Product from "../../models/product";
import { Color } from "../colorList/colorList"
import { Category } from "../categoriesList/categoriesList"
import AddInStock from "../addInStock/addInStock";

type Props = {
    product: Product;
    onClose: () => void;
}

const EditProduct = ({ product, onClose }: Props) => {
    const axiosPrivate = useAxiosPrivate();

    const [name, setName] = useState(product.name);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price);
    const [img, setImg] = useState(product.img);
    const [categories, setCategories] = useState<Category[]>([]);
    const [colors, setColors] = useState<Color[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>(product.categories);
    const [selectedColor, setSelectedColor] = useState(product.color);
    const [inStock, setInStock] = useState<InStock[]>(product.in_stock);

    useEffect(() => {
        const fetchMeta = async () => {
            try {
                const catRes = await axios.get("http://localhost:8080/client/category");
                const colorRes = await axios.get("http://localhost:8080/client/color");
                setCategories(catRes.data);
                setColors(colorRes.data);
            } catch (err) {
                console.error("Failed to fetch categories or colors", err);
            }
        };
        fetchMeta();
    }, []);

    const handleCategoryChange = (categoryId: string) => {
        setSelectedCategories(prev =>
            prev.includes(categoryId) ? prev.filter(id => id !== categoryId) : [...prev, categoryId]
        );
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const categoryIds = selectedCategories.map(catName => {
            const match = categories.find(cat => cat.category === catName);
            return match ? match._id : null;
        }).filter(Boolean);

        const colorObj = colors.find(c => c.color === selectedColor);
        const colorId = colorObj ? colorObj._id : null;

        const updatedProduct = {
            name: name,
            description: description,
            price: price,
            img: img,
            categories: categoryIds,
            color: colorId,
        };

        onClose();

        try {
            await axiosPrivate.put(`http://localhost:8080/admin/products/${product.id}`, updatedProduct);
            alert("Product updated!");
        } catch (err) {
            console.error("Update failed:", err);
        }
    };

    return (
        <div className={styles["abs-container"]}>
            <form onSubmit={handleSubmit} className={styles["form-container"]}>
                <h2 className={styles["form-title"]}>Edit Product</h2>

                <div className={styles["form-group"]}>
                    <label className={styles["label"]}>Name:</label>
                    <input value={name} onChange={e => setName(e.target.value)} className={styles["input"]} required />
                </div>

                <div className={styles["form-group"]}>
                    <label className={styles["label"]}>Description:</label>
                    <textarea value={description} onChange={e => setDescription(e.target.value)} className={styles["textarea"]} required />
                </div>

                <div className={styles["form-group"]}>
                    <label className={styles["label"]}>Price:</label>
                    <input type="number" value={price} onChange={e => setPrice(+e.target.value)} className={styles["input"]} required />
                </div>

                <div className={styles["form-group"]}>
                    <label className={styles["label"]}>Image URL:</label>
                    <input value={img} onChange={e => setImg(e.target.value)} className={styles["input"]} required />
                </div>

                <div className={styles["form-group"]}>
                    <label className={styles["label"]}>Categories:</label>
                    <div className={styles["checkbox-group"]}>
                        {categories.map(cat => (
                            <label key={cat._id} className={styles["checkbox-label"]}>
                                <input
                                    type="checkbox"
                                    value={cat._id}
                                    checked={selectedCategories.includes(cat.category)}
                                    onChange={() => handleCategoryChange(cat.category)}
                                />
                                {cat.category}
                            </label>
                        ))}
                    </div>
                </div>

                <div className={styles["form-group"]}>
                    <label className={styles["label"]}>Color:</label>
                    <select value={selectedColor} onChange={e => setSelectedColor(e.target.value)} className={styles["select"]} required>
                        <option value="">Select a color</option>
                        {colors.map(color => (
                            <option key={color._id} value={color.color}>{color.color}</option>
                        ))}
                    </select>
                </div>

                <button type="submit" className={styles["submit-button"]}>Update Product</button>

                <div className={styles["instock-list"]}>
                    <h3>In Stock</h3>
                    <ul>
                        {inStock.map((entry, idx) => (
                            <li key={idx}>
                                Size: {entry.size}, Quantity: {entry.quantity}
                            </li>
                        ))}
                    </ul>
                </div>
            </form>
            <AddInStock productId={product.id} />
        </div>
    );
};

export default EditProduct;
