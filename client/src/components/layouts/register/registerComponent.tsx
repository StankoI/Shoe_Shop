import { Link } from "react-router-dom";
import styles from "./registerComponent.module.css"
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { LuUserPlus } from "react-icons/lu";

const RegisterComponent = () => {

    const [showPassword1, setShowPassword1] = useState(true);
    const [showPassword2, setShowPassword2] = useState(true);

    const togglePassword1 = () => {
        setShowPassword1(showPassword1 => !showPassword1);
    }

    const togglePassword2 = () => {
        setShowPassword2(showPassword2 => !showPassword2);
    }

    return (
        <div className={styles["register-container"]}>
            <div className={styles["register"]}>
                <div className={styles["sign-up-container"]}>
                    <div className={styles["register-icon"]}>
                        <LuUserPlus className={styles["icon"]}/>
                    </div>
                    <div className={styles["sign-up-title"]}>
                        Sign Up
                    </div>
                    <div className={styles["sign-up-text"]}>
                        Create an account to get started
                    </div>
                    <form className={styles["form-element"]}>
                        <div className={styles["form-fullname"]} >Full Name</div>
                        <input type="text" id="fullname" name="fullname" className={styles["input-data"]} placeholder="stefan Gerjikov"></input>
                        <div className={styles["form-email"]} >Email</div>
                        <input type="email" id="email" name="email" className={styles["input-data"]} placeholder="example@mail.com"></input>
                        <div className={styles["password-wrapper"]}>
                            <div className={styles["form-password"]}>
                                Password
                            </div>
                            <input type={showPassword1 ? "password" : "text"} className={styles["input-data"]} placeholder="●●●●●●●●">
                            </input>
                            <span onClick={togglePassword1} className={styles["eye-icon"]}>
                                {showPassword1 ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                        <div className={styles["password-wrapper"]}>
                            <div className={styles["form-password"]}>
                                Confirm Password
                            </div>
                            <input type={showPassword2 ? "password" : "text"} className={styles["input-data"]} placeholder="●●●●●●●●">
                            </input>
                            <span onClick={togglePassword2} className={styles["eye-icon"]}>
                                {showPassword2 ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </form>
                    <div className={styles["agree-div"]}>
                        <input type="checkbox" className={styles["checkbox"]}></input>
                        I agree to the Terms of Service and Privacy Policy
                    </div>
                    <div className={styles["create-account-btn"]}>
                        <FaArrowRightToBracket/>
                        Create Account
                    </div>
                    <div className={styles["sign-in"]}>
                        Already have an account?
                        <Link to="/login" className={styles["sign-in-text"]}>
                            Sign in
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )

}

export default RegisterComponent;