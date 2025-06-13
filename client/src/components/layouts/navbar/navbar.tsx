import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css"
import { useState } from "react";
import useDevice from "../../../hooks/useDevice";
import Logo from "../icons/icons"
import { CiShoppingBasket } from "react-icons/ci";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { useShoppingCart } from "../../../contexts/shopingCartContext";

const Navbar = () => {

    const {cartQuantity} = useShoppingCart();
    const [clicked, setClicked] = useState(false);
    const device = useDevice();

    const handleClick = () => {
        setClicked(clicked => !clicked)
    }

    const pcNavbar = () => {
        return (
            <nav className={styles["navbar"]}>
                <div className={styles["nav-container"]}>
                    <div className={styles["nav-left"]}>
                        <Logo />
                        <div className={styles["links"]}>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `${styles["link"]} ${isActive ? styles["selected"] : ""}`
                                }
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/products"
                                className={({ isActive }) =>
                                    `${styles["link"]} ${isActive ? styles["selected"] : ""}`
                                }
                            >
                                Products
                            </NavLink>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `${styles["link"]} ${isActive ? styles["selected"] : ""}`
                                }
                            >
                                About
                            </NavLink>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `${styles["link"]} ${isActive ? styles["selected"] : ""}`
                                }
                            >
                                Contact
                            </NavLink>
                        </div>
                    </div>
                    <div className={styles["actions"]}>
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                `${styles["login-btn"]} ${isActive ? styles["selected"] : ""}`
                            }
                        >
                            <FaArrowRightToBracket />
                            Login
                        </NavLink>

                        <NavLink
                            to="/shopingCart"
                             className={({ isActive }) =>
                                `${styles["shoping-cart-btn"]} ${isActive ? styles["selected"] : ""}`
                            }>
                            <CiShoppingBasket className={styles["shoping-cart-icon"]} />
                            <div
                                className={`${styles["shoping-cart-notification"]} ${cartQuantity === 0 ? styles["invisible"] : ""
                                    }`}
                            >
                                {cartQuantity}
                            </div>
                        </NavLink>
                    </div>
                </div>
            </nav>
        );
    }

    const mobileNavbar = () => {
        return (
            // <div className={styles["container"]}>
            <div className={`${styles["container"]} ${clicked ? "" : styles["invisible"]}`}>
                <nav className={styles["navbarM"]}>
                    <div className={styles["nav-containerM"]}>
                        <div className={styles["nav-leftM"]}>
                            <Logo />
                        </div>
                        <div className={styles["menu"]} onClick={handleClick}>
                            <div className={`${styles["lines"]} ${!clicked ? "" : styles["invisible"]}`}>
                                <div className={styles["line"]}></div>
                                <div className={styles["line"]}></div>
                                <div className={styles["line"]}></div>
                            </div>
                            <div className={`${styles["linesX"]} ${clicked ? "" : styles["invisible"]}`}>
                                <div className={styles["lineX1"]}></div>
                                <div className={styles["lineX2"]}></div>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className={`${styles["linksM"]} ${clicked ? "" : styles["invisible"]}`}>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `${styles["linkM"]} ${isActive ? styles["selected"] : ""}`
                        }
                        onClick={() => setClicked(false)}
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/products"
                        className={({ isActive }) =>
                            `${styles["linkM"]} ${isActive ? styles["selected"] : ""}`
                        }
                        onClick={() => setClicked(false)}
                    >
                        Products
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `${styles["linkM"]} ${isActive ? styles["selected"] : ""}`
                        }
                        onClick={() => setClicked(false)}
                    >
                        About
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `${styles["linkM"]} ${isActive ? styles["selected"] : ""}`
                        }
                        onClick={() => setClicked(false)}
                    >
                        Contact
                    </NavLink>

                    <div className={styles["actionsM"]}>
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                `${styles["login-btnM"]} ${isActive ? styles["selected"] : ""}`
                            }
                            onClick={() => setClicked(false)}
                        >
                            <FaArrowRightToBracket />
                            Login
                        </NavLink>

                        <NavLink
                            to="/shopingCart"
                            className={styles["shoping-cart-buttonM"]}
                            onClick={() => setClicked(false)}
                        >
                            Cart {cartQuantity === 0 ? "" : `(${cartQuantity})`}
                            <CiShoppingBasket className={styles["shoping-cart-icon-M"]} />
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    };


    return device === 'pc' ? pcNavbar() : mobileNavbar();
};

export default Navbar;