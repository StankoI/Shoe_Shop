import AboutUs from "../aboutPageAboutUsComponent/aboutPageAboutUsComponent"
import AboutPagePhotosComponent from "../aboutPagePhotosComponent/aboutPagePhotosComponent"
import styles from "./aboutUsAndPhotoMerge.module.css"


const AboutUsAndPhotoMerge = () =>{

    return(
        <div className={styles["container"]}>
            <AboutPagePhotosComponent/>
            <AboutUs/>
        </div>
    )
}

export default AboutUsAndPhotoMerge;