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
                        Currently working as a Full-stack Developer at Free.co.uk.
                        <br /><br />
                        I love learning about new technologies and ways in which I can improve my skills.
                        I have a passion for problem solving and mathematics, and love applying that passion through the use of the MERN stack.
                        <br /><br />
                        I have been nominated for the Young Software Engineer of the year award 2021 by Heriot Watt University.
                        For my dissertation, looking at increasing the employability of Rohingya refugees in Malaysia, I’m really proud to say that I won the Cooper-Walker Engineering Ltd prize for outstanding project work.
                    </div>
                </div>
            </div>
        );
    }
}

export default BIO;