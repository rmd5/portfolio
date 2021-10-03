import React, { useState } from 'react';
import * as Icon from "react-bootstrap-icons"
import gitlab from "../../img/gitlab.png"
import github from "../../img/github.png"
import linkedin from "../../img/linkedin.png"
import email from "../../img/email.png"
import history from '../../history';
import openMenu from './open_menu';

export default function Menu(props) {
    const [link, setLink] = useState(window.location.pathname)

    function setTheme(theme) {
        try {
            localStorage.setItem("theme", theme)
            props.setTheme(theme)
        } catch (err) { }
    }

    function setSize(size) {
        try {
            localStorage.setItem("size", size)
            props.setSize(size)
        } catch (err) { }
    }

    function setPosition(pos) {
        try {
            localStorage.setItem("position", pos)
            props.setPosition(pos)
        } catch (err) { }
    }

    function change(page) {
        openMenu("close")
        document.getElementById("fade").style.opacity = "0";
        setTimeout(function () {
            history.push("/" + page);
            setLink("/" + page)
        }, 400);
    }

    return (
        <>
            <div className={"gear " + props.position} onClick={() => openMenu("open")}>
                <Icon.List />
                {/* <i class="fas fa-cogs"></i> */}
            </div>

            <div className={"slide_menu " + props.position} id="menu">
                <div className="scroller">
                    <div style={{ textAlign: props.position === "right" ? "left" : "right" }} className="X" onClick={() => openMenu("close")}>
                        <Icon.X />
                    </div>

                    <div className="contact">
                        <a className="icon" href="https://gitlab.com/rmd5" target="_blank" rel="noreferrer">
                            {/* <i class="fab fa-gitlab"></i> */}
                            <img className="contact_img" src={gitlab} alt="gitlab" />
                        </a>
                        <a className="icon" href="https://github.com/rmd5" target="_blank" rel="noreferrer">
                            {/* <i class="fab fa-gitlab"></i> */}
                            <img className="contact_img" src={github} alt="github" />
                        </a>
                        <a className="icon" href="https://www.linkedin.com/in/rory-dobson/" target="_blank" rel="noreferrer">
                            {/* <i class="fab fa-linkedin"></i> */}
                            <img className="contact_img" src={linkedin} alt="linkedin" />
                        </a>
                        <a className="icon" href="mailto:rory.dobson@yahoo.com">
                            {/* <i class="far fa-envelope"></i> */}
                            <img className="contact_img" src={email} alt="email" />
                        </a>
                    </div>

                    <div className="link_to_other">
                        Check out my&nbsp;
                        {
                            window.location.pathname === "/cv" ?
                                <span onClick={() => change("projects")}>projects<div className="arrow"><Icon.ArrowRightShort /></div></span>
                                :
                                <span onClick={() => change("cv")}>CV<div className="arrow"><Icon.ArrowRightShort /></div></span>
                        }
                    </div>

                    <div className="menu_heading">Theme</div>
                    <button className={props.theme === "light" ? "active" : ""} onClick={() => setTheme("light")}>Light theme</button>
                    <button className={props.theme === "dark" ? "active" : ""} onClick={() => setTheme("dark")}>Dark theme</button>
                    <button className={props.theme === "mono-light" ? "active" : ""} onClick={() => setTheme("mono-light")}>Monochrome</button>
                    <button className={props.theme === "clown" ? "active" : ""} onClick={() => setTheme("clown")}>Clown theme</button>
                    {/* <button className={props.theme === "mono-dark" ? "active" : ""} onClick={() => setTheme("mono-dark")}>Mono-dark</button> */}

                    <div className="menu_heading">Font size</div>
                    <button className={props.size === "x-small" ? "active" : ""} onClick={() => setSize("x-small")}>X-Small</button>
                    <button className={props.size === "small" ? "active" : ""} onClick={() => setSize("small")}>Small</button>
                    <button className={props.size === "medium" ? "active" : ""} onClick={() => setSize("medium")}>Medium</button>
                    <button className={props.size === "large" ? "active" : ""} onClick={() => setSize("large")}>Large</button>
                    <button className={props.size === "x-large" ? "active" : ""} onClick={() => setSize("x-large")}>X-Large</button>

                    <div className="menu_heading">Menu position</div>
                    <button className={props.position === "left" ? "active" : ""} onClick={() => setPosition("left")}>Left</button>
                    <button className={props.position === "right" ? "active" : ""} onClick={() => setPosition("right")}>Right</button>
                </div>
            </div>
        </>
    );
}