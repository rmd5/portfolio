import React, { Component } from 'react';
import BIO from '../sections/biography/bio';
import EXPERIENCE from '../sections/experience/experience';
import profile from "../../../img/profile.jpg";
import EDUCATION from '../sections/education/education';
import TECHNICAL from '../sections/technical/technical';
import NAV from '../navigation/nav';
import SKILLS from '../sections/skills/skills';
import INTERESTS from '../sections/interests/interests';
import smoothscroll from 'smoothscroll-polyfill';
import HEADER from '../../header/header';

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

    render() {
        return (
            <div className="main" id="main">
                <div className="content">
                    <HEADER />

                    <BIO />
                    <EXPERIENCE />
                    <EDUCATION />
                    <TECHNICAL />
                    <SKILLS />
                    <INTERESTS />

                    <div onClick={() => document.getElementById("main").scrollTo({top: 0, behavior: 'smooth'})} style={{ visibility: this.state.top ? "visible" : "hidden" }} className="scroll_button">
                        <div className="tooltip">Scroll to top</div>
                        <i class="fas fa-chevron-up"></i>
                    </div>

                    <div className="footer"></div>

                    <NAV />
                </div>
            </div>
        );
    }
}

export default CV;