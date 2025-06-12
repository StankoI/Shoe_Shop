import { Link, useNavigate } from "react-router-dom";
import styles from "./loginComponent.module.css"
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";

const LoginComponent = () => {

    const { setAuth } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const togglePassword = () => {
        setShowPassword(showPassword => !showPassword);
    }

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const loginData = {
            ...formData
        }

        try {
            const responce = await axios.post('http://localhost:8080/client/login',
                loginData,{
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );

            setAuth({
                name:responce?.data?.user?.name,
                email:responce?.data?.user?.email,
                phoneNumber:responce?.data?.user?.phoneNumber,
                role:responce?.data?.user?.role,
                password:formData.password,
                accessToken: responce?.data?.accessToken
            })

            navigate('/')

            console.log(responce?.data)
        }
        catch(err: any) {
            console.log({error: err.message})
        }

        setFormData({
            email: '',
            password: ''
        })
    }

    return (
        <div className={styles["login-container"]}>
            <div className={styles["login"]}>
                <div className={styles["sign-in-container"]}>
                    <div className={styles["login-icon"]}>
                        <FaArrowRightToBracket />
                    </div>
                    <div className={styles["sign-in-title"]}>
                        Sign In
                    </div>
                    <div className={styles["sign-in-text"]}>
                        Enter your credentials to access your account
                    </div>
                    <form className={styles["form-element"]}>
                        <div className={styles["form-email"]} >Email</div>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            className={styles["input-data"]}
                            placeholder="example@mail.com"
                            onChange={handleFormChange}
                        >
                        </input>
                        <div className={styles["password-wrapper"]}>
                            <div className={styles["form-password"]}>
                                Password
                                <Link to={"/register"} className={styles["forgot-password"]}>Forgot password?</Link>
                            </div>
                            <input
                                type={showPassword ? "password" : "text"}
                                className={styles["input-data"]}
                                name="password"
                                value={formData.password}
                                placeholder="●●●●●●●●"
                                onChange={handleFormChange}
                            >
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
                    <div className={styles["sign-in-btn"]} onClick={handleSubmit}>
                        <FaArrowRightToBracket />
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