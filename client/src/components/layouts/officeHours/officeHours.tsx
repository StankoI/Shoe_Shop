import { useState } from "react";
import styles from "./officeHours.module.css"
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";

const OfficeHours = () => {

    const [selectedPage, setSelectedPage] = useState(0);


    return (
        <div className={styles["container"]}>
            <div className={styles["title"]}>Contact Information</div>
            <div className={styles["description"]}>
                Reach out to us through any of the channels below.
                We strive to respond to all inquiries within 24
                hours during business days.
            </div>
            <div className={styles["btns"]}>
                <div className={`${styles["btn"]} ${styles[selectedPage === 0 ? "selected" : ""]}`} onClick={() => setSelectedPage(0)}>Headquarters</div>
                <div className={`${styles["btn"]} ${styles[selectedPage === 1 ? "selected" : ""]}`} onClick={() => setSelectedPage(1)}>European office</div>
                <div className={`${styles["btn"]} ${styles[selectedPage === 2 ? "selected" : ""]}`} onClick={() => setSelectedPage(2)}>Asia Pacific Office</div>
            </div>
            <div className={styles["info-container"]}>
                <div className={styles["info-boxes"]}>
                    <div className={styles["box"]}>
                        <div className={styles["icon"]}>
                            <IoLocationOutline/>
                        </div>
                        <div className={styles["box-text"]}>
                            <div className={styles["box-title"]}>Address</div>
                            <div className={styles["box-description"]}>
                                {(selectedPage === 0) ? "123 Eco Street, Green City, CA 94103" :
                                    (selectedPage === 1) ? "45 Sustainable Lane, London, UK EC1A 1BB"
                                        : "78 Green Building, Tokyo, Japan 150-0002"}
                            </div>
                        </div>
                    </div>
                    <div className={styles["box"]}>
                        <div className={styles["icon"]}>
                            <MdOutlineMailOutline/>
                        </div>
                        <div className={styles["box-text"]}>
                            <div className={styles["box-title"]}>Email</div>
                            <div className={styles["box-description"]}>
                                {(selectedPage === 0) ? "info@ecostride.com" :
                                    (selectedPage === 1) ? "europe@ecostride.com"
                                        : "apac@ecostride.com"}
                                <br></br>
                                <br></br>
                            </div>
                        </div>
                    </div>
                    <div className={styles["box"]}>
                        <div className={styles["icon"]}>
                            <FiPhone />
                        </div>
                        <div className={styles["box-text"]}>
                            <div className={styles["box-title"]}>Phone</div>
                            <div className={styles["box-description"]}>
                                {(selectedPage === 0) ? "+1 (555) 123-4567" :
                                    (selectedPage === 1) ? "+44 20 7123 4567"
                                        : "+81 3 1234 5678"}
                                <br></br>
                                <br></br>
                            </div>
                        </div>
                    </div>
                    <div className={styles["box"]}>
                        <div className={styles["icon"]}>
                            <FaRegClock />
                        </div>
                        <div className={styles["box-text"]}>
                            <div className={styles["box-title"]}>Hours</div>
                            <div className={styles["box-description"]}>
                                <div className={styles["box-description"]}>
                                    {(selectedPage === 0) ? "Monday - Friday: 9:00 AM - 6:00 PM Saturday: 10:00 AM - 4:00 PM Sunday: Closed" :
                                        (selectedPage === 1) ? "Monday - Friday: 9:00 AM - 5:30 PM Saturday - Sunday: Closed"
                                            : "Monday - Friday: 9:00 AM - 6:00 PM Saturday: 10:00 AM - 2:00 PM Sunday: Closed"}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles["info-social"]}>
                    <div className={styles["social-title"]}>
                        Connect With Us
                    </div>
                    <div className={styles["social-icons"]}>
                        <div className={styles["social-icon"]}>
                            <FiFacebook/>
                        </div>
                        <div className={styles["social-icon"]}>
                            <FiLinkedin/>
                        </div>
                        <div className={styles["social-icon"]}>
                            <FaInstagram/>
                        </div>
                        <div className={styles["social-icon"]}>
                            <FaXTwitter/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OfficeHours;