import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";

const Header = () => {
    return (
        <>
            <div className="header-container">
                <img src={logo} alt="" />
                <div className="links">
                    <a href="/order">Order</a>
                    <a href="/preview">Order Preview</a>
                    <a href="/inventory">Manage Inventory</a>
                    <a href="/login">Login</a>
                </div>
            </div>
        </>
    );
};

export default Header;
