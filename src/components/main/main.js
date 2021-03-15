import React, { Component } from 'react';
import BIO from '../sections/biography/bio';
import EXPERIENCE from '../sections/experience/experience';
import profile from "../../img/profile.jpg";
import EDUCATION from '../sections/education/education';
import TECHNICAL from '../sections/technical/technical';

class MAIN extends Component {
    render() {
        return (
            <div className="main">
                <div className="content">
                    <div className="header">
                        <img className="profile" src={profile} alt="Rory" />
                        <div className="name_box">
                            <div className="name">Rory Dobson</div>
                            <div className="contact">
                                <div className="icon">
                                    <i class="fab fa-gitlab"></i>
                                </div>
                                <div className="icon">
                                    <i class="fab fa-linkedin"></i>
                                </div>
                                <div className="icon">
                                    <i class="far fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <BIO />
                    <EXPERIENCE />
                    <EDUCATION />
                    <TECHNICAL />
                </div>
            </div>
        );
    }
}

export default MAIN;