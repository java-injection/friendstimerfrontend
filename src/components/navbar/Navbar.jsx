import React from "react";
import "./Navbar.css";

import logo from "../../images/mbrilock_99595.png"
import NavbarElement from "./navbarElement/NavbarElement.jsx";

export default function Navbar() {

    return (

        <div className="Nav">
            <img className= {"NavLogo"} src={logo} />
            <div className={"NavChilds"}>
                <NavbarElement name={"Home"}/>
                <NavbarElement name={"Home"}/>
                <NavbarElement name={"My timers"}/>
            </div>
        </div>

    )
}