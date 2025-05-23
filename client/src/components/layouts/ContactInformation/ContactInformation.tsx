import ContactForm from "../contactForm/contactForm";
import OfficeHours from "../officeHours/officeHours";
import styles from "./ContactInformation.module.css"

const ContactInformation = () => {

    return(
        <div className={styles["container"]}> 
            <OfficeHours/>
            <ContactForm/>
        </div>
    );
}

export default ContactInformation;