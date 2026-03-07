import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">

            <div className="nav-title">Book App</div>

            <div className={`nav-links ${menuOpen ? "active" : ""}`}>
                <Link to="/">Home</Link>
                <Link to="/form">Add Book</Link>
                <Link to="/table">Book Table</Link>
            </div>

            <div
                className="hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </div>

        </nav>
    );
}

export default Navbar;