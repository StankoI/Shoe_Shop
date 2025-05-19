import styles from "./contactFrom.module.css"
import { IoIosArrowDown } from "react-icons/io";
import { IoPaperPlaneOutline } from "react-icons/io5";

const ContactForm = () => {
    return (

        <div className={styles["container"]}>
            <div className={styles["title"]}>
                Send Us a Message
            </div>
            <div className={styles["description"]}>
                Have a question or feedback? Fill out the
                form below and we'll get back to you
                as soon as possible.
            </div>
            <div className={styles["form-container"]}>
                <div className={styles["form-row"]}>
                    <div className={styles["form-group"]}>
                        <label htmlFor="name" className={styles["label"]}>Your Name</label>
                        <input type="text" id="name" placeholder="John Doe" className={styles["input-field"]} />
                    </div>
                    <div className={styles["form-group"]}>
                        <label htmlFor="email" className={styles["label"]}>Email Address</label>
                        <input type="email" id="email" placeholder="john@example.com" className={styles["input-field"]} />
                    </div>
                </div>
                <div className={styles["form-group"]}>
                    <label htmlFor="topic" className={styles["label"]}>Topic</label>
                    <div className={styles["select-wrapper"]}>
                        <select id="topic" className={styles["select-field"]}>
                            <option value="" disabled selected>Select a topic</option>
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Product Information">Product Information</option>
                            <option value="Order Status">Order Status</option>
                            <option value="Returns &amp; Exchanges">Returns &amp; Exchanges</option>
                            <option value="Sustainability Questions">Sustainability Questions</option>
                            <option value="Partnerships &amp; Collaborations">Partnerships &amp; Collaborations</option>
                            <option value="Careers &amp; Opportunities">Careers &amp; Opportunities</option>
                            <option value="Press &amp; Media">Press &amp; Media</option>
                            <option value="Feedback &amp; Suggestions">Feedback &amp; Suggestions</option>
                        </select>
                        <div className={styles["select-arrow"]}>
                            <IoIosArrowDown />
                        </div>
                    </div>
                </div>
                <div className={styles["form-group"]}>
                    <label htmlFor="message" className={styles["label"]}>Message</label>
                    <textarea id="message" placeholder="How can we help you?" className={styles["textarea-field"]}></textarea>
                </div>
                <div className={styles["submit-button"]}>
                    <IoPaperPlaneOutline />
                    Send Message
                </div>
                <div className={styles["form-footer"]}>
                    By submitting this form, you agree to our Privacy Policy and Terms of Service
                </div>
            </div>
        </div>



    );
};

export default ContactForm;