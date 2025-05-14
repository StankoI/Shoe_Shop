import styles from "./benefits.module.css"
import { FiCheckCircle } from "react-icons/fi";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Benefits = () => {
    return(
        <div className={styles["container"]}>
            <div className={styles["title"]}>
                Benefits of Creating an Account
            </div>
            <div className={styles["description"]}>
                Join our community of eco-conscious shoppers and enjoy these benefits
            </div>
            <div className={styles["benefits-boxes"]}>
                <div className={styles["benefit-box"]}>
                    <div className={styles["box-icon"]}>
                        <FiCheckCircle className={styles["icon"]}/>
                    </div>
                    <div className={styles["box-title"]}>
                        Faster Checkout
                    </div>
                    <div className={styles["box-description"]}>
                        Save your shipping and payment details for a quicker, more convenient checkout experience.
                    </div>
                </div>
                <div className={styles["benefit-box"]}>
                    <div className={styles["box-icon"]}>
                        <FiCheckCircle className={styles["icon"]}/>
                    </div>
                    <div className={styles["box-title"]}>
                        Order History
                    </div>
                    <div className={styles["box-description"]}>
                        Easily track and manage your orders, view past purchases, and reorder your favorite items.
                    </div>
                </div>
                <div className={styles["benefit-box"]}>
                    <div className={styles["box-icon"]}>
                        <FiCheckCircle className={styles["icon"]}/>
                    </div>
                    <div className={styles["box-title"]}>
                        Exclusive Offers
                    </div>
                    <div className={styles["box-description"]}>
                        Get access to member-only discounts, early access to new products, and special promotions.
                    </div>
                </div>
            </div>
            <Link to={"/register"} className={styles["create-acount-btn"]}>
                Create an Account
                <IoMdArrowForward/>
            </Link>
        </div>
    );
}

export default Benefits;