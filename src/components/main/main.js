import React, { Component } from 'react';
import BIO from '../sections/biography/bio';
import EXPERIENCE from '../sections/experience/experience';
import profile from "../../img/profile.jpg";
import EDUCATION from '../sections/education/education';
import TECHNICAL from '../sections/technical/technical';
import NAV from '../navigation/nav';
import SKILLS from '../sections/skills/skills';
import INTERESTS from '../sections/interests/interests';
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

class MAIN extends Component {
    render() {
        return (
            <div className="main" id="main">
                <div className="content">
                    <div className="header">
                        <img className="profile" src={profile} alt="Rory" />
                        <div className="name_box">
                            <div className="name">Rory Dobson</div>
                            <div className="contact">
                                <a className="icon" href="https://gitlab.com/rmd5" target="_blank">
                                    <i class="fab fa-gitlab"></i>
                                </a>
                                <a className="icon" href="https://www.linkedin.com/in/rory-dobson-12b516174/" target="_blank">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                                <a className="icon" href="mailto:rory.dobson@yahoo.com">
                                    <i class="far fa-envelope"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <BIO />
                    <EXPERIENCE />
                    <EDUCATION />
                    <TECHNICAL />
                    <SKILLS />
                    <INTERESTS />

                    <div className="footer"></div>

                    <NAV />
                </div>
            </div>
        );
    }
}

export default MAIN;