import AboutUsAndPhotoMerge from "../../components/layouts/aboutUsAndPhotoMerge/aboutUsAndPhotoMerge";
import AboutTextComponent from "../../components/layouts/aboutTextComponent/aboutTextComponent";
import AboutPageOurMissionComponent from "../../components/layouts/aboutPageOurMissionComponent/aboutPageOurMissionComponent";

import styles from "./about.module.css"

const AboutLayout = () => {
    return (
        <div className={styles["aboutPage"]}>
            <AboutTextComponent/>
            <AboutUsAndPhotoMerge/>
            <AboutPageOurMissionComponent/>
        </div>
    );
}

export default AboutLayout;
