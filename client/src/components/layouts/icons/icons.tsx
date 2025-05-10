import { Link } from "react-router-dom";
import styles from "./icons.module.css"

const Logo = () => {
    return (
        <div className={styles["logo"]}>
            <Link to="/" className={styles["logo-link"]}>
                <div className={styles["logo-icon"]}>E</div>
                <div className={styles["logo-text"]}>EcoStride</div>
            </Link>
        </div>
    );
}

export default Logo;