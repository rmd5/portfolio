import React, { Component } from 'react';

class BIO extends Component {
    render() {
        return (
            <div className="section" id="biography">
                <div className="heading">
                    About me
                </div>
                <div className="dropper"></div>
                <div className="sub_section">
                    <div className="sub_heading"></div>
                    <div className="bio_text">
                        Currently working as a Full Stack Engineer at Free.co.uk.
                        <br /><br />
                        I love learning about new technologies and ways in which I can improve my skills.
                        I have a passion for problem solving and mathematics, and love applying that passion through the use of the MERN stack.
                    </div>
                </div>
            </div>
        );
    }
}

export default BIO;