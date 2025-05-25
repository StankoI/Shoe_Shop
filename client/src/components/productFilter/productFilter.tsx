import { ChangeEvent, useEffect, useState } from "react";
import styles from "./productFilter.module.css"
import axios from "axios";
import { IdType } from "../../types/idType";


type Color = {
    _id: IdType;
    color: string;
}

type Category = {
    _id: IdType;
    category: string;
}

type Props = {
    onFilterChangeColors: (filters: string[]) => void;
    onFilterChangeCategories: (filtersCategories: string[]) => void;
}

const ProductFilter = ({ onFilterChangeColors, onFilterChangeCategories }: Props) => {
    const [checkedListColors, setCheckedListColors] = useState<string[]>([]);
    const [colors, setColors] = useState<Color[]>([]);

    const [checkedListCategories, setCheckedListCategories] = useState<string[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        axios.get('http://localhost:8080/client/color')
            .then((res) => {
                setColors(res.data);
            })

        axios.get('http://localhost:8080/client/category')
            .then((res) => {
                setCategories(res.data);
            })
    })

    useEffect(() => {
        onFilterChangeColors(checkedListColors);
    }, [checkedListColors])

    useEffect(() => {
        onFilterChangeCategories(checkedListCategories)
    }, [checkedListCategories])

    const changeFilter = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked) {
            setCheckedListColors([...checkedListColors, value]);
        }
        else {
            const filteredList = checkedListColors.filter((item) => item != value);
            setCheckedListColors(filteredList);
        }
    }

    const changeFilterCategories = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked) {
            setCheckedListCategories([...checkedListCategories, value]);
        }
        else {
            const filteredListCategories = checkedListCategories.filter((item) => item != value);
            setCheckedListCategories(filteredListCategories);
        }
    }


    return (
        <div className={styles["container"]}>
            <div className={styles["title"]}>Filters</div>
            <div className={styles["clean-all-btn"]}>clean all</div>
            <div className={styles["text"]}>Categories</div>
            <div className={styles["categories-checkbox"]}>
                {categories.map((category) => {
                    return (
                        <div key={category._id} className={styles["check-box"]}>
                            <input
                                key={category._id}
                                type="checkbox"
                                name="colors"
                                value={category.category}
                                onChange={changeFilterCategories}
                            ></input>
                            <label htmlFor={category._id}>{category.category}</label>
                        </div>
                    )
                })
                }
            </div>
            <div className={styles["text"]}>Colors</div>
            <div className={styles["colors-checkbox"]}>
                {colors.map((color) => {
                    return (
                        <div key={color._id} className={styles["check-box"]}>
                            <input
                                key={color._id}
                                type="checkbox"
                                name="colors"
                                value={color.color}
                                onChange={changeFilter}
                            ></input>
                            <label htmlFor={color._id}>{color.color}</label>
                        </div>
                    )
                })
                }
            </div>
        </div>
    );
}

export default ProductFilter;
