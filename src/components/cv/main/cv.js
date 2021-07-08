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
import Parallax from '../../parallax';
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
        document.getElementById("main").addEventListener("scroll", () => this.scrolled());
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
        document.getElementById("cv").style.opacity = "0";
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
                        <BIO />
                        <EXPERIENCE />
                        <EDUCATION />
                        <TECHNICAL />
                        <SKILLS />
                        <INTERESTS />

                        <div onClick={() => document.getElementById("main").scrollTo({ top: 0, behavior: 'smooth' })} style={{ visibility: this.state.top ? "visible" : "hidden" }} className="scroll_button">
                            <div className="tooltip">Scroll to top</div>
                            <i class="fas fa-chevron-up"></i>
                        </div>

                        <div className="footer"></div>

                        <NAV />
                    </div>
                </div>
            </div>
        );
    }
}

export default CV;