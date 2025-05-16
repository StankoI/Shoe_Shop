import ContactTextComponent from "../../components/layouts/contactTextComponent/contactTextComponent";
import styles from "./contact.module.css"

const ContactLayout = () =>{
    return(
        <div className= {styles["contactPage"]}>
            <ContactTextComponent/>
        </div>
    );
}

export default ContactLayout;