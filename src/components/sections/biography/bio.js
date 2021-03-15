import React, { Component } from 'react';

class BIO extends Component {
    render() {
        return (
            <div className="section">
                <div className="heading">
                    About me...
                </div>
                <div className="sub_section">
                    <div className="dropper"></div>
                    <div className="sub_heading"></div>
                    <div className="bio_text">
                        Currently working as a Full Stack Engineer at Free.co.uk.<br /><br />
                        Computer Science fourth year, currently studying Big Data, E-Commerce and Machine Learning. For my dissertation, I attempting to increase the employability of Rohingya refugees in Malaysia through the use of a skill sharing web app.<br /><br />
                        I have achieved straight A’s in third year, and in the first semester of fourth year, and I am well on my way to earning a first-class degree.
                    </div>
                </div>
            </div>
        );
    }
}

export default BIO;