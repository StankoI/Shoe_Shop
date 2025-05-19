import AboutUsAndPhotoMerge from "../../components/layouts/aboutUsAndPhotoMerge/aboutUsAndPhotoMerge";
import styles from "./about.module.css"

const AboutLayout = () => {
    return (
        <div className={styles["aboutPage"]}>
            <AboutUsAndPhotoMerge/>
        </div>
    );
}

export default AboutLayout;
