import React from "react";
import "./navbar.css"
import { Link } from "react-router-dom";





function NavBar () {
    return(
        <nav className="flex navbar">
            <div className="nombretienda">
                <Link to="/">Logo</Link>
            </div>
        <ul className="flex">
        
            <li>
            <Link to="/">Recetas</Link>
            </li>
            <li>
            <Link to="/category/carne">Con carne</Link>
            </li>
            <li>
            <Link to="/category/veggie">Veggie</Link>
            </li>
            <li>
            <Link to="/">Lista</Link>
            </li>
        </ul>
        </nav>
    )
}

export default NavBar;