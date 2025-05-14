import styles from "./JoinOurCommunity.module.css"
import { BsLightningCharge } from "react-icons/bs";
import { FaLock } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";
import { CiBeerMugFull } from "react-icons/ci";

const JoinOurCommunity = () => {
    return(
        <div className={styles["container"]}>
            <div className={styles["title"]}>
                Join Our Sustainable Community
            </div>
            <div className={styles["description"]}>
                When you create an account with EcoStride, you're joining a movement dedicated to making a positive impact on the planet
            </div>
            <div className={styles["join-boxes"]}>
                <div className={styles["join-box"]}>
                    <div className={styles["box-icon"]}>
                        <FaLock className={styles["icon"]}/>
                    </div>
                    <div className={styles["box-title"]}>
                        Secure & Private
                    </div>
                    <div className={styles["box-description"]}>
                        Your personal information is always protected. We never share your data with third parties without your consent.
                    </div>
                </div>
                <div className={styles["join-box"]}>
                    <div className={styles["box-icon"]}>
                        <FaBell className={styles["icon"]}/>
                    </div>
                    <div className={styles["box-title"]}>
                        Exclusive Rewards
                    </div>
                    <div className={styles["box-description"]}>
                        Earn eco-points with every purchase that you can redeem for discounts, free shipping, or donate to environmental causes.
                    </div>
                </div>
                <div className={styles["join-box"]}>
                    <div className={styles["box-icon"]}>
                        <CiBeerMugFull className={styles["icon"]}/>
                    </div>
                    <div className={styles["box-title"]}>
                        Stay Informed
                    </div>
                    <div className={styles["box-description"]}>
                        Get updates on our latest sustainable initiatives, new product launches, and tips for eco-friendly living.
                    </div>
                </div>
            </div>
            <div className={styles["under-box"]}>
                <div className={styles["under-box-icon"]}>
                    <BsLightningCharge/>
                </div>
                <div className={styles["under-box-text"]}>
                    <div className={styles["under-box-title"]}>
                        Make an Impact with Every Step
                    </div>
                    <div className={styles["under-box-description"]}>
                        For every new account created, we plant a tree through our partnership 
                        with global reforestation projects. 
                        Join us in making the world greener, one step at a time.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JoinOurCommunity;