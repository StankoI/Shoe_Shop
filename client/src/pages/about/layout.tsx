import AboutUsAndPhotoMerge from "../../components/layouts/aboutUsAndPhotoMerge/aboutUsAndPhotoMerge";
import AboutTextComponent from "../../components/layouts/aboutTextComponent/aboutTextComponent";
import AboutPageOurMissionComponent from "../../components/layouts/aboutPageOurMissionComponent/aboutPageOurMissionComponent";

const AboutLayout = () => {
    return (
        <div>
            <AboutTextComponent/>
            <AboutUsAndPhotoMerge/>
            <AboutPageOurMissionComponent/>
        </div>
    );
}

export default AboutLayout;
