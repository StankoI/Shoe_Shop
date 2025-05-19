import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa';
import styles from "./footer.module.css"

const Footer = () => {

    const [focused, setFocused] = useState(false);

    const logo = () => {
        return (
            <div className={styles.logo}>
                <Link to="/" className={styles["logo-link"]}>
                    <div className={styles["logo-icon"]}>E</div>
                    <div className={styles["logo-text"]}>EcoStride</div>
                </Link>
            </div>
        );
    }

    return (
        <div className={styles.footer}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
                <path fill="#f0f5f1" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
            <div className={styles["footer-section"]}>
                <div className={styles["footer-links"]}>
                    <div className={styles["footer-links-div"]}>
                        {logo()}
                        <div className={styles["footer-text"]}>
                            Sustainable footwear for a better tomorrow. Step into comfort, walk with style.
                        </div>
                        <div className={styles["social-media"]}>
                            <div className={styles["social-media-icon"]}>
                                <FaInstagram size={22} color="white" />
                            </div>
                            <div className={styles["social-media-icon"]}>
                                <FaFacebook size={22} color="white" />
                            </div>
                            <div className={styles["social-media-icon"]}>
                                <FaYoutube size={22} color="white" />
                            </div>
                            <div className={styles["social-media-icon"]}>
                                <FaTwitter size={22} color="white" />
                            </div>
                        </div>
                    </div>
                    <div className={styles["footer-links-div"]}>
                        <div className={styles["section-name"]}>Shop</div>
                        <div className={styles["footer-link-text"]}>All Products</div>
                        <div className={styles["footer-link-text"]}>Man</div>
                        <div className={styles["footer-link-text"]}>Woman</div>
                        <div className={styles["footer-link-text"]}>Sustainable Collection</div>
                        <div className={styles["footer-link-text"]}>New Arrival</div>
                        <div className={styles["footer-link-text"]}>Sale</div>
                    </div>
                    <div className={styles["footer-links-div"]}>
                        <div className={styles["section-name"]}>Company</div>
                        <div className={styles["footer-link-text"]}>About Us</div>
                        <div className={styles["footer-link-text"]}>Sustainability</div>
                        <div className={styles["footer-link-text"]}>Careers</div>
                        <div className={styles["footer-link-text"]}>Contact Us</div>
                        <div className={styles["footer-link-text"]}>Blog</div>
                        <div className={styles["footer-link-text"]}>Press</div>
                    </div>
                    <div className={styles["footer-links-div"]}>
                        <div className={styles["section-name"]}>Contact</div>
                        <div className={styles["footer-text"]}>Sofia, Studentski grad, blok 18</div>
                        <div className={styles["footer-text"]}>+359 878 381 728</div>
                        <div className={styles["footer-text"]}>info@ecostride.com</div>
                        <div className={styles["footer-text-email"]}>Subscribe to our newsletter</div>
                        <form className={`${styles["email-form"]} ${focused ? styles.focused : ""}`}>
                            <input
                                type="email"
                                placeholder="Your email"
                                onFocus={() => setFocused(true)}
                                onBlur={() => setFocused(false)}
                                required
                            />
                            <button type="submit">Join</button>
                        </form>
                    </div>
                </div>
            </div>
            <hr />
            <div className={styles["footer-below"]}>
                <div className={styles["footer-below-copyright-and-likns"]}>
                    <div className={styles["footer-copyright"]}>
                        <p>@{new Date().getFullYear()} EcoStride. All rights reserved.</p>
                    </div>
                    <div className={styles["footer-below-links"]}>
                        <div className={styles["footer-link-text"]}>Privacy Policy</div>
                        <div className={styles["footer-link-text"]}>Terms of Service</div>
                        <div className={styles["footer-link-text"]}>Cookie Policy</div>
                        <div className={styles["footer-link-text"]}>Accessibility</div>
                    </div>
                </div>
                <div className={styles["footer-below-more"]}>
                    <div className={styles["footer-below-more-info"]}>
                        <div className={`${styles.dot} ${styles.green}`}></div>
                        Carbon Neutral
                    </div>
                    <div className={styles["footer-below-more-info"]}>
                        <div className={`${styles.dot} ${styles.blue}`}></div>
                        Sustainable Materials
                    </div>
                    <div className={styles["footer-below-more-info"]}>
                        <div className={`${styles.dot} ${styles.orange}`}></div>
                        Ethical Production
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;