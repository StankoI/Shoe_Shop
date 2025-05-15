import OfficeHours from "../../components/layouts/officeHours/officeHours";
import styles from "./contact.module.css"

const ContactLayout = () =>{
    return(
        <div className={styles["contactPage"]}>
            <OfficeHours/>
        </div>
    );
}

export default ContactLayout;