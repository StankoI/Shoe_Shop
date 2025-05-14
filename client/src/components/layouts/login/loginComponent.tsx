import { Link } from "react-router-dom";
import styles from "./loginComponent.module.css"
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";

const LoginComponent = () => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(showPassword => !showPassword);
    }

    return (
        <div className={styles["login-container"]}>
            <div className={styles["login"]}>
                <div className={styles["sign-in-container"]}>
                    <div className={styles["login-icon"]}>
                        <FaArrowRightToBracket/>
                    </div>
                    <div className={styles["sign-in-title"]}>
                        Sign In
                    </div>
                    <div className={styles["sign-in-text"]}>
                        Enter your credentials to access your account
                    </div>
                    <form className={styles["form-element"]}>
                        <div className={styles["form-email"]} >Email</div>
                        <input type="email" id="email" name="email" className={styles["input-data"]} placeholder="example@mail.com"></input>
                        <div className={styles["password-wrapper"]}>
                            <div className={styles["form-password"]}>
                                Password
                                <Link to={"/register"} className={styles["forgot-password"]}>Forgot password?</Link>
                            </div>
                            <input type={showPassword ? "password" : "text"} className={styles["input-data"]} placeholder="●●●●●●●●">
                            </input>
                            <span onClick={togglePassword} className={styles["eye-icon"]}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </form>
                    <div className={styles["remember-mi-div"]}>
                        <input type="checkbox" className={styles["checkbox"]}></input>
                        Remember me for 30 days
                    </div>
                    <div className={styles["sign-in-btn"]}>
                        <FaArrowRightToBracket/>
                        Sign In
                    </div>
                    <div className={styles["create-acount"]}>
                        Don't have acount?
                        <Link to="/register" className={styles["create-acount-text"]}>
                            Create an account
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )

}

export default LoginComponent;