import React from 'react';
import history from '../../history';
import snoop from "../../img/snoop.gif"
import HEADER from '../header/header';
import openMenu from '../menu/open_menu';
import Background from '../parallax/background';
import BackgroundMobile from '../parallax/background_mobile';
import gitlab from "../../img/gitlab.png"
import github from "../../img/github.png"
import linkedin from "../../img/linkedin.png"
import email from "../../img/email.png"
import * as Icon from "react-bootstrap-icons"

export default function Lost(props) {
    function change(page) {
        document.getElementById("fade").style.opacity = "0";
        setTimeout(function () {
            history.push(page);
        }, 400);
    }

    return (
        <div className="main" id="main" onClick={() => openMenu("close")} style={{ overflow: "hidden" }}>
            <div className="content" style={{ overflow: "unset", position: "unset" }}>
                {/* <div style={{ position: "relative" }}>
                    <HEADER />
                </div> */}

                <div id="lost">
                    <div style={{ position: "relative" }} >
                        <Background />
                        <BackgroundMobile />
                    </div>
                    <div id="fade" style={{ textAlign: "center" }}>
                        <div className="section">
                            <div className="heading" style={{ border: "none", width: "100%" }}>
                                Oh, hi
                            </div>
                            <div className="content-lost" style={{ border: "none", width: "100%", marginBottom: "15px" }}>
                                You lost? Or just having a snoop?
                            </div>
                            <img className="gif" src={snoop} alt="Go ahead, snoop around" />
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
                            {/* <div className="link_to_other" style={{ display: props.noLink ? "none" : "" }}>
                                Check out my&nbsp;<span onClick={() => change("cv")}>CV<div className="arrow"><Icon.ArrowRightShort /></div></span>
                                <br />
                                OR
                                <br />
                                Check out my&nbsp;<span onClick={() => change("projects")}>projects<div className="arrow"><Icon.ArrowRightShort /></div></span>
                            </div> */}
                            <div style={{ textAlign: "center" }}>
                                <div className="link_btn" onClick={() => change("/cv")}>
                                    CV
                                </div>
                                <div className="link_btn" onClick={() => change("/projects")}>
                                    Projects
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}