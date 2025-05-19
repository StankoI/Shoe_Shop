import OfficeHours from "../../components/layouts/officeHours/officeHours";
import ContactTextComponent from "../../components/layouts/contactTextComponent/contactTextComponent";
import ContactForm from "../../components/layouts/contactForm/contactForm";

const ContactLayout = () =>{
    return(
        <div>
            <ContactTextComponent/>
            {/* TODO add <div> */}
            <OfficeHours/>
            <ContactForm/>
            {/* TODO add </div> */}
        </div>
    );
}

export default ContactLayout;