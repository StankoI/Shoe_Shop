import styles from "./aboutPageOurMissionComponent.module.css"
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { LuLeaf } from "react-icons/lu";
import { PiFinnTheHuman } from "react-icons/pi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaRecycle } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";

const AboutPageOurMissionComponent = () => {

    return(
        <div className={styles["container"]}>
            <div className={styles["label"]}>Our Mission</div>
            <div className={styles["title"]}>
                Walking Towards a Greener Future
            </div>
            <div className={styles["description"]}>
                Our mission is to create footwear that treads
                lightly on the planet while empowering people to make
                conscious choices. We believe that sustainability 
                shouldn't be a luxury but a standard.
            </div>
            <div className={styles["boxes-container"]}>
                <div className={styles["box"]}>
                    <div className={`${styles["box-icon"]} ${styles["green"]}`}>
                        <LuLeaf/>
                    </div>
                    <div className={styles["box-title"]}>
                        Environmental Stewardship
                    </div>
                    <div className={styles["box-description"]}>
                        We prioritize the planet in every 
                        decision we make, from material 
                        sourcing to packaging.
                    </div>
                </div>

                <div className={styles["box"]}>
                    <div className={`${styles["box-icon"]} ${styles["blue"]}`}>
                        <PiFinnTheHuman/>
                    </div>
                    <div className={styles["box-title"]}>
                        Community Impact
                    </div>
                    <div className={styles["box-description"]}>
                        We believe in giving back to communities
                        and creating positive social change.
                    </div>
                </div>

                <div className={styles["box"]}>
                    <div className={`${styles["box-icon"]} ${styles["green"]}`}>
                        <FaRecycle/>
                    </div>
                    <div className={styles["box-title"]}>
                        Circular Economy
                    </div>
                    <div className={styles["box-description"]}>
                        We design products with their 
                        full lifecycle in mind, 
                        aiming for zero waste.
                    </div>
                </div>

                <div className={styles["box"]}>
                    <div className={`${styles["box-icon"]} ${styles["red"]}`}>
                        <FaRegHeart/>
                    </div>
                    <div className={styles["box-title"]}>
                        Compassionate Innovation
                    </div>
                    <div className={styles["box-description"]}>
                        We innovate with empathy for people, 
                        animals, and the environment.
                    </div>
                </div>

                <div className={styles["box"]}>
                    <div className={`${styles["box-icon"]} ${styles["purple"]}`}>
                        <FaArrowTrendUp/>
                    </div>
                    <div className={styles["box-title"]}>
                        Continuous Improvement
                    </div>
                    <div className={styles["box-description"]}>
                        We're never satisfied with the status 
                        quo and constantly strive to do better.
                    </div>
                </div>

                <div className={styles["box"]}>
                    <div className={`${styles["box-icon"]} ${styles["blue"]}`}>
                        <RiGlobalLine/>
                    </div>
                    <div className={styles["box-title"]}>
                        Global Perspective
                    </div>
                    <div className={styles["box-description"]}>
                        We think globally while acting locally,
                        considering our worldwide impact.
                    </div>
                </div>
            </div>
            <div className={styles["under-boxes-container"]}>
                <div className={styles["under-box"]}>
                    <div className={`${styles["under-box-icon"]} ${styles["green"]}`}>
                        <LuLeaf/>
                    </div>
                    <div className={styles["under-box-title"]}>
                        Environmental Stewardship
                    </div>
                    <div className={styles["under-box-description"]}>
                        We're committed to reducing our 
                        carbon footprint, minimizing waste, 
                        and using sustainable materials 
                        in all our products.
                    </div>
                    <div className={styles["under-box-checks"]}>
                        <div className={styles["under-box-check"]}>
                            <IoMdCheckmarkCircleOutline className={styles["green"]} />
                            40% reduction in carbon emissions
                        </div>
                        <div className={styles["under-box-check"]}>
                            <IoMdCheckmarkCircleOutline className={styles["green"]}/>
                            Zero waste manufacturing by 2026
                        </div>
                        <div className={styles["under-box-check"]}>
                            <IoMdCheckmarkCircleOutline className={styles["green"]} />
                            Water-based adhesives only
                        </div>
                    </div>
                </div>

                <div className={styles["under-box"]}>
                    <div className={`${styles["under-box-icon"]} ${styles["blue"]}`}>
                        <PiFinnTheHuman />
                    </div>
                    <div className={styles["under-box-title"]}>
                        Environmental Stewardship
                    </div>
                    <div className={styles["under-box-description"]}>
                        We're committed to reducing our 
                        carbon footprint, minimizing waste, 
                        and using sustainable materials 
                        in all our products.
                    </div>
                    <div className={styles["under-box-checks"]}>
                        <div className={styles["under-box-check"]}>
                            <IoMdCheckmarkCircleOutline className={styles["blue"]} />
                            40% reduction in carbon emissions
                        </div>
                        <div className={styles["under-box-check"]}>
                            <IoMdCheckmarkCircleOutline className={styles["blue"]} />
                            Zero waste manufacturing by 2026
                        </div>
                        <div className={styles["under-box-check"]}>
                            <IoMdCheckmarkCircleOutline className={styles["blue"]}/>
                            Water-based adhesives only
                        </div>
                    </div>
                </div>

                <div className={styles["under-box"]}>
                    <div className={`${styles["under-box-icon"]} ${styles["orange"]}`}>
                        <FaRegHeart/>
                    </div>
                    <div className={styles["under-box-title"]}>
                        Environmental Stewardship
                    </div>
                    <div className={styles["under-box-description"]}>
                        We're committed to reducing our 
                        carbon footprint, minimizing waste, 
                        and using sustainable materials 
                        in all our products.
                    </div>
                    <div className={styles["under-box-checks"]}>
                        <div className={styles["under-box-check"]}>
                            <IoMdCheckmarkCircleOutline className={styles["orange"]}/>
                            40% reduction in carbon emissions
                        </div>
                        <div className={styles["under-box-check"]}>
                            <IoMdCheckmarkCircleOutline className={styles["orange"]} />
                            Zero waste manufacturing by 2026
                        </div>
                        <div className={styles["under-box-check"]}>
                            <IoMdCheckmarkCircleOutline className={styles["orange"]} />
                            Water-based adhesives only
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default AboutPageOurMissionComponent;