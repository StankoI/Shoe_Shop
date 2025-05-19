import styles from "./aboutTextComponent.module.css"

const AboutTextComponent = () => {
    return (
        <div className={styles["container"]}>
            <div className={styles["label"]}>
                <div className={styles["label-est"]}>
                    Est. 2018
                </div>
                Redefining Sustainable Footwear
            </div>
            <div className={styles["title"]}>
                <div>Our</div> 
                <div>Story</div>
                <div>of</div>
                <div className={styles["title-subtext"]}>Sustainable</div>
                <div>Innovation</div>
            </div>
            <div className={styles["description"]}>
                At EcoStride, we're reimagining footwear through the lens of sustainability, comfort, and timeless design. Our journey is driven by a passion for creating positive change in the fashion industry.
            </div>
            <div className={styles["buttons"]}>
                <div className={`${styles["button"]} ${styles["black"]}`}>Our Mission</div>
                <div className={styles["button"]}>Meet Our Team</div>
                <div className={styles["button"]}>Our Journey</div>
            </div>
            <div className={styles["boxes"]}>
                <div className={styles["box"]}>
                    <div className={`${styles["number"]} ${styles["one"]}`}>70%</div>
                    <div className={styles["box-text"]}>Recycled Materials</div>
                </div>
                <div className={styles["box"]}>
                    <div className={`${styles["number"]} ${styles["two"]}`}>50+</div>
                    <div className={styles["box-text"]}>Countries Served</div>
                </div>
                <div className={styles["box"]}>
                    <div className={`${styles["number"]} ${styles["three"]}`}>40%</div>
                    <div className={styles["box-text"]}>Carbon Reduction</div>
                </div>
                <div className={styles["box"]}>
                    <div className={`${styles["number"]} ${styles["four"]}`}>5%</div>
                    <div className={styles["box-text"]}>To Community Projects</div>
                </div>
            </div>
        </div>
    );
}

export default AboutTextComponent;