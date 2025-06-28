
import {useState } from "react"
import styles from "./addCategory.module.css"
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const AddCategory = () => {

    const axios = useAxiosPrivate();
    const [categoryInput, setCategoryInput] = useState('');
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const value = e.target.value;
        setCategoryInput(value);
    }

    const handleSubmit = async () => {
        try{
            await axios.post("http://localhost:8080/admin/category", {category:categoryInput})
            setCategoryInput('');
        }
        catch(err){
            console.log(err);
        }
    }

    return(
        <div className={styles["container"]}>
            <form>
                <input type="text" placeholder="color" value={categoryInput} onChange={handleChange} className={styles["input"]}></input>
                <button className={styles["button"]} onClick={handleSubmit}>add Color</button>
            </form>
        </div>
    )
}

export default AddCategory;