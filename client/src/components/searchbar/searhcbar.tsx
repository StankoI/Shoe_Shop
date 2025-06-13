import { ChangeEvent, useState } from "react";
import styles from "./searchbar.module.css"
import useDevice from "../../hooks/useDevice";

export enum sortTypes {
    none = 0,
    HTL,
    LTH
}

type Props = {
    onChangeSearch: (search: string) => void;
    onChangeSort: (sort: sortTypes) => void;
    onSetVisible:(v: boolean) => void;
}

const Searchbar = ({ onChangeSearch, onChangeSort, onSetVisible }: Props) => {

    const [text, setText] = useState('');
    const [sortType, setSortType] = useState<sortTypes>(sortTypes.none);
    const device = useDevice();

    const handleTextInput = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setText(value);
        onChangeSearch(value);
    }

    const handleSelectedSort = (event: ChangeEvent<HTMLSelectElement>) => {
        const value = parseInt(event.target.value)
        setSortType(value);
        onChangeSort(value);
    }

    return (
        <div className={styles["searchbar-container"]}>
            <div className={styles["searchbar"]}>
                <input className={styles["search"]} id="search" type="text" placeholder="search product..." value={text} onChange={handleTextInput}></input>
                <label htmlFor="search"></label>
            </div>
            <div className={styles["wrapper"]}>
                {device === 'mobile' &&
                    <button className={styles["filter-btn"]} onClick={() => onSetVisible(true)}>
                        Filters
                    </button>}
                <div className={styles["dropdown"]}>
                    <select name="sorting"
                        id="sorting"
                        value={sortType}
                        onChange={handleSelectedSort}>
                        <option value={sortTypes.none}>Featured</option>
                        <option value={sortTypes.LTH}>Price: Low to high</option>
                        <option value={sortTypes.HTL}>Price: High to low</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Searchbar;