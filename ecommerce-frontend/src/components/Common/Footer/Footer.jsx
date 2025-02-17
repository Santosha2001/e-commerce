import React from 'react'
import { NavLink } from "react-router-dom";
import '../../../styles/footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-links">
                <ul>
                    <NavLink to={"/"}>About Us</NavLink>
                    <NavLink to={"/"}>Contact Us</NavLink>
                    <NavLink to={"/"}>Terms & Cnnditions</NavLink>
                    <NavLink to={"/"}>Privacy Policy</NavLink>
                    <NavLink to={"/"}>FAQs</NavLink>
                </ul>
            </div>

            <div className="footer-info">
                <p>&copy; 2025 Shop Mart. All right reserved.</p>
            </div>
        </footer>
    );
};
export default Footer;
