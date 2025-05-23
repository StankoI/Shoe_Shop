import styles from "./contactTextComponent.module.css"

const ContactTextComponent = () => {

    return(
        <div className={styles["container"]}>
            <div className={styles["label"]}>We'd love to hear from you</div>
            <div className={styles["title"]}>
                Get in 
                <div className={styles["title-subtext"]}>Touch</div>
            </div>
            <div className={styles["description"]}>
                Have questions about our products, 
                sustainability initiatives, or anything else? 
                Our team is here to help and we'd 
                love to connect with you.
            </div>
        </div>

    );

}

export default ContactTextComponent;