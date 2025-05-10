import { NavLink, Link } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";
import useDevice, { DeviceType } from "../hooks/useDevice";

const Navbar = () => {

    const [productsInCart, setProductsInCart] = useState(0);
    const [cliked, setCliked] = useState(false);
    const device = useDevice();

    const handleClick = () => {
        if (cliked === true) {
            setCliked(false);
        } else {
            setCliked(true);
        }
    }

    const logo = () => {
        return (
            <div className="logo">
                <Link to="/" className="logo-link">
                    <div className="logo-icon">E</div>
                    <div className="logo-text">EcoStride</div>
                </Link>
            </div>
        );
    }

    const pcNavbar = () => {
        return (
            <nav className="navbar">
                <div className="nav-container">
                    <div className="nav-left">
                        {logo()}
                        <div className="links">
                            <NavLink
                                to="/"
                                className={({ isActive }) => `link ${isActive ? "selected" : ""}`}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/products"
                                className={({ isActive }) => `link ${isActive ? "selected" : ""}`}
                            >
                                Products
                            </NavLink>
                            <NavLink
                                to="/about"
                                className={({ isActive }) => `link ${isActive ? "selected" : ""}`}
                            >
                                About
                            </NavLink>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) => `link ${isActive ? "selected" : ""}`}
                            >
                                Contact
                            </NavLink>
                        </div>
                    </div>
                    <div className="actions">
                        <NavLink to="/login" className={({ isActive }) => `login-btn ${isActive ? "selected" : ""}`} >
                            Login
                        </NavLink>
                        <div className="shoping-cart-button">
                            <div className={`shoping-cart-notification ${productsInCart === 0 ? "invisible" : ""}`}>
                                {productsInCart}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }

    const mobileNavbar = () => {
        return (
            <div className="container">
                <nav className="navbarM">
                    <div className="nav-containerM">
                        <div className="nav-leftM">
                            {logo()}
                        </div>
                        <div className="menu" onClick={() => handleClick()}>
                            <div className={`lines ${!cliked? "" : "invisible"}`}>
                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line"></div>
                            </div>
                            <div className={`linesX ${cliked? "" : "invisible"}`}>
                                <div className="lineX1"></div>
                                <div className="lineX2"></div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className={`linksM ${cliked ? "" : "invisible"}`}>
                    <NavLink
                        to="/"
                        className={({ isActive }) => `linkM ${isActive ? "selected" : ""}`}
                        onClick={() => setCliked(false)}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/products"
                        className={({ isActive }) => `linkM ${isActive ? "selected" : ""}`}
                        onClick={() => setCliked(false)}
                    >
                        Products
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => `linkM ${isActive ? "selected" : ""}`}
                        onClick={() => setCliked(false)}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => `linkM ${isActive ? "selected" : ""}`}
                        onClick={() => setCliked(false)}
                    >
                        Contact
                    </NavLink>
                    <div className="actionsM">
                        <NavLink to="/login"
                            className={({ isActive }) => `login-btnM ${isActive ? "selected" : ""}`}
                            onClick={() => setCliked(false)} >
                            Login
                        </NavLink>
                        <div className="shoping-cart-buttonM"
                            onClick={() => setCliked(false)}>
                            Cart {productsInCart === 0 ? "" : `(${productsInCart})`}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return device === 'pc' ? pcNavbar() : mobileNavbar();
};

export default Navbar;