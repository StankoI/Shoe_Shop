import AboutTextComponent from "../../components/layouts/aboutTextComponent/aboutTextComponent";
import styles from "./about.module.css"

const AboutLayout = () => {
    return (
        <div className={styles["aboutPage"]}>
            <AboutTextComponent/>
        </div>
    );
}

export default AboutLayout;
