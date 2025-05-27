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
    onFilterChangeValue: (priceFilter: number) => void;
}

const ProductFilter = ({ onFilterChangeColors, onFilterChangeCategories, onFilterChangeValue }: Props) => {
    const [checkedListColors, setCheckedListColors] = useState<string[]>([]);
    const [colors, setColors] = useState<Color[]>([]);

    const [checkedListCategories, setCheckedListCategories] = useState<string[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);

    const [priceValue, setPriceValue] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:8080/client/color')
            .then((res) => {
                setColors(res.data);
            })

        axios.get('http://localhost:8080/client/category')
            .then((res) => {
                setCategories(res.data);
            })
    },[])

    

    useEffect(() => {
        onFilterChangeColors(checkedListColors);
    }, [checkedListColors])

    useEffect(() => {
        onFilterChangeCategories(checkedListCategories)
    }, [checkedListCategories])

    useEffect(() => {
        onFilterChangeValue(priceValue)
    }, [priceValue])

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

    const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value);
        setPriceValue(value);
    }

    const cleanAll = () => {
        setCheckedListCategories([]);
        setCheckedListColors([]);
        setPriceValue(0);
    }

    return (
        <div className={styles["container"]}>
            <div className={styles["title"]}>Filters</div>
            <div className={styles["clean-all-btn"]} onClick={() => cleanAll()}>clean all</div>
            <div className={styles["slidecontainer"]}>
                <div className={styles["text"]}>Price Range</div>
                <input type="range" min="0" max="200" value={priceValue} className={styles["slider"]} id="myRange" onChange={changeValue} />
                <label htmlFor="myRange"></label>
                <div className={styles["prices"]}>
                    <div className={styles["min-price"]}>{priceValue}</div>
                    <div className={styles["max-price"]}>200</div>
                </div>
            </div>
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
                                checked={checkedListCategories.includes(category.category)}
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
                                checked={checkedListColors.includes(color.color)}
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
