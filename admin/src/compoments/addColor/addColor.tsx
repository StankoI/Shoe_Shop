
import {useState } from "react"
import styles from "./addColor.module.css"
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const AddColor = () => {

    const axios = useAxiosPrivate();
    const [colorInput, setColorInput] = useState('');
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        e.preventDefault()
        const value = e.target.value;
        setColorInput(value);
    }

    const handleSubmit = async () => {
        try{
            await axios.post("http://localhost:8080/admin/color", {color:colorInput})
        }
        catch(err){
            console.log(err);
        }
    }

    return(
        <div className={styles["container"]}>
            <form>
                <input type="text" placeholder="color" value={colorInput} onChange={handleChange}></input>
                <button onClick={handleSubmit}>add Color</button>
            </form>
        </div>
    )
}

export default AddColor;