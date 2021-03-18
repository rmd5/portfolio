import React from 'react';
import profile from "../../img/profile.jpg";

function HEADER() {
    return (
        <div>
            <div className="header" id="header">
                <img className="profile" src={profile} alt="Rory" />
                <br className="mobile" />
                <div className="name_box">
                    <div className="name">
                        Rory Dobson
                        <div className="description">
                            Frontend developer
                        </div>
                    </div>
                    <div className="contact">
                        <a className="icon" href="https://gitlab.com/rmd5" target="_blank" rel="noreferrer">
                            <i class="fab fa-gitlab"></i>
                        </a>
                        <a className="icon" href="https://www.linkedin.com/in/rory-dobson-12b516174/" target="_blank" rel="noreferrer">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a className="icon" href="mailto:rory.dobson@yahoo.com">
                            <i class="far fa-envelope"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HEADER;