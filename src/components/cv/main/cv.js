import React, { Component } from 'react';
import BIO from '../sections/biography/bio';
import EXPERIENCE from '../sections/experience/experience';
import EDUCATION from '../sections/education/education';
import TECHNICAL from '../sections/technical/technical';
import NAV from '../navigation/nav';
import SKILLS from '../sections/skills/skills';
import INTERESTS from '../sections/interests/interests';
import smoothscroll from 'smoothscroll-polyfill';
import HEADER from '../../header/header';
import * as Icon from "react-bootstrap-icons";
import history from '../../../history';
import Background from '../../parallax/background';
import BackgroundMobile from '../../parallax/background_mobile';

smoothscroll.polyfill();

class CV extends Component {
    constructor(props) {
        super(props);
        this.state = {
            top: false
        };
    }

    componentDidMount() {
        this.fadeIn("biography")
        this.fadeIn("education")
        this.fadeIn("experience")
        this.fadeIn("interests")
        this.fadeIn("skills")
        this.fadeIn("technical")
        document.getElementById("main").addEventListener("scroll", e => {
            this.scrolled()
            this.fadeIn("biography")
            this.fadeIn("education")
            this.fadeIn("experience")
            this.fadeIn("interests")
            this.fadeIn("skills")
            this.fadeIn("technical")
        });
    }

    fadeIn(id) {
        if (this.isInView(id)) {
            document.getElementById(id).style.opacity = "1"
            document.getElementById(id).style.transform = "translate(0,0)"
        }
    }

    isInView(id) {
        let offset = 200;
        const top = document.getElementById(id).getBoundingClientRect().top;
        return (top + offset) >= 0 && (top + offset) <= window.innerHeight;
    }

    scrolled() {
        let y = document.getElementById("main").scrollTop;
        let top = false;
        if (y > 300) {
            top = true;
        }
        this.setState({
            top: top
        });
    }

    change() {
        document.getElementById("fade").style.opacity = "0";
        setTimeout(function () {
            history.push("/projects");
        }, 400);
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    render() {
        return (
            <div className="main" id="main">
                <div className="content">
                    <div style={{ position: "relative" }}>
                        <HEADER />
                        <div className="link_to_other">
                            Check out my <span onClick={() => this.change()}>projects<div className="arrow"><Icon.ArrowRightShort /></div></span>
                        </div>
                    </div>

                    <div id="cv">
                        <Background />
                        <BackgroundMobile />
                        <div id="fade">
                            <BIO />
                            <EXPERIENCE />
                            <EDUCATION />
                            <TECHNICAL />
                            <SKILLS />
                            <INTERESTS />

                            <div onClick={() => document.getElementById("main").scrollTo({ top: 0, behavior: 'smooth' })} style={{ visibility: this.state.top ? "visible" : "hidden" }} className="scroll_button">
                                <div className="tooltip">Scroll to top</div>
                                <div className="up">
                                    <Icon.ArrowUpShort />
                                </div>
                            </div>

                            <div className="footer"></div>

                            <NAV />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CV;