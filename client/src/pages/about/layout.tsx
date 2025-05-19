import AboutPageOurMissionComponent from "../../components/layouts/aboutPageOurMissionComponent/aboutPageOurMissionComponent";
import styles from "./about.module.css"

const AboutLayout = () => {
    return (
        <div className={styles["aboutPage"]}>
            <AboutPageOurMissionComponent/>
        </div>
    );
}

export default AboutLayout;
