import styles from "./aboutPagePhotosComponent.module.css"

const AboutPagePhotosComponent = () => {

    return (
        <div className={styles["outer-container"]}>
            <div className={styles["grid-container"]}>
                <div className={`${styles["grid-item"]} ${styles["item-1"]}`}>
                    {/* Можете да добавите <img /> таг тук, ако е необходимо */}
                </div>
                <div className={`${styles["grid-item"]} ${styles["item-2"]}`}>
                    {/* Можете да добавите <img /> таг тук, ако е необходимо */}
                </div>
                <div className={`${styles["grid-item"]} ${styles["item-3"]}`}>
                    {/* Можете да добавите <img /> таг тук, ако е необходимо */}
                </div>
                <div className={`${styles["grid-item"]} ${styles["item-4"]}`}>
                    {/* Можете да добавите <img /> таг тук, ако е необходимо */}
                </div>
            </div>
        </div>
    );
}

export default AboutPagePhotosComponent;