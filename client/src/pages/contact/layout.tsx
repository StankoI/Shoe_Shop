import ContactTextComponent from "../../components/layouts/contactTextComponent/contactTextComponent";
import ContactForm from "../../components/layouts/contactForm/contactForm";
import styles from "./contact.module.css"

const ContactLayout = () =>{
    return(
        <div className= {styles["contactPage"]}>
            <ContactTextComponent/>
            <ContactForm/>
        </div>
    );
}

export default ContactLayout;