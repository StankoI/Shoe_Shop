import ContactForm from "../../components/layouts/contactForm/contactForm";
import styles from "./contact.module.css"

const ContactLayout = () => {
    return (
        <div className={styles["contactPage"]}>
            <ContactForm/>
        </div>
    );
}

export default ContactLayout;