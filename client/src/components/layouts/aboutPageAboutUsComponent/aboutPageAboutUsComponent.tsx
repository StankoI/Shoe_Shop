import { useState } from "react";
import styles from "./aboutPageAboutUsComponent.module.css"
import { LuCircleCheckBig } from "react-icons/lu";

const AboutUs = () => {

    const [selectedPage, setSelectedPage] = useState(0);


    return (
        <div className={styles["container"]}>
            <div className={styles["title"]}>Redefining Footwear for a
                <div className={styles["title-green"]}>
                     Better Tomorrow
                </div>
            </div>

            <div className={styles["btns"]}>
                <div className={`${styles["btn"]} ${styles[selectedPage === 0 ? "selected" : ""]}`} onClick={() => setSelectedPage(0)}>Our story</div>
                <div className={`${styles["btn"]} ${styles[selectedPage === 1 ? "selected" : ""]}`} onClick={() => setSelectedPage(1)}>Our Approach</div>
                <div className={`${styles["btn"]} ${styles[selectedPage === 2 ? "selected" : ""]}`} onClick={() => setSelectedPage(2)}>Our Impact</div>
            </div>
            <div className={styles["info-container"]}>
                <div className={styles["info-texts"]}>
                    <div className={styles["text"]}>
                        {(selectedPage === 0) ? "Founded in 2018, EcoStride began with a simple question: Why can't shoes be both stylish and sustainable? Our founder, Emma Chen, was frustrated by the environmental impact of the footwearindustry and set out to create a better alternative."
                            : (selectedPage === 1) ? "Our approach combines cutting-edge technology with traditional craftsmanship. We start by sourcing the most sustainable materials available, including recycled ocean plastic, algae-based foams, and organic cotton."
                                : "Since our founding, we've diverted over 500 tons of plastic from oceans, reduced carbon emissions by 40% compared to traditional footwear, and saved more than 2 million gallons of water through our manufacturing processes."}

                    </div>

                    <div className={styles["text"]}>
                        {(selectedPage === 0) ? "Today, EcoStride is a team of passionate designers, engineers, and sustainability experts working together to revolutionize how shoes are made. We've developed innovative techniques to use recycled and bio-based materials without compromising on quality, comfort, or style."
                            : (selectedPage === 1) ? "Our design process focuses on longevity and versatility, creating shoes that last longer and can be worn in multiple settings. This reduces the need for multiple pairs and decreases overall consumption."
                                : "We've reimagined manufacturing by developing water-based adhesives, reducing energy consumption in our factories by 35%, and implementing a zero-waste policy across our operations."}

                    </div>

                    <div className={styles["text"]}>
                        {(selectedPage === 0) ? "Since our founding, we've diverted over 500 tons of plastic from oceans, reduced carbon emissions by 40% compared to traditional footwear, and saved more than 2 million gallons of water through our manufacturing processes."
                            : (selectedPage === 1) ? "Our take-back program has collected and recycled 50,000+ pairs of shoes, and we've planted 100,000+ trees to offset our remaining carbon footprint."
                                : "Through our community initiatives, we've provided sustainable footwear to 10,000+ people in need and supported environmental education programs reaching 25,000+ students worldwide."}
                    </div>

                </div>
                <div className={styles["info"]}>
                    <div className={styles["box"]}>
                        <div className={styles["icon"]}>
                            <LuCircleCheckBig />
                        </div>
                        <div className={styles["box-text"]}>
                            <div className={styles["box-title"]}>
                                Sustainable Materials
                            </div>
                            <div className={styles["box-description"]}>
                                70% recycled or bio-based
                                materials in every shoe
                            </div>
                        </div>
                    </div>
                    <div className={styles["box"]}>
                        <div className={styles["icon"]}>
                            <LuCircleCheckBig />
                        </div>
                        <div className={styles["box-text"]}>
                            <div className={styles["box-title"]}>
                                Ethical Production
                            </div>
                            <div className={styles["box-description"]}>
                                Fair wages and safe working
                                conditions for all workers
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;