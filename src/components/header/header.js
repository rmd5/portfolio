import React from 'react';
import profile from "../../img/profile.jpg";
import gitlab from "../../img/gitlab.png"
import github from "../../img/github.png"
import linkedin from "../../img/linkedin.png"
import email from "../../img/email.png"
import glasses from "../../img/glasses.png"
import * as Icon from "react-bootstrap-icons"
import history from '../../history';
import openMenu from '../menu/open_menu';

function HEADER(props) {
    function change(page) {
        openMenu("close")
        document.getElementById("fade").style.opacity = "0";
        setTimeout(function () {
            history.push("/" + page)
        }, 400);
    }

    return (
        <div>
            <div className="header" id="header">
                <div className="image_block">
                    <img className="profile" src={profile} alt="Rory" />
                    <img style={{ display: localStorage.getItem("theme") === "clown" ? "block" : "none" }} className="glasses" src={glasses} alt="Clown glasses" />
                </div>
                <br className="mobile" />
                <div className="name_box">
                    <div className="name">
                        Rory Dobson
                        <div className="description">
                            Full-stack developer
                        </div>
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
                        <a className="icon" href="mailto:hello@rorydobson.com">
                            {/* <i class="far fa-envelope"></i> */}
                            <img className="contact_img" src={email} alt="email" />
                        </a>
                    </div>
                    <div className="link_to_other" style={{display: props.noLink ? "none" : ""}}>
                        Check out my&nbsp;
                        {
                            window.location.pathname === "/cv" ?
                                <span onClick={() => change("projects")}>projects<div className="arrow"><Icon.ArrowRightShort /></div></span>
                                :
                                <span onClick={() => change("cv")}>CV<div className="arrow"><Icon.ArrowRightShort /></div></span>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HEADER;