import React, { Component } from 'react';
import history from '../../../history';
import profile from "../../../img/profile.jpg";
import HEADER from '../../header/header';

class LANDING extends Component {
    change() {
        let landing = document.getElementById("header");
        landing.classList.add("header_after");

        document.getElementById("welcome").style.opacity = "0";
        setTimeout(function() {
            history.push("/cv");
        }, 400);
    }

    render() {
        return (
            <div className="landing_wrap main" id="main">
                <div className="content" id="content">
                    <div className="landing" id="landing">
                        <HEADER />

                        <div className="welcome" id="welcome">
                            {/* Welcome

                            <div className="links">
                                What would you like to see?
                            </div> */}

                            <div className="link_btn" onClick={() => this.change()}>
                                CV
                            </div>
                            <div className="link_btn">
                                Projects
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LANDING;