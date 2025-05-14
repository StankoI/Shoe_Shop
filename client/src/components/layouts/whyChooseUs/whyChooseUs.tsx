import styles from "./whyChooseUs.module.css"
import { FaRegStar, FaRegHeart , FaArrowRight} from "react-icons/fa";
import { IoMdCheckmarkCircleOutline} from "react-icons/io";

const WhyChooseUs = () => {
    return (
        <div className={styles["why-choose-container"]}>
            <div className={styles["why-choose-header"]}>
                <div className={styles["crafted-label"]}>Crafted with care</div>
                <div className={styles["main-title"]}>Why Choose Us</div>
                <div className={styles["subtitle"]}>
                    We combine quality, comfort, and sustainability in every pair of shoes we create.
                </div>
            </div>

            <div className={styles["features-container"]}>
                <div className={styles["feature-card"]}>
                    <div className={styles["icon-wrapper"]}>
                        <div className={`${styles["icon"]} ${styles["icon-yellow"]}`}>
                            <FaRegStar className={styles["icon-logo"]} />
                        </div>
                    </div>
                    <div className={styles["feature-title"]}>Premium Quality</div>
                    <div className={styles["feature-description"]}>
                        Crafted with the finest materials and attention to detail for long-lasting comfort.
                    </div>
                    <div className={`${styles["learn-more"]} ${styles["orange"]}`}>
                         Learn more
                        <FaArrowRight/>
                    </div>
                </div>

                <div className={styles["feature-card"]}>
                    <div className={`${styles["icon"]} ${styles["icon-green"]}`}>
                        <FaRegHeart className={styles["icon-logo"]} />
                    </div>
                    <div className={styles["feature-title"]}>Sustainable Design</div>
                    <div className={styles["feature-description"]}>
                        Eco-friendly materials and ethical manufacturing processes for a better planet.
                    </div>
                    <div className={`${styles["learn-more"]} ${styles["green"]}`}>
                        Learn more
                        <FaArrowRight />
                    </div>
                </div>

                <div className={styles["feature-card"]}>
                    <div className={`${styles["icon"]} ${styles["icon-blue"]}`}>
                        <IoMdCheckmarkCircleOutline className={styles["icon-logo"]} />
                    </div>
                    <div className={styles["feature-title"]}>Perfect Fit</div>
                    <div className={styles["feature-description"]}>
                        Innovative design ensures comfort and support for all-day wear.
                    </div>
                    <div className={`${styles["learn-more"]} ${styles["blue"]}`}>
                        Learn more
                        <FaArrowRight />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
