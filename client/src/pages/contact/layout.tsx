// import OfficeHours from "../../components/layouts/officeHours/officeHours";
import ContactTextComponent from "../../components/layouts/contactTextComponent/contactTextComponent";
// import ContactForm from "../../components/layouts/contactForm/contactForm";
import ContactInformation from "../../components/layouts/ContactInformation/ContactInformation";

const ContactLayout = () =>{
    return(
        <div>
            <ContactTextComponent/>
            <ContactInformation/>
        </div>
    );
}

export default ContactLayout;