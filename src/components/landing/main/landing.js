import React, { Component } from 'react';
import history from '../../../history';
import HEADER from '../../header/header';
import Background from '../../parallax/background';
import BackgroundMobile from '../../parallax/background_mobile';

class LANDING extends Component {
    change(link) {
        let landing = document.getElementById("header");
        landing.classList.add("header_after");

        document.getElementById("welcome").style.opacity = "0";
        setTimeout(function () {
            history.push(link);
        }, 400);
    }

    render() {
        return (
            <div className="landing_wrap main" id="main">
                <div className="content" id="content">
                    <div className="landing" id="landing">
                        <HEADER noLink />
                        <div className="background_wrapper">
                            <Background />
                        </div>
                        <div className="background_wrapper">
                            <BackgroundMobile />
                        </div>

                        <div className="welcome" id="welcome" style={{ textAlign: "left" }}>
                            {/* Hi there!

                            <div className="links">
                                I am a computer science student in my fourth year of University at Heriot Watt.
                            </div> */}

                            <div style={{ textAlign: "center" }}>
                                <div className="link_btn" onClick={() => this.change("/cv")}>
                                    CV
                                </div>
                                <div className="link_btn" onClick={() => this.change("/projects")}>
                                    Projects
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LANDING;