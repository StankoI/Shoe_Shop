import { NavLink, Link } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";

const Navbar = () => {

    const [productsInCart, setProductsInCart] = useState(0);

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
        return(
        <div className="linksM">
            <NavLink
                to="/"
                className={({ isActive }) => `linkM ${isActive ? "selected" : ""}`}
            >
                Home
            </NavLink>
            <NavLink
                to="/products"
                className={({ isActive }) => `linkM ${isActive ? "selected" : ""}`}
            >
                Products
            </NavLink>
            <NavLink
                to="/about"
                className={({ isActive }) => `linkM ${isActive ? "selected" : ""}`}
            >
                About
            </NavLink>
            <NavLink
                to="/contact"
                className={({ isActive }) => `linkM ${isActive ? "selected" : ""}`}
            >
                Contact
            </NavLink>
        </div>
        );
    }

    return mobileNavbar();
};

export default Navbar;