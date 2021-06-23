import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer">
            <Link to="/components/aboutme"
                className="footer-about"
            >About me</Link>
            <div
                className="footer-productions"
            >
                © JoMoDaKe Productions
            </div>
        </div>
    )
}

export default Footer
