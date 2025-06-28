
import styles from "./colorList.module.css"

import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useEffect, useState } from "react";

export interface Color {
    _id: string;
    color: string;
}

const ColorList = () => {

    const axios = useAxiosPrivate();

    const [colors, setColors] = useState<Color[]>([]);

    useEffect(() => {

        const fetchColors = async () => {
            try {
                const temp = await axios.get("http://localhost:8080/client/color");
                setColors(temp.data);
            }
            catch (err) {
                console.log(err);
            }
        }

        fetchColors();
    },[])

    const handleRemove = async (id: string) => {
        try {
            await axios.delete(`http://localhost:8080/admin/color/${id}`)
            setColors(prev => prev.filter(cat => cat._id !== id))
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div className={styles["container"]}>
            {colors.map((color) => {
                return (
                    <div key={color._id} className={styles["color"]}>{color.color} 
                        <div onClick={() => handleRemove(color._id)} className={styles["btn"]}>remove color</div>
                    </div>
                )
            })}
        </div>
    )
}

export default ColorList;