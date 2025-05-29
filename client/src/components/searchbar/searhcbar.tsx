import { ChangeEvent, useState } from "react";
import styles from "./searchbar.module.css"

type Props = {
    onChangeSearch:(search: string) => void;
}

const Searchbar = ({onChangeSearch}: Props) => {

    const [text, setText] = useState('');

    const handleTextInput = (event:  ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        console.log(value);
        setText(value);
        onChangeSearch(value);
    }

    return(
        <div className={styles["searchbar-container"]}>
            <div className={styles["searchbar"]}> 
                <input className={styles["search"]} id="search" type="text" placeholder="search product..." value={text} onChange={handleTextInput}></input>
                <label htmlFor="search"></label>
            </div>
        </div>
    )
}

export default Searchbar;