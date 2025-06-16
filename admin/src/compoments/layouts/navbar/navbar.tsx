import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css"
import { useState } from "react";
import useDevice from "../../../hooks/useDevice";
import Logo from "../../../icons/icons"
// import { CiShoppingBasket } from "react-icons/ci";
// import { FaArrowRightToBracket } from "react-icons/fa6";
import useAuth from "../../../hooks/useAuth";
import useLogout from "../../../hooks/useLogout";

const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const device = useDevice();
    const logout = useLogout();

    const { auth } = useAuth();
    const isLoggedIn = auth?.accessToken;

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
                                to="/categories"
                                className={({ isActive }) =>
                                    `${styles["link"]} ${isActive ? styles["selected"] : ""}`
                                }
                            >
                                Categories
                            </NavLink>
                            <NavLink
                                to="/colors"
                                className={({ isActive }) =>
                                    `${styles["link"]} ${isActive ? styles["selected"] : ""}`
                                }
                            >
                                Colors
                            </NavLink>
                             <NavLink
                                to="/users"
                                className={({ isActive }) =>
                                    `${styles["link"]} ${isActive ? styles["selected"] : ""}`
                                }
                            >
                                Users
                            </NavLink>
                            <NavLink
                                to="/invoices"
                                className={({ isActive }) =>
                                    `${styles["link"]} ${isActive ? styles["selected"] : ""}`
                                }
                            >
                                Invoices
                            </NavLink>
                            <NavLink
                                to="/orders"
                                className={({ isActive }) =>
                                    `${styles["link"]} ${isActive ? styles["selected"] : ""}`
                                }
                            >
                                Orders
                            </NavLink>
                        </div>
                    </div>
                    <div className={styles["actions"]}>
                        {isLoggedIn && (<>
                            <div className={styles["greeting"]}>
                                Hello, {auth.name || "User"}
                            </div>
                            <div className={styles["logout-btn"]} onClick={logout}>logout</div>
                        </>
                        ) }

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
                        {isLoggedIn && (<>
                            <div className={styles["greetingM"]}>
                                Hello, {auth.name || "User"}
                            </div>
                            <div className={styles["logout-btn"]} onClick={logout}>logout</div>
                        </>
                        )}
                    </div>
                </div>
            </div>
        );
    };


    return device === 'pc' ? pcNavbar() : mobileNavbar();
};

export default Navbar;