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
                <div>
                    <div>70%</div>
                    <div>Recycled Materials</div>
                </div>
                <div>
                    <div>50+</div>
                    <div>Countries Served</div>
                </div>
                <div>
                    <div>40%</div>
                    <div>Carbon Reduction</div>
                </div>
                <div>
                    <div>5%</div>
                    <div>To Community Projects</div>
                </div>
            </div>
        </div>
    );
}

export default AboutTextComponent;