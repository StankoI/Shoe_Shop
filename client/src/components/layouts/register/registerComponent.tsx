import { Link } from "react-router-dom";
import styles from "./registerComponent.module.css"
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { LuUserPlus } from "react-icons/lu";
import axios from "axios";

const RegisterComponent = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
    })

    const [agreed, setAgreed] = useState(false);

    const [showPassword1, setShowPassword1] = useState(true);
    const [showPassword2, setShowPassword2] = useState(true);

    const togglePassword1 = () => {
        setShowPassword1(showPassword1 => !showPassword1);
    }

    const togglePassword2 = () => {
        setShowPassword2(showPassword2 => !showPassword2);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleCheckboxChange = () => {
        setAgreed(prev => !prev)
        console.log(agreed)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const { name, email, phoneNumber, password, confirmPassword } = formData;

        if (!name.trim()) {
            alert("Моля, въведете име.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Моля, въведете валиден имейл.");
            return;
        }

        const phoneRegex = /^\d{9,15}$/;
        if (!phoneRegex.test(phoneNumber)) {
            alert("Моля, въведете валиден телефонен номер (само цифри, между 9 и 15 символа).");
            return;
        }

        if (password.length < 6) {
            alert("Паролата трябва да съдържа поне 6 символа.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Паролите не съвпадат.");
            return;
        }

        if (!agreed) {
            alert("Трябва да се съгласите с условията.");
            return;
        }

        const registerData = {
            ...formData,
        }

        try {
            await axios.post('http://localhost:8080/client/user', registerData);
            setFormData({
                name: '',
                email: '',
                phoneNumber: '',
                password: '',
                confirmPassword: ''
            });
            alert("Регистрацията е успешна!");
        } catch (error: any) {
            console.error('Грешка при регистрация:', error.response?.data || error.message);
            alert('Грешка при регистрация. Опитайте отново.');
        }
    };


    return (
        <div className={styles["register-container"]}>
            <div className={styles["register"]}>
                <div className={styles["sign-up-container"]}>
                    <div className={styles["register-icon"]}>
                        <LuUserPlus className={styles["icon"]} />
                    </div>
                    <div className={styles["sign-up-title"]}>
                        Sign Up
                    </div>
                    <div className={styles["sign-up-text"]}>
                        Create an account to get started
                    </div>
                    <form className={styles["form-element"]}>
                        <div className={styles["form-fullname"]} >Full Name</div>
                        <input type="text"
                            id="name"
                            name="name"
                            className={styles["input-data"]}
                            placeholder="stefan Gerjikov"
                            value={formData.name}
                            onChange={handleChange}>
                        </input>
                        <div className={styles["form-email"]} >Email</div>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className={styles["input-data"]}
                            placeholder="example@mail.com"
                            value={formData.email}
                            onChange={handleChange}>
                        </input>
                        <div className={styles["form-phone-number"]} >Phone number</div>
                        <input
                            type="text"
                            id="phoneNumber"
                            name="phoneNumber"
                            className={styles["input-data"]}
                            placeholder="08812345678"
                            value={formData.phoneNumber}
                            onChange={handleChange}>
                        </input>
                        <div className={styles["password-wrapper"]}>
                            <div className={styles["form-password"]}>
                                Password
                            </div>
                            <input
                                type={showPassword1 ? "password" : "text"}
                                className={styles["input-data"]}
                                placeholder="●●●●●●●●"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}>
                            </input>
                            <span onClick={togglePassword1} className={styles["eye-icon"]}>
                                {showPassword1 ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                        <div className={styles["password-wrapper"]}>
                            <div className={styles["form-password"]}>
                                Confirm Password
                            </div>
                            <input
                                type={showPassword2 ? "password" : "text"}
                                className={styles["input-data"]}
                                placeholder="●●●●●●●●"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}>
                            </input>
                            <span onClick={togglePassword2} className={styles["eye-icon"]}>
                                {showPassword2 ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </form>
                    <div className={styles["agree-div"]}>
                        <input type="checkbox" className={styles["checkbox"]} onChange={handleCheckboxChange} checked={agreed}></input>
                        I agree to the Terms of Service and Privacy Policy
                    </div>
                    <div className={styles["create-account-btn"]} onClick={handleSubmit}>
                        <FaArrowRightToBracket />
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